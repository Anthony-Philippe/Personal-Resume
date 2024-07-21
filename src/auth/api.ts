// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000', // Remplacez par l'URL de votre backend
});

apiClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('authToken'); // Ou récupérez le token depuis un contexte
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const getProtectedData = async () => {
  try {
    const response = await apiClient.get('/protected');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données protégées', error);
    throw error;
  }
};
