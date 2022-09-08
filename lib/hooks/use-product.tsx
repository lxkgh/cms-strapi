import useRequest from './useRequest';

export function useAllProductsSn() {
    const { data, error } = useRequest({
        method: 'GET',
        url: '/pcmall/goods/on_sale_goods_sn',
    });
    return {
        data,
        error,
        isLoading: !error && !data,
    };
}
