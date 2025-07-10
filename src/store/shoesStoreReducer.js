import { createSlice } from "@reduxjs/toolkit";
import data from "../ShoesStore/data.json";

const initialState = {
    productList: data,
    productDetails: data[0],
    cart: []
}

const shoesStoreSlice = createSlice({
    name: "shoesStoreSlice",
    initialState,
    reducers: {
        setProductDetails: (state, action) => {
            state.productDetails = action.payload;
        },

        addToCart: (state, action) => {
            console.log(action);
            const shoe = action.payload;
            const newCarts = [...state.cart];

            const index = newCarts.findIndex((item) => item.id === shoe.id);

            if (index === -1) {
                newCarts.push({ ...shoe, cartQuantity: 1});
            } else {
                newCarts[index].cartQuantity += 1;
            }

            state.cart = newCarts;
        },

        handleCartQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const newCarts = state.cart.map(item => {
                if (item.id !== id) return item;
                return {
                    ...item,
                    cartQuantity: item.cartQuantity + quantity
                }
            });
            state.cart = newCarts;
        },

        deleteFromCart: (state, action) => {
            const id = action.payload;
            const newCarts = state.cart.filter((item) => item.id !== id);

            state.cart = newCarts;
        }
    }
})

export const {
    setProductDetails,
    addToCart,
    handleCartQuantity,
    deleteFromCart
} = shoesStoreSlice.actions


export const shoesStoreReducer = shoesStoreSlice.reducer