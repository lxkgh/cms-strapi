/* eslint-disable no-unused-vars */
import { SideBar } from 'antd-mobile';
import ListFilter from '@/components/search/ListFilter';
import SearchBar from '@/components/search/SearchBar';
import s from './category.module.css';
import Layout from '@/components/common/Layout';
import { Key, useState } from 'react';
import { useSearch } from '@/lib/hooks/use-search';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/lib/types/product';

export default function Category() {
    const [cat, setcat] = useState('214');
    const changeCat = (key: string) => {
        setcat(key);
    };
    const { data } = useSearch({
        category_id: cat,
        size: 10,
    });
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1>商品分类</h1>
                <div className={s.searchBar}>
                    <SearchBar />
                </div>
                <ListFilter />
            </div>
            <div className={s.content}>
                <SideBar onChange={changeCat} className={s.sideBar}>
                    <SideBar.Item key="215" title="手机" />
                    <SideBar.Item key="216" title="一体机" />
                    <SideBar.Item key="217" title="台式电脑" />
                </SideBar>
                <div className={s.list}>
                    {data &&
                        ((data as any).list || []).map((item: any, index: Key | null | undefined) => (
                            <ProductCard product={{ goodsBaseInfo: item } as any} key={index} />
                        ))}
                </div>
            </div>
        </div>
    );
}

Category.Layout = Layout;
