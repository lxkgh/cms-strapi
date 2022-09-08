/* eslint-disable no-unused-vars */
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import { getAllProducts } from '@/lib/api.js';
import React from 'react';
import type { InferGetStaticPropsType } from 'next';
// import SearchBar from '@/components/search/SearchBar';
import Layout from '@/components/common/Layout';
import HomeView from '@/components/home/HomeView';
import aFetch from '@/lib/cms/api/aFetch';
import { useHomeData } from '@/lib/hooks/use-home';

export default function Index({ homeData }: InferGetStaticPropsType<typeof getStaticProps>) {
    const IHomeData = useHomeData(homeData);
    console.log(IHomeData, 'homeData');
    return (
        <>
            {/* <Layout preview={preview}> */}
            <Head>
                <title>租葛亮免押租赁 {CMS_NAME}</title>
            </Head>
            <HomeView
                bannerList={IHomeData.banners as any}
                articleList={{
                    mainArticle: IHomeData.mainArticle as any,
                    list: IHomeData.articlesList,
                }}
                mainRecommend={IHomeData.mainRecommend as any}
                recommendList={IHomeData.recommends as any}
            ></HomeView>
        </>
    );
}
Index.Layout = Layout;
export async function getStaticProps({ preview = null }) {
    const homeData = await aFetch('homeData');
    console.log(homeData, 'homeDAta');
    return {
        props: { preview, homeData },
    };
}
