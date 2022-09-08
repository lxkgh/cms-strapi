import ProductView from '@/components/product/ProductView';
import { getAllProductsSn, getProduct } from '@/lib/api/products';
import { GetStaticPropsContext } from 'next';

export default function Product({ product }: any) {
    return <ProductView product={product} />;
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
    const { slug } = params as any;
    const productPromise = await getProduct(slug);
    console.log('productPromise', productPromise);
    return {
        props: {
            slug: params?.slug,
            product: productPromise.data.detail,
        },
    };
}

export async function getStaticPaths() {
    // eslint-disable-next-line no-unused-vars
    const { data } = await getAllProductsSn();
    const allGoodsSn = data.goodsSn.length ? data.goodsSn : [];
    const paths = allGoodsSn.map((item: string) => ({
        params: {
            slug: item,
        },
    }));
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
}
