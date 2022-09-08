import cn from 'clsx';
import React, { FC, useCallback, useState } from 'react';
import { DownFill } from 'antd-mobile-icons';
import s from './ListFilter.module.css';
interface Props {
    // eslint-disable-next-line no-unused-vars
    onChange?: ({ grade, price }: { grade: number; price: number }) => {};
    filters?: { grade: number; price: number };
}

function gradeTitle(grade: number) {
    switch (grade) {
        case -1:
            return '默认';
        case 0:
            return '全新';
        default:
            return '非全新';
    }
}
const grades = [
    { value: -1, title: '默认' },
    { value: 0, title: '全新' },
    { value: 1, title: '非全新' },
];

const defaultProps = {
    filters: {
        grade: -1,
        price: -1,
    },
};
const ListFilter: FC<Props> = (props) => {
    const { onChange, filters } = { ...defaultProps, ...props };
    const [grade, setGrade] = useState(filters.grade);
    const [price, setPrice] = useState(filters.price);
    const [gStatus, setGStatus] = useState(false);
    const gTitle = gradeTitle(grade);
    const changeFilters = useCallback(() => {
        onChange?.({ grade, price });
    }, [grade, price, onChange]);
    return (
        <div>
            <div className={s.filterContainer}>
                <div
                    className={cn(s.filterItem, grade !== -1 && s.active)}
                    onClick={() => {
                        setGStatus(!gStatus);
                    }}
                >
                    {gTitle}
                    <DownFill className={cn(s.arrowIcon, s.filterIconContainer, gStatus && 'rotate-180')} />
                </div>
                <div
                    className={cn(s.filterItem, price !== -1 && s.active)}
                    onClick={() => {
                        setPrice(price === 0 ? 1 : 0);
                    }}
                >
                    价格
                    <span className={s.filterIconContainer}>
                        <DownFill
                            className={cn(s.arrowIcon, 'text-g9', 'rotate-180', price === 0 && 'text-zgl-orange')}
                        />
                        <DownFill className={cn(s.arrowIcon, 'text-g9', price === 1 && 'text-zgl-orange')} />
                    </span>
                </div>
                <div className={s.filterItem}>筛选</div>
            </div>
            <div className={gStatus ? '' : 'hidden'}>
                <ul>
                    {grades.map((item) => {
                        return (
                            <li
                                key={item.value}
                                onClick={() => {
                                    setGrade(item.value);
                                    setGStatus(false);
                                    changeFilters();
                                }}
                            >
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ListFilter;
