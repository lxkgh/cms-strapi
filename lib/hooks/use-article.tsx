import { AllArticles } from '../types/article';

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export function useAllArticles(allArticles: AllArticles | undefined) {
    if (!allArticles) {
        return;
    }
    const articlesData = allArticles.articles.data;
    const articlesList = {
        mainArticle: {},
        list: [] as any,
    };
    for (const articleData of articlesData) {
        const iArticle = {
            ...articleData.attributes,
            id: articleData.id,
            img: {
                url: `${CMS_URL}${articleData.attributes.img.data[0].attributes.url}`,
                alt: articleData.attributes.img.data[0].attributes.alternativeText,
            },
        };
        if (iArticle.important) {
            articlesList.mainArticle = iArticle;
            continue;
        }
        articlesList.list.push(iArticle);
    }
    return articlesList;
}
