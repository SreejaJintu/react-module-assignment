import { useSelector ,useDispatch} from "react-redux";
import { addToCart,deleteFromCart } from "./Reducer";
import React from 'react'

function Cartdata() {


    const cartnum=useSelector((state)=>state.cartCounter.value);
    const dispatch=useDispatch()
  return (
    <div>{cartnum}
    <button onClick={()=>{dispatch(addToCart())}}>Add to Cart</button>
     <button onClick={()=>{dispatch(addToCart())}}>Delete from Cart</button></div>

  )
}

export default Cartdata