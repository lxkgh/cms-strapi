const fetcher = (url: string) => fetch(url).then((res) => res.json());
const getHomeDataUrl = 'https://m.zugeliang.com/api/enterprise/homeData';
export default function getHomeDateApi() {
    return fetcher(getHomeDataUrl);
}
