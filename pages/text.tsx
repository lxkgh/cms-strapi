// import Footer from '@/components/common/Footer';

import Layout from '@/components/common/Layout';
import Contact from '@/components/product/Contact';
// import { useEffect } from 'react';
// import getHomeDateApi from './api/home/homeData';

export default function Text({ homeData }: any) {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch('/homeData', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //             },
    //         });
    //         console.log(data.body);
    //     };
    //     fetchData().catch(console.error);
    // }, []);

    console.log(homeData);
    return (
        <div className="h-screen w-screen">
            <Contact>1</Contact>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://m.zugeliang.com/api/enterprise/homeData', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
    });
    console.log('status ', res.status);
    const rjson = await res.json();
    console.log('res, ', rjson);
    return {
        props: {
            homeData: rjson.data,
        }, // will be passed to the page component as props
    };
}
Text.Layout = Layout;
