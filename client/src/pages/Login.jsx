import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });

    function handleChange(e){
    setInputs((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        }
   
    
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        <span>Dont hv acc</span> <Link to="/register">Register</Link>
      </form>
    </div>
  )
}

export default Login;
