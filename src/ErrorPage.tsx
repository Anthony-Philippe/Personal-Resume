// src/ErrorPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Erreur</h1>
      <p>Le lien de réinitialisation de mot de passe est invalide ou a expiré.</p>
      <button onClick={() => navigate('/login')}>Retour à la page de connexion</button>
    </div>
  );
};

export default ErrorPage;
