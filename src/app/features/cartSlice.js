import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState =  {
  // const storedCart = localStorage.getItem("cart");
  // if (storedCart) {
  //   return JSON.parse(storedCart);
  // }
  // return {
    cart: [],
    totalPrice: 0,
    totalAmount: 0,
  
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      state.cart.push(payload)
    },
    incrementAmount: (state, {payload}) => {
      const item = state.cart.find((i)=> i.id == payload);
      item.amount += 1
    },
    decrementAmount: (state, {payload}) => {
      const item = state.cart.find((i)=> i.id == payload);
      if(item.amount > 0){
        item.amount -= 1
      }
    },
    clearCart: () => {},
    deleteCart: (state, {payload}) => {
      const item =  state.cart.filter((d) => d.id !== payload)
    },
  },
});
export const {
  addToCart,
  decrementAmount,
  deleteCart,
  clearCart,
  incrementAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
