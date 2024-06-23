// src/VerifyEmail.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`https://home-heaven.onrender.com/api/v1auth/verify/:id/:token=${token}`);
                alert(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (token) {
            verifyEmail();
        }
    }, [token]);

    return <div>Verifying...</div>;
};

export default VerifyEmail;
