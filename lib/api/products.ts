import apiAxios from './apiAxios';

const product = () => {
    console.log(process.env);
};

export async function getAllProductsSn() {
    const { data } = (await apiAxios({
        method: 'GET',
        url: 'https://appserver.zugeliang.com/pcmall/goods/on_sale_goods_sn',
    })) as any;
    return {
        data: data,
    };
}

export async function getProduct(goodsSn: string) {
    const { data } = (await apiAxios({
        method: 'GET',
        url: 'https://appserver.zugeliang.com/pcmall/goods/detail',
        params: {
            trade_source: 'cms',
            goods_sn: goodsSn,
        },
    })) as any;
    return {
        data,
    };
}

export async function getRecommendGoods(counts: number) {
    const { data } = (await apiAxios({
        method: 'GET',
        url: 'https://appserver.zugeliang.com/pcmall/goods/goods_recommend',
        params: {
            counts: counts,
        },
    })) as any;
    return {
        data,
    };
}

export default product;
