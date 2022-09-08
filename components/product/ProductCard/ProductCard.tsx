import { FC, memo } from 'react';
import cn from 'clsx';
import Link from 'next/link';
import type { Product } from '@/lib/types/product';
import s from './ProductCard.module.css';
import Image from 'next/image';
import usePrice from '@/domain/product/use-price';

interface Props {
    className?: string;
    product: Product;
    variant?: 'default' | 'slim' | 'simple';
}

const placeholderImg = '/product-img-placeholder.svg';

const ProductCard: FC<Props> = ({ product, className, variant }) => {
    const { goodsBaseInfo: goods } = product;
    const { preStr, unitStr, price } = usePrice({ price: goods.leaseMinPrice, unit: goods.unit });
    const rootClassName = cn(s.root, { [s.slim]: variant === 'slim', [s.simple]: variant === 'simple' }, className);

    return (
        <Link href={`/products/${goods.goodsSn}`}>
            <a aria-label={goods.goodsName}>
                <div className={cn(s.cardContainer, rootClassName)}>
                    {goods?.mainPic && (
                        <div className={s.mainPicContainer}>
                            <Image
                                src={goods?.mainPic || placeholderImg}
                                alt={goods?.goodsName || 'zgl商品图片'}
                                width={200}
                                height={200}
                                className={s.mainPic}
                            />
                        </div>
                    )}
                    <div className={s.cardContent}>
                        <div className={s.goodsTitle}>
                            <span className={cn(goods.grade === 1 ? s.new : s.old, s.tagIcon)}>
                                {goods.grade === 1 ? '全新' : '非全新'}
                            </span>
                            {goods.goodsName}
                        </div>
                        <div className={s.goodsDescContainer}>
                            {goods?.classificationName &&
                                goods.classificationName
                                    .split(',')
                                    .slice(0, 2)
                                    .map((item, index) => (
                                        <div key={`tag${index}`} className={s.goodsDescTag}>
                                            {item}
                                        </div>
                                    ))}
                        </div>
                        <div className={s.priceContainer}>
                            <p className={s.priceWrapper}>
                                {preStr}
                                <span className={s.priceEm}>{price}</span>
                                {unitStr}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default memo(ProductCard);
