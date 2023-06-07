import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Resource from './resource.component';
import { useNavigate } from 'react-router-dom';
const Login = () =>
{
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['token']);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = async () => {
    const response = await axios.post('http://localhost:3000/login', {
                              username,
                              password
                            })
                                .then(resp => {
                              setMsg("Login successfully.");
                              let expires = new Date()
                              expires.setTime(expires.getTime() + (1000 * 60 * 60))
                              setCookie('token', resp.data.token, { path: '/',  expires})
                              navigate('/students')
                             
                            })
                               .catch(error => {
                              setMsg("Invalid username or password");
                            });
                   
                          
                          console.log(response);
  }
const handleeForgotPassword =() =>{
  navigate ('/forgot-password');
}
  return (
    <>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1" style={{paddingLeft : "4px"}}>
               Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
      
      <button className="btn btn-outline-light" >
      <Link to ={ `/forgot-password/${username}`}>  Forgot Password?</Link>
        
      </button>
        <button onClick={handleLogin} className="btn btn-primary" type='submit' >
          Login
         <Link to="/students"></Link>
        </button>
     
      </div>
    
      <div className="mb-3">
        <label>{msg}</label>
      </div>

      <p className="forgot-password text-right">
        Create a Account <a href="/sign-up">sign up?</a>
      </p>
     
    </>

  )
}

export default Login;