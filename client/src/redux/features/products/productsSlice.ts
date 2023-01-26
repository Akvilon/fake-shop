import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {ApiService} from "../../../services";
import {Category, ProductsState} from "./types";
import {PRODUCTS_CATEGORY_NAME} from "../../../constants";

const initialState: ProductsState = {
    categoriesList: [
        {
            displayName: PRODUCTS_CATEGORY_NAME.MAKEUP,
            products: []
        },
        {
            displayName: PRODUCTS_CATEGORY_NAME.SKINCARE,
            products: []
        },
        {
            displayName: PRODUCTS_CATEGORY_NAME.TOOLS_AND_BRUSHES,
            products: []
        },
        {
            displayName: PRODUCTS_CATEGORY_NAME.GIFTS,
            products: []
        },
        {
            displayName: PRODUCTS_CATEGORY_NAME.MEN,
            products: []
        }
    ],
    loading: false,
    error: undefined
};

export const fetchProductsByCategory = createAsyncThunk<Category, string>(
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
            .addCase(fetchProductsByCategory.fulfilled, (state, {payload}) => {
                console.log(payload)
                state.categoriesList.map(category => {
                    if(category.displayName === payload.displayName) {
                        category.products = payload.products
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