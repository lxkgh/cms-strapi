import Container from '@/components/common/Container';
import ProductCard from '@/components/product/ProductCard';
import { useSearch } from '@/lib/hooks/use-search';
import { NavBar } from 'antd-mobile';
import { useRouter } from 'next/router';
import SearchBar from '../SearchBar';

export default function SearchView() {
    const router = useRouter();
    const { q } = router.query;
    const { data, error } = useSearch({
        goods_name: typeof q === 'string' ? encodeURIComponent(q) : '',
        size: 10,
    });
    console.log('data: ', data);
    console.log('error', error);
    return (
        <>
            <Container type="mobile" className="flex flex-col">
                <NavBar
                    onBack={() => {
                        router.back();
                    }}
                    className="bg-white"
                >
                    搜索
                </NavBar>
                <div className="px-3 py-[0.63rem]">
                    <SearchBar />
                </div>
                <div className="w-screen bg-[#f5f5f5] flex-grow">
                    <div
                        className="mt-3 mx-3 bg-white rounded-[0.75rem]"
                        onScroll={(e) => {
                            console.log('scroll ', e);
                        }}
                    >
                        {(data as any)?.list.map((item: any, index: number) => (
                            <ProductCard product={{ goodsBaseInfo: item } as any} key={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}
