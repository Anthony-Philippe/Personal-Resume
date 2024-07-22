// src/RecoverPassword.tsx
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from './auth/firebase';

const RecoverPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isValidCode, setIsValidCode] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode');

  useEffect(() => {
    if (oobCode) {
      verifyPasswordResetCode(auth, oobCode)
        .then(() => {
          setIsValidCode(true);
        })
        .catch((error) => {
          console.error(error);
          navigate('/error');
        });
    } else {
      navigate('/error');
    }
  }, [oobCode, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    if (isValidCode && oobCode) {
      try {
        await confirmPasswordReset(auth, oobCode, newPassword);
        navigate('/login');
      } catch (error) {
        setError('Erreur lors de la réinitialisation du mot de passe.');
        console.error(error);
      }
    } else {
      navigate('/error');
    }
  };

  return (
    <div>
      <h1>Réinitialiser le mot de passe</h1>
      {isValidCode ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nouveau mot de passe :</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirmer le nouveau mot de passe :</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Réinitialiser le mot de passe</button>
        </form>
      ) : (
        <p>Validation du code en cours...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RecoverPassword;