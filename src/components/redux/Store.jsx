// import { createSlice } from "@reduxjs/toolkit";


// const INITIALSTATE={

//     cartProducts:{}
// }

// export  const cartSlice =createSlice{

//     name:'cartNumber',
//     INITIALSTATE,
//     reducers:{

//         addToCart(state,action)
//     }
// } 

import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
export default  configureStore({
    reducer:{
        counter:Reducer

    }
})