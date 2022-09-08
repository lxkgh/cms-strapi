import useRequest from './useRequest';

export function useSearch(params: Record<string, any>) {
    // const { data, error } = useSWR(['/pcmall/goods/filter_goods', params], fetcher);
    const { data, error } = useRequest(
        {
            method: 'GET',
            url: '/pcmall/goods/filter_goods',
            params,
        },
        params as any
    );
    return {
        data,
        error,
        isLoading: !error && !data,
    };
}
