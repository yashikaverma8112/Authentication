import React from 'react';
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const Logout = () => {
    const [cookies, setCookie] = useCookies(['token']);

    useEffect(() => {
        let expires = new Date()
        setCookie('token', '', { path: '/',  expires})
      }, []);

    return(
        <>
            <h3>Logout</h3>
            User logout successfully.
        </>
    )
}

export default Logout;