import { useState } from "react";
import './Login.css'
function Login() {
    const [inputs, setInputs] = useState({});
    const [errors,setErrors]=useState({})
  
  
    const validate=()=>{
      setErrors({})
      if(inputs.username.length<3)
      {
        setErrors(...errors,inputs.username="too short")
      }
      // cant give username:"too short"?
      //setErrors({...errors, inputs.target.name="too short"} )?
      if(inputs.password.length<8)
        {
          setErrors(...errors,inputs.password="too short")
        }
  
  
        return Object.keys(errors.label===0)
      }
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(inputs => ({...inputs, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("inputs");
      validate();
    }
  
    return (
      <form className='login-form' onSubmit={handleSubmit}>
      <div  >
      <label>User name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
       </div>
       <div>
        <label>Enter password:
          <input 
            type="password" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
          />
          </label>
      </div>
        
        
      <input type="submit" />
  
      </form>
    )
  
  }
  export default Login;
  