import apiAxios from './apiAxios';

export async function getBanners() {
    const { data } = (await apiAxios({
        method: 'GET',
        url: 'https://appserver.zugeliang.com/banner/get_banners',
    })) as any;
    return {
        data: data,
    };
}
