// src/VerifyCode.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyCode: React.FC = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedCode = localStorage.getItem('verificationCode');
    if (code === storedCode) {
      localStorage.removeItem('verificationCode');
      localStorage.removeItem('userEmail');
      navigate('/');
    } else {
      setError('Code de vérification incorrect.');
    }
  };

  return (
    <div>
      <h1>Vérifier le code</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Code de vérification :</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Vérifier</button>
      </form>
    </div>
  );
};

export default VerifyCode;
