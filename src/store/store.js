import countReducer from "./countSlice";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        counter:countReducer
    }
})

export default store;