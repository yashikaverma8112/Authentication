import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import {useNavigate } from 'react-router-dom';
import Logout from './logout.component';
const Resource = () => {
    const [students, setStudents] = useState([]);
    const [cookies, setCookie] = useCookies(['token']);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/students', {
            headers: {
                'Authorization': `token ${cookies.token}`
              }
          })
          .then(response => {
            setStudents(response.data);
            // navigate('/logout')
          })
          .catch(error => {
            console.error('Error retrieving users:', error);
            
          });
      }, []);
const handleLogout =() =>{
navigate('/logout');
}
    return(
        <>
            <h3>Resource page</h3>
            <ul>
                {students.map(st => (
                    <li key={st.id}>{st.name}</li>
                ))}
            </ul>
            <button onClick={handleLogout} className='btn btn-outline-danger' type='button'>Logout
          <Link to ="/logout"></Link>
        </button>
        </>
    )
}

export default Resource;