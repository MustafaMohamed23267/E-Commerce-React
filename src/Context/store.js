import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../pages/Login/AuthSlice';


export const Store = configureStore(
    {
        reducer:{
            auth:authReducer
        }
    }
)