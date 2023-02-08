export type Category = {
    id: string
    name: string
    image: string
}

export type Product = {
    _id: number,
    title: string
    price: number
    description: string
    images: Array<string>
    category: Category
}

export type ProductsState = {
    products: Array<Product>
    loading: boolean,
    error: string | undefined
}