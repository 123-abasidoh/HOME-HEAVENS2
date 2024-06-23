// src/VerifyEmail.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axios.get(`http://localhost:3000/api/v1/auth/verify/${id}/${token}`);
        navigate('/login');
      } catch (error) {
        console.error(error);
      }
    };

    verifyEmail();
  }, [id, token, navigate]);

  return (
    <div className="container mx-auto p-4">
      <p>Verifying your email...</p>
    </div>
  );
};

export default VerifyEmail;
