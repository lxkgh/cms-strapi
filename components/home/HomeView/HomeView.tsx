import { FC } from 'react';
import { Ellipsis, NavBar, Swiper } from 'antd-mobile';
import cn from 'clsx';
import Container from '@/components/common/Container';
import s from './HomeView.module.css';
import Image, { StaticImageData } from 'next/image';
import { RightOutline } from 'antd-mobile-icons';
import usePrice from '@/domain/product/use-price';
import {
    work,
    netbar,
    hot,
    design,
    code,
    business,
    register,
    hp,
    intel,
    lenovo,
    huawei,
    dell,
    xiaomi,
    alipay,
    apple,
} from 'public/icons';
import Link from 'next/link';
import SearchBar from '@/components/search/SearchBar';
interface Banner {
    sort: number;
    url: string;
    alt: string;
}
interface RecommendGoods {
    price: number;
    goodsName: string;
    goodsSn: string;
    unit?: number | null;
    sort?: number | null;
    imgUrl: string;
    alt: string;
}
interface ArticleItem {
    title: string;
    subtitle?: string;
    link: string;
    img: {
        url: string;
        alt: string;
    };
}
interface HomeViewProps {
    bannerList: Banner[];
    mainRecommend: RecommendGoods;
    recommendList: RecommendGoods[];
    articleList: {
        mainArticle: ArticleItem;
        list: ArticleItem[];
    };
}

const sceneMap: { scene: number; name: string; icon: StaticImageData }[] = [
    {
        scene: 1,
        name: '基础办公',
        icon: work,
    },
    {
        scene: 2,
        name: '商务便携',
        icon: business,
    },
    {
        scene: 2,
        name: '图形设计',
        icon: design,
    },
    {
        scene: 2,
        name: '编程开发',
        icon: code,
    },
    {
        scene: 2,
        name: '网吧电竞',
        icon: netbar,
    },
    {
        scene: 2,
        name: '爆款推荐',
        icon: hot,
    },
];

const companyMap: { name: string; icon: StaticImageData }[] = [
    {
        name: '因特尔',
        icon: intel,
    },
    {
        name: '戴尔',
        icon: dell,
    },
    {
        name: '惠普',
        icon: hp,
    },
    {
        name: '联想',
        icon: lenovo,
    },
    {
        name: '小米',
        icon: xiaomi,
    },
    {
        name: '华为',
        icon: huawei,
    },
    {
        name: '苹果',
        icon: apple,
    },
    {
        name: '支付宝',
        icon: alipay,
    },
];
const defaultHomeData: HomeViewProps = {
    bannerList: [
        {
            alt: '支付宝落地页',
            url: 'https://static2.zugeliang.com/20220614/1a527c50-ebc9-11ec-a29f-d972dabc2b6d.jpeg',
            sort: 2,
        },
    ],
    recommendList: [
        {
            imgUrl: 'https://static2.zugeliang.com/20220715/bf8e9c97d837d6d6cde278450de3f039.jpg',
            goodsName: 'ZGL 400 G4A RX 台式电脑（i5-6400T/8G/240G SSD/24寸显示器）',
            price: 108,
            goodsSn: '03164810845048201422',
            unit: 0,
            alt: '',
        },
        {
            imgUrl: 'https://static2.zugeliang.com/20220406/93d0e831efd33dee462849397aa65fe4.png',
            goodsName: 'ThinkPad T470B RX 极速版笔记本电脑（I5 6代/8G/240G SSD/14寸）',
            price: 108,
            goodsSn: '03164870627015303091',
            unit: 0,
            alt: '',
        },
        {
            imgUrl: 'https://static2.zugeliang.com/20220707/a28e5911b304153bf2dd782e7792a784.jpg',
            goodsName: 'ZGL B31 RX 办公电脑（i3-3代/8G/120G SSD/集显/21.5寸显示器/办公键鼠）',
            price: 75,
            goodsSn: '03165718102875500490',
            unit: 0,
            alt: '',
        },
        {
            imgUrl: 'https://static2.zugeliang.com/20220722/ade2e60c9323bfe143dd3accfef6a161.jpg',
            goodsName: '惠普 600G1 RX 台式电脑（I5-4代/8G/240G SSD/21.5寸显示器/办公键鼠 ）',
            price: 80,
            goodsSn: '03165845289146401330',
            unit: 0,
            alt: '',
        },
        {
            imgUrl: 'https://static2.zugeliang.com/20220805/3c0b44c703a7bd5a503c779956e1a35b.png',
            goodsName: 'ZGL Q22 RX 办公电脑（G3930/8G/120G SSD/集显/办公键鼠/21.5寸显示器）',
            price: 75,
            goodsSn: '03165967233700300378',
            unit: 0,
            alt: '',
        },
    ],
    mainRecommend: {
        imgUrl: 'https://static2.zugeliang.com/20220805/3c0b44c703a7bd5a503c779956e1a35b.png',
        goodsName: 'ZGL Q22 RX 办公电脑（G3930/8G/120G SSD/集显/办公键鼠/21.5寸显示器）',
        price: 75,
        goodsSn: '03165967233700300378',
        unit: 0,
        alt: '',
    },
    articleList: {
        mainArticle: {
            title: '多币种灵活组合，助您优化资产',
            link: 'https://m.zugeliang.com',
            img: {
                url: 'https://static2.zugeliang.com/lease/img/1c4accb0-5f4f-11e9-b13e-0588dbe4ebaf.jpg',
                alt: '租电脑',
            },
        },
        list: [
            {
                title: '外币钻夹最新活动都在这里',
                subtitle: '这是一个很长的副标题',
                img: {
                    url: 'https://static2.zugeliang01.com/20220513/2e40168d70de9521cc03ac983d15448f.jpg',
                    alt: '',
                },
                link: 'https://m.zugeliang.com/goodsDetail/03164870627015303091',
            },
            {
                title: '外币钻夹最新活动都在这里',
                subtitle: '这是一个很长的副标题',
                img: {
                    url: 'https://static2.zugeliang01.com/20220513/2e40168d70de9521cc03ac983d15448f.jpg',
                    alt: '',
                },
                link: 'https://m.zugeliang.com/goodsDetail/03164870627015303091',
            },
            {
                title: '外币钻夹最新活动都在这里',
                subtitle: '这是一个很长的副标题',
                img: {
                    url: 'https://static2.zugeliang01.com/20220513/2e40168d70de9521cc03ac983d15448f.jpg',
                    alt: '',
                },
                link: 'https://m.zugeliang.com/goodsDetail/03164870627015303091',
            },
        ],
    },
};

const HomeView: FC<HomeViewProps> = ({
    bannerList = defaultHomeData.bannerList,
    recommendList = defaultHomeData.recommendList,
    articleList = defaultHomeData.articleList,
}) => {
    const onBack = () => {
        console.log('back');
    };
    const testRecommendItem = {
        img: 'https://static2.zugeliang.com/20220805/3c0b44c703a7bd5a503c779956e1a35b.png',
        goodsSn: '03165967233700300378',
    };
    const items = bannerList?.map((item, index) => (
        <Swiper.Item key={index}>
            <Image src={item.url} alt={item.alt} layout="fill" />
        </Swiper.Item>
    ));
    return (
        <>
            <Container type="mobile" className={s.mainContainer}>
                <NavBar onBack={onBack} className="bg-white">
                    租葛亮免押租赁
                </NavBar>
                <Link href="/search">
                    <div className="mx-3">
                        <SearchBar />
                    </div>
                </Link>
                <div className={s.swiperContainer}>
                    <Swiper className={s.swiper}>{items}</Swiper>
                </div>
                <div className={s.recommendContainer}>
                    <div className={cn(s.recommendHeader, s.pinkGrid)}>
                        <span className={s.recommendTitle}>热门推荐</span>
                        <span className={s.recommendInfo}>精选好物推荐</span>
                        <RightOutline className="float-right" />
                    </div>
                    <div className={s.recommendItems}>
                        {recommendList?.slice(0, 4).map((item, index) => (
                            <div className={s.recommendItem} key={`推荐${index}`}>
                                <div className={s.recommendItemImg}>
                                    <Image src={item.imgUrl} alt={item.alt} layout="fill" />
                                </div>
                                <div className={s.recommendItemName}>
                                    <Ellipsis direction="end" rows={2} content={item.goodsName} />
                                </div>
                                <div className={s.recommendItemPrice}>
                                    <GoodsPrice price={item.price} unit={item.unit || 0} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.scenesContainer}>
                    <div className={s.sceneRecommendItem}>
                        <Image src={testRecommendItem.img} alt="" layout="fill" />
                    </div>
                    <div className={s.scenes}>
                        {sceneMap.map((item, index) => (
                            <Scene scene={item.scene} url={item.icon as any} name={item.name} key={`scene${index}`} />
                        ))}
                    </div>
                </div>
                <div className={s.registerContainer}>
                    <Image src={register} alt="在线注册" layout="fill" />
                </div>
                <div className={s.roundContainer}>
                    <div className={cn(s.recommendHeader, s.blueGrid)}>
                        <span className={s.recommendTitle}>文章咨询</span>
                        <span className={s.recommendInfo}>租葛亮大事件</span>
                        <RightOutline className="float-right" />
                    </div>
                    <div className={s.articlesContainer}>
                        <MainArticle {...articleList.mainArticle} />
                        {articleList.list.map((article, index) => (
                            <Article {...article} key={index} />
                        ))}
                    </div>
                </div>
                <HomeFooter />
            </Container>
        </>
    );
};

const GoodsPrice = ({ price, unit }: { price: number; unit: number }) => {
    const priceObj = usePrice({ price, unit });
    return (
        <>
            {priceObj.preStr}
            <span className={s.priceEm}>{priceObj.price}</span>/{priceObj.unitStr}
        </>
    );
};

const Scene = ({ scene, url, name }: { scene: number; url: string; name: string }) => {
    console.log(scene);
    return (
        <div className={s.sceneItem}>
            <Image src={url} alt="" layout="fill" />
            <div className={s.sceneTitle}>{name}</div>
        </div>
    );
};

const Article = ({ title, subtitle, link, img }: ArticleItem) => {
    return (
        <Link href={link} passHref>
            <a target="_blank">
                <div className={s.articleItem}>
                    <div className={s.articleItemTitles}>
                        <h4>{title}</h4>
                        {subtitle && (
                            <Ellipsis direction="end" rows={2} content={subtitle} className={s.articleItemSubtitle} />
                        )}
                    </div>
                    <div className={s.articleItemImg}>
                        <Image src={img.url} alt={img.alt} layout="fill" />
                    </div>
                </div>
            </a>
        </Link>
    );
};

const MainArticle = ({ title, link, img }: ArticleItem) => {
    return (
        <Link href={link} passHref>
            <div className={s.mainArticleItem}>
                <Image src={img.url} alt={img.alt} layout="fill" />
                <h4>{title}</h4>
            </div>
        </Link>
    );
};

const HomeFooter = () => {
    const companySet1 = companyMap.slice(0, 4);
    const companySet2 = companyMap.slice(4, companyMap.length);
    return (
        <div className={s.homeFooterContainer}>
            <h4>- 合作企业 -</h4>
            <CompanyIcons companys={companySet1} />
            <CompanyIcons companys={companySet2} />
            <div className="h-[3.13rem] mt-2"></div>
        </div>
    );
};

const CompanyIcons = ({ companys }: { companys: { name: string; icon: StaticImageData }[] }) => {
    return (
        <div className={s.companyIconsContainer}>
            {companys.map((company) => (
                <div key={company.name}>
                    <div className={s.companyIconContainer}>
                        <Image src={company.icon} alt={company.name} />
                    </div>
                    <p className={s.companyName}>{company.name}</p>
                </div>
            ))}
        </div>
    );
};
export default HomeView;
