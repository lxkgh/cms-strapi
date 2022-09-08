import Footer from '@/components/common/Footer';
import { FC, ReactNode } from 'react';
interface LayoutProps {
    children: ReactNode | undefined;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <main className="fit">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
