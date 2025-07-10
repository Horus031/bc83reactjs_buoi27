import { configureStore } from "@reduxjs/toolkit";
import { shoesStoreReducer } from "./shoesStoreReducer";


export const store = configureStore({
    reducer: {
        shoesStore: shoesStoreReducer,
    }
})