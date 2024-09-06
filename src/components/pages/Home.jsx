import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../Cards';
import './Home.css'

function Home() {
 //const navigate=useNavigate()
 const [products,setProducts]=useState([]);
    
 async function  fetchData(){

try{  
const response= await axios.get('https://fakestoreapi.com/products')
setProducts(response.data)
console.log(response.data)

}
catch(err){
//navigate('/')
 console.log(err);

}
 }

 useEffect(()=>{
   fetchData()
   },[])

 return (
 <div className='productsBox'>
     {products.map((product)=><Cards product={product} />)}
     
 </div>
)
}

export default Home