import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({

    name:'cartCounter',
    initialState:{
        value:0,
    },
    reducers:{
        addToCart:(state,action)=>{state.value+=1},
        deleteFromCart:(state,action)=>{state.value-=1}
    }
})
export const {addToCart,deleteFromCart}=cartSlice.actions
export default cartSlice.reducer