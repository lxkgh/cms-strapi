import { FC, ReactNode } from 'react';
import s from './Container.module.css';
import cn from 'clsx';

interface ContainerProps {
    children: ReactNode | undefined;
    type: 'mobile' | 'normal';
    className?: string;
}
const Container: FC<ContainerProps> = ({ children, type, className }) => {
    return <div className={cn(s.container, s[type], className)}>{children}</div>;
};

export default Container;
