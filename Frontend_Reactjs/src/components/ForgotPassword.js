import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ForgotPassword = () => {
  const { username } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  
  const handleResetPassword = () => {
   
    axios.put(`http://localhost:3000/users/${username}`, { password })
         .then(response => {
        setMessage("Password reset Successfully");
      })
         .catch(error => {
        console.log(error);
        setMessage('Failed to reset password.');
      });
  };

  return (
    <div>
      <h3>Forgot Password</h3>
      <p>Enter your new password:</p>
    
      <div>
        <label style={{margin : "8px"}}>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
<center>

      <button onClick={handleResetPassword} className='btn btn-outline-info' style={{margin : "8px"}}>Reset Password</button>
</center>

      <div>{message}</div>

      <p className="forgot-password text-right">
        Now <a href="/sign-in">Login?</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
