
export type Product = {
    brandName: string,
    currentSku: {
        listPrice: string
    },
    displayName: string,
    heroImage: string,
    image250: string,
    rating: string
}
export type Category = {
    displayName: string,
    products: Array<Product>
}

export type ProductsState = {
    categoriesList: Array<Category>
    loading: boolean,
    error: string | undefined
}