import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../components/Header/redux/CartSlice'

const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})

export default store;