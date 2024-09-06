import React, { useState } from 'react'
import './Signup.css'
function Signup() {


    const [formData,setFormdata]=useState({
    username: '',
    email:'',
    password:'',
    confirm:''
    })
    const [errors,setErrors]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormdata({

            ...formData,
            [name]:value,
            
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        const status=validate()
        if(status)
        {
            console.log(formData)
        }

    }

    const validate=()=>{

        const newErrors={}
        if(!formData.username.trim()){

            newErrors.username='Username required'
        }
        if(!formData.email.trim()){
            newErrors.email='Email required'   
        }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if(!formData.password.trim()){
            newErrors.password='Password required' 
        }else if(formData.password.length<6){
                newErrors.password = 'Password must be at least 6 characters';
            }
         if(formData.password.trim() !== formData.confirm.trim())  {

        newErrors.confirm='Password do not match'
         } 


         setErrors(newErrors)
         return Object.keys(newErrors).length===0

        }
  return (
    <div className='signup'>
   <form onSubmit={handleSubmit} className='signupForm'>
    
   <h2>SignUp</h2>

    <label>Enter Username</label>
    <input type='text' name='username' value={formData.username} onChange={handleChange}/>
    {errors.username && <span>{errors.username}</span>}

    <label>Enter Email Adrress</label>
    <input type='email'  name='email' onChange={handleChange}/>
    {errors.email && <span>{errors.email}</span>}



    <label>Enter Password</label>
    <input type='password'  name='password' onChange={handleChange}/>
    {errors.password && <span>{errors.password}</span>}



    <label>confirm password</label>
    <input type='password'  name='confirm' onChange={handleChange}/>
    {errors.confirm && <span>{errors.confirm}</span>}


   

<button type='submit' className='signUpbtn' >Sign Up</button>
   </form>
   </div>
  )
}

export default Signup