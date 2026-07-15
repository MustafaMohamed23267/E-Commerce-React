import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../pages/Login/AuthSlice';

import productsReducer from '../pages/Products/ProductSlice'


export const Store = configureStore(
    {
        reducer:{
            auth:authReducer,
            products:productsReducer
            
        }
    }
)