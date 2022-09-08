import { useMemo } from 'react';

export function formatPrice({ price, unit = 0 }: { price: number; unit: number | null }) {
    const unitStr = unit === 0 ? '月' : '日';
    const preStr = '¥';
    return {
        priceStr: `${preStr}${price}/${unitStr}`,
        price,
        preStr,
        unitStr,
    };
}

export default function usePrice(
    data?: {
        price: number | null;
        unit: number | null;
    } | null
) {
    const { price, unit } = data ?? {};
    const value = useMemo(() => {
        if (typeof price !== 'number' || unit === undefined) return '';

        return formatPrice({ price, unit });
    }, [price, unit]);
    return { ...value };
}
