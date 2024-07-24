// src/VerifyCode.tsx
// anthony.philippe@isen.yncrea.fr
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const token = sessionStorage.getItem('otpToken');
    const uid = sessionStorage.getItem('uid'); // Get UID from session storage

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
        navigate('/', { replace: true });
      } else {
        setError('Invalid verification code.');
      }
    } catch (error) {
      setError('Error verifying code.');
    }
  };

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