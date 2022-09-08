/* eslint-disable no-unused-vars */
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import cn from 'clsx';
import s from './Searchbar.module.css';
import { useRouter } from 'next/router';
import { CloseOutline } from 'antd-mobile-icons';
import { Button } from 'antd-mobile';
interface Props {
    className?: string;
    id?: string;
    onValueChange?: (v: string) => void;
}

const Searchbar: FC<Props> = ({ className, id = 'search', onValueChange }) => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [cancel, setCancel] = useState(false);
    useEffect(() => {
        router.prefetch('/search');
    }, [router]);

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (e.key === 'Enter') {
            const q = e.currentTarget.value;

            router.push(
                {
                    pathname: `/search`,
                    query: q ? { q } : {},
                },
                undefined,
                { shallow: true }
            );
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.preventDefault();

        const q = e.currentTarget.value;
        setCancelState(q);
    };

    const setCancelState = (v: string) => {
        if (v && cancel === false) {
            setCancel(true);
        }
        if (!v && cancel === true) {
            setCancel(false);
        }
    };

    const handleClickCancel = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setCancel(false);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const q = e.currentTarget.value;
        setCancelState(q);
        onValueChange && onValueChange(q);
    };

    const handleSearch = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault();
        const q = inputRef.current?.value;

        router.push(
            {
                pathname: `/search`,
                query: q ? { q } : {},
            },
            undefined,
            { shallow: true }
        );
    };
    return (
        <div className={cn(s.root, className)}>
            <label className="hidden" htmlFor={id}>
                Search
            </label>
            <input
                id={id}
                className={s.input}
                placeholder="搜索..."
                defaultValue={router.query.q}
                onKeyUp={handleKeyUp}
                onBlur={handleBlur}
                onChange={handleValueChange}
                ref={inputRef}
                autoComplete="off"
            />
            <Button className={cn(s.btn, {})} onClick={handleSearch}>
                搜索
            </Button>
            <div className={s.iconContainer}>
                <svg className={s.icon} fill="#CCC" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                </svg>
            </div>
            <div className={s.closeContainer} onClick={handleClickCancel}>
                <CloseOutline className={cn(s.close, cancel ? '' : 'hidden')} />
            </div>
        </div>
    );
};

export default memo(Searchbar);
