import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {ApiService} from "../../../services";
import {Product, ProductsState} from "./types";

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: undefined
};

export const fetchProducts = createAsyncThunk(
'products/fetchProducts',
    async () => {
        const data = await ApiService.getProducts()
        return data
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                console.log(payload)
                // state.products.map(product => {
                //
                // })
                state.loading = false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const {} = productsSlice.actions
export default productsSlice.reducer