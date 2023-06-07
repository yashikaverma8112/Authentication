import React from 'react'
import { useState } from "react";
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    const response = await axios.post('http://localhost:3000/users', {
                              username,
                              password
                            })
                            .then(resp => {
                              setMsg("Registration successfully.");
                            })
                            .catch(error => {
                              setMsg("User Already Registered");
                            });
  }

  return (
    <>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
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

      <div className="d-grid">
        <button onClick={handleRegister} className="btn btn-primary" >
          Sign Up
        </button>
      </div>

      <div className="mb-3">
        <label>{msg}</label>
      </div>

      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </>
  )
}
export default SignUp;