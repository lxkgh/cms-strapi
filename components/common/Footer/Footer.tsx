import { FC, ReactElement, cloneElement, useState } from 'react';
import cn from 'clsx';
import s from './Footer.module.css';
import Home from '@/components/icons/Home';
import Category from '@/components/icons/Category';
import HomeActive from '@/components/icons/HomeActive';

import Service from '@/components/icons/Service';
import ServiceActive from '@/components/icons/ServiceActive';
import CategoryActive from '@/components/icons/CategoryActive';
import Link from 'next/link';
interface TabBarProps {
    // eslint-disable-next-line no-unused-vars
    icon: ReactElement;
    iconActive: ReactElement;
    id?: string;
    title?: string;
    onClick?: () => void;
    active?: boolean;
}
const tabs = [
    {
        key: 'home',
        title: '首页',
        icon: <Home />,
        iconActive: <HomeActive />,
        url: '/',
    },
    {
        key: 'category',
        title: '分类',
        icon: <Category />,
        iconActive: <CategoryActive />,
        url: '/category',
    },
    {
        key: 'servant',
        title: '客服',
        icon: <Service />,
        iconActive: <ServiceActive />,
        url: '/contract',
    },
];
const Footer = () => {
    const [activeTab, setactiveTab] = useState(0);
    return (
        <footer className={s.footRoot}>
            <div className={s.footContainer}>
                {tabs.map((item, index) => (
                    <Link href={item.url} key={item.key}>
                        <TabBarItem
                            key={item.key}
                            icon={item.icon}
                            iconActive={item.iconActive}
                            title={item.title}
                            onClick={() => {
                                if (index === activeTab) return;
                                setactiveTab(index);
                            }}
                            active={index === activeTab}
                        />
                    </Link>
                ))}
            </div>
        </footer>
    );
};

const TabBarItem: FC<TabBarProps> = ({ id, icon = 'div', iconActive, title, onClick, active }) => {
    const Icon = active ? iconActive : icon;
    return (
        <div className={s.tabBarItem} id={id} onClick={onClick}>
            <span>{cloneElement(Icon as any, { className: s.tabBarIcon })}</span>
            <span className={cn(s.tabBarTitle, active && s.active)}>{title}</span>
        </div>
    );
};
export default Footer;
