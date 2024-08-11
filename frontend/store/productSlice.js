import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});
const productSlice = createSlice({
    name: 'product',
    initialState: {
        status: STATUSES.IDLE,
        data: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
    }
})

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        const products = await response.json();
        return products;
    }
})