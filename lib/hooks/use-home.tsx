import { HomeData } from '../types/home';
import { useAllArticles } from './use-article';

export function useHomeData(homeData: HomeData) {
    const { mainArticle, articles, banners, mainRecommend, recommends } = homeData;
    const _banners = banners.data.map((b) => ({
        id: b.id,
        ...b.attributes,
    }));
    const _mainRecommend = {
        id: mainRecommend.data[0].id,
        ...mainRecommend.data[0].attributes,
    };
    const _recommends = recommends.data.map((recommend) => ({
        id: recommend.id,
        ...recommend.attributes,
    }));
    const articlesList = useAllArticles({ articles: articles });
    const mainArticles = useAllArticles({ articles: mainArticle });
    const _homeData = {
        mainArticle: mainArticles?.mainArticle,
        articlesList: articlesList?.list,
        banners: _banners,
        mainRecommend: _mainRecommend,
        recommends: _recommends,
    };
    return _homeData;
}
