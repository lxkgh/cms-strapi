export type Article = {
    id: string;
    attributes: {
        title: string;
        link: string;
        sort: number;
        important: boolean;
        img: {
            data: Image[];
        };
    };
};
export type AllArticles = {
    articles: {
        data: Article[];
    };
};

export type Image = {
    id: string;
    attributes: {
        alternativeText: string;
        url: string;
    };
};
