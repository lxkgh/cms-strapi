import { FC } from 'react';
import { NavBar, Swiper, Tabs } from 'antd-mobile';
import cn from 'clsx';
import { Product } from '@/lib/types/product';
import Container from '@/components/common/Container';
import s from './ProductView.module.css';
import Image from 'next/image';
import True from '@/components/icons/True';
import usePrice from '@/domain/product/use-price';
import Contact from '../Contact';
import { useRouter } from 'next/router';

interface ProductViewProps {
    product?: Product;
}

const defaultProduct: Product = {
    goodsCarouselPicList: [
        {
            id: 157479,
            pic: 'https://static2.zugeliang01.com/20220822/7dc1a2dc936c3270730339c1cd949461.jpg',
            type: 1,
            sortOrder: 0,
        },
        {
            id: 157480,
            pic: 'https://static2.zugeliang01.com/20220819/ca27d64471c68062e0662724f290b12e.jpg',
            type: 2,
            sortOrder: 1,
        },
        {
            id: 157481,
            pic: 'https://static2.zugeliang01.com/20220819/c00052054d71d6fa46d50f6ae135070c.jpg',
            type: 2,
            sortOrder: 2,
        },
    ],
    goodsBaseInfo: {} as any,
    goodsDetailPicList: [] as any,
};
const ProductView: FC<ProductViewProps> = ({ product = defaultProduct }) => {
    const router = useRouter();
    const onBack = () => {
        console.log('back');
        router.back();
    };
    const items = product?.goodsCarouselPicList?.map((item, index) => (
        <Swiper.Item key={index}>
            <Image src={item.pic} alt="" layout="fill" />
        </Swiper.Item>
    ));
    const { goodsBaseInfo, goodsDetailPicList } = product;
    const { preStr, price, unitStr } = usePrice({
        price: goodsBaseInfo?.leaseMinPrice,
        unit: goodsBaseInfo?.unit,
    });
    return (
        <>
            <Container type="mobile" className={s.mainContainer}>
                <NavBar onBack={onBack} className="bg-white">
                    商品详情
                </NavBar>
                <div className={s.swiperContainer}>
                    <Swiper className={s.swiper}>{items}</Swiper>
                </div>
                <div className={cn(s.roundContainer, s.priceContainer)}>
                    <p className={s.price}>
                        {preStr}
                        <span className={s.priceEm}>{price}</span>
                        {unitStr}
                    </p>
                    <p className={s.title}>{goodsBaseInfo?.goodsName}</p>
                    <p className={s.config}>{goodsBaseInfo?.detail}</p>
                    <p className={s.preasure}>
                        <span className={s.preasureTag}>设备价值</span> {goodsBaseInfo?.deposit}
                    </p>
                </div>
                <div className={cn(s.roundContainer, s.addson)}>
                    <True className={s.addsonIcon} />
                    区块链免押金
                    <True className={cn(s.addsonIcon, 'ml-4')} />
                    正品保障
                </div>
                <div className={cn(s.roundContainer)}>
                    <Tabs>
                        <Tabs.Tab title="商品介绍" key="fruits">
                            {goodsDetailPicList.map((item, index) => (
                                <img src={item.pic} alt="" key={index} style={{ width: '100%' }} />
                            ))}
                        </Tabs.Tab>
                        <Tabs.Tab title="规格参数" key="vegetables">
                            西红柿
                        </Tabs.Tab>
                        <Tabs.Tab title="租赁说明" key="animals">
                            蚂蚁
                        </Tabs.Tab>
                    </Tabs>
                </div>
                <div className="fixed w-[100%] bottom-0">
                    <Contact region="" />
                </div>
            </Container>
        </>
    );
};
export default ProductView;
