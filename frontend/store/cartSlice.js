import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCarts(state, action) {
            console.log(action.payload)
             return state = action.payload
        },
        addCart(state, action) {
            // const carts = localStorage.getItem('cart')
            // state = JSON.parse(carts)
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeCart(state, action) {
            const newCarts = state.filter((item) => {
                if (item.id != action.payload.id) {
                    return item;
                }
            })
            localStorage.setItem('cart',JSON.stringify(newCarts));
            return state = newCarts;
        }
    }
})

export const { addCart, removeCart, setCarts } = cartSlice.actions;
export default cartSlice.reducer;