import { Article } from './article';

export type HomeData = {
    banners: {
        data: Banner[];
    };
    mainRecommend: {
        data: Recommend[];
    };
    recommends: {
        data: Recommend[];
    };
    mainArticle: {
        data: Article[];
    };
    articles: {
        data: Article[];
    };
};

export type Banner = {
    id: string;
    attributes: {
        url: string;
        link: string;
        alt: string;
    };
};

export type Recommend = {
    id: string;
    attributes: {
        goodsSn: string;
        goodsName: string;
        price: number;
        imgUrl: string;
        alt: string | null;
        unit: number | null;
        sort: number | null;
    };
};
