
export enum PRODUCTS_CATEGORY_ID {
    MAKEUP = 'cat140006',
    SKINCARE = 'cat150006',
    TOOLS_AND_BRUSHES = 'cat130042',
    GIFTS = 'cat60270',
    MEN = 'cat130044'
}
export enum PRODUCTS_CATEGORY_NAME {
    MAKEUP = 'Makeup',
    SKINCARE = 'Skincare',
    TOOLS_AND_BRUSHES = 'Tools & Brushes',
    GIFTS = 'Gifts',
    MEN = 'Men'
}

export const tabs = [
    {
        title: PRODUCTS_CATEGORY_NAME.MAKEUP,
        contentId: PRODUCTS_CATEGORY_ID.MAKEUP
    },
    {
        title: PRODUCTS_CATEGORY_NAME.SKINCARE,
        contentId: PRODUCTS_CATEGORY_ID.SKINCARE
    },
    {
        title: PRODUCTS_CATEGORY_NAME.TOOLS_AND_BRUSHES,
        contentId: PRODUCTS_CATEGORY_ID.TOOLS_AND_BRUSHES
    },
    {
        title: PRODUCTS_CATEGORY_NAME.GIFTS,
        contentId: PRODUCTS_CATEGORY_ID.GIFTS
    },
    {
        title: PRODUCTS_CATEGORY_NAME.MEN,
        contentId: PRODUCTS_CATEGORY_ID.MEN
    }
]