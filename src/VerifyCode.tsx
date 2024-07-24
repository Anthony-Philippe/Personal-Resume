// src/VerifyCode.tsx
// anthony.philippe@isen.yncrea.fr
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from './auth/auth';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const token = sessionStorage.getItem('otpToken');
    const uid = sessionStorage.getItem('uid'); // Get UID from session storage

    if (!token || !uid) {
      logout();
      navigate('/login', { replace: true });
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/verify-otp', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send token in Authorization header
        },
        body: JSON.stringify({ uid, otp: code }),
      });

      if (response.ok) {
        sessionStorage.removeItem('otpToken');
        const url = window.location.href
        window.location.replace(url);
        navigate('/', { replace: true });
      } else {
        setError('Invalid verification code.');
      }
    } catch (error) {
      setError('Error verifying code.');
    }
  };

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (!token) {
      navigate('/login', { replace: true });
    } else {
      sessionStorage.setItem('otpToken', token);
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Verify Code</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Verification Code:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyCode;