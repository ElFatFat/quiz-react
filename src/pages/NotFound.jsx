import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {

    const navigate = useNavigate();

    const redirectToMainPage = () => {
        navigate('/');
      };
  return (
    <div>
        <h1>Erreur 404: Page non trouvée</h1>
        <p>Le chemin spécifié n'a pas été trouvée !</p>
        <button onClick={redirectToMainPage}>Retour à l'accueil</button>  
    </div>
    );
}

export default NotFound;