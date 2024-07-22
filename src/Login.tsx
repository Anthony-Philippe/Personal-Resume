// src/Login.tsx
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, resetPassword } from "./auth/auth";
import { auth } from "./auth/firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(auth, persistence);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Erreur lors de la connexion");
      console.error(error);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await resetPassword(email);
      setMessage('E-mail de réinitialisation envoyé. Veuillez vérifier votre boîte de réception.');
    } catch (error) {
      setError('Erreur lors de l\'envoi de l\'e-mail de réinitialisation.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Rester connecté
          </label>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
      <button onClick={handlePasswordReset}>Mot de passe oublié ?</button>
    </div>
  );
};

export default Login;