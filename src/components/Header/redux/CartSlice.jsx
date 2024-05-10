import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    totalQuantity : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
        addToCart(state, action) {
            const newItem =  action.payload;
            console.log("action.payload", action);
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity
            }
            else {
                state.items.push({
                    ...newItem,
                    quantity : newItem.quantity
                })
            }

            state.totalQuantity += newItem.quantity
            console.log("newItem", newItem.quantity);

        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer
