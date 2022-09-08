export type Product = {
    goodsBaseInfo: ProductBase;
    goodsCarouselPicList: goodsCarouselPic[];
    goodsDetailPicList: goodsDetailPic[];
};

export type ProductBase = {
    goodsSn: string;
    goodsName: string;
    grade: number; // 1 为 全新
    unit: number;
    leaseMinPrice: number;
    mainPic: string;
    status: number;
    classificationName?: string;
    minPeriod?: number;
    detail?: string;
    deposit?: number;
};

export type goodsCarouselPic = {
    id: number;
    sortOrder: number;
    type: number;
    pic: string;
};

export type goodsDetailPic = {
    pic: string;
    sortOrder: number;
};
