import Container from '@/components/container';
// import { getAllPostsForHome } from '@/lib/api';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import { getAllProducts } from '@/lib/api';
import React from 'react'
import type {  InferGetStaticPropsType } from 'next';
import SearchBar from '@/components/SearchBar';

export default function Index({ allPruducts , news, banners, hotProducts, focusProduct }: InferGetStaticPropsType<typeof getStaticProps>) {
    // const heroPost = allPosts[0];
    // const morePosts = allPosts.slice(1);
    console.log(allPruducts, 'allPruducts');
    console.log(news, banners, hotProducts, focusProduct, 'news');
    return (
        <>
            {/* <Layout preview={preview}> */}
                <Head>
                    <title>租葛亮免押租赁 {CMS_NAME}</title>
                </Head>
                <Container>
                    <h1>租葛亮免押租赁</h1>
                    <SearchBar />
                    {/* {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
                </Container>
            {/* </Layout> */}
        </>
    );
}

export async function getStaticProps({ preview = null }) {
    // const allPosts = (await getAllPostsForHome(preview)) || []
    const allPruducts = (await getAllProducts()) || [];

    return {
        props: { allPruducts, preview },
    };
}
