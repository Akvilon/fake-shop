import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {ApiService} from "../../services";

type Products = {
    brandName: string,
    currentSku: {
        listPrice: string
    },
    displayName: string,
    heroImage: string,
    image250: string,
    rating: string
}
type CategoryData = {
    displayName: string,
    products: Array<Products>
}

type ProductsList = {
    productsList: Array<CategoryData>
    loading: boolean,
    error: string | undefined
}

const initialState: ProductsList = {
    productsList: [
        {
            displayName: 'makeup',
            products: []
        },
        {
            displayName: 'skincare',
            products: []
        },
        {
            displayName: 'tools',
            products: []
        },
        {
            displayName: 'gifts',
            products: []
        },
        {
            displayName: 'men',
            products: []
        }
    ],
    loading: false,
    error: undefined
}

export const fetchProductsByCategory = createAsyncThunk<CategoryData, string>(
'products/fetchProducts',
    async (categoryId) => {
        const data = await ApiService.getProductsByCategory(categoryId)
        return data
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                console.log(action.payload)
                state.productsList.map(category => {
                    if(category.displayName === action.payload.displayName.toLowerCase()) {
                        category.products = action.payload.products
                    }
                })
                state.loading = false
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const {} = productsSlice.actions
export default productsSlice.reducer