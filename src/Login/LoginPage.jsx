
import React, { useState } from 'react';
import './LoginPage.css';
import { EyeOutlined, EyeInvisibleOutlined,GoogleOutlined, FacebookFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simuler une requête API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Ici vous ajouteriez votre logique de connexion
      console.log('Tentative de connexion:', formData);
      alert('Connexion simulée ! (Remplacez par votre API)');
      
    } catch (error) {
      console.error('Erreur de connexion:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert('Redirection vers la page de récupération de mot de passe');
  };

  const handleSignup = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleSignupChoice = (userType) => {
    setShowSignupModal(false);
    navigate(`/inscription`, { state: { userType } });
  };

  const handleGoogleLogin = () => {
    alert('Connexion avec Google (intégrez votre API OAuth)');
  };

  const handleFacebookLogin = () => {
    alert('Connexion avec Facebook (intégrez votre API OAuth)');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo">
          <h1>iKandra</h1>
          <p>Connectez-vous à votre espace</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="••••••••"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePassword}
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              >
                {showPassword ? <EyeInvisibleOutlined/> : <EyeOutlined />}
              </button>
            </div>
          </div>

          <div className="forgot-password">
            <button 
              type="button" 
              className="forgot-link"
              onClick={handleForgotPassword}
            >
              Mot de passe oublié ?
            </button>
          </div>

          <button 
            type="submit" 
            className={`login-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? '' : 'Se connecter'}
          </button>
        </form>

        <div className="divider">
          <span>ou continuer avec</span>
        </div>

        <div className="social-login">
          <button 
            className="social-btn google-btn" 
            onClick={handleGoogleLogin}
            type="button"
          >
            <span><GoogleOutlined/></span> Google
          </button>
          <button 
            className="social-btn facebook-btn" 
            onClick={handleFacebookLogin}
            type="button"
          >
            <span><FacebookFilled/></span> Facebook
          </button>
        </div>

        <div className="signup-link">
          Pas encore de compte ? 
          <button 
            className="signup-btn"
            onClick={handleSignup}
            type="button"
          >
            S'inscrire
          </button>
        </div>
      </div>

      {/* Modal de choix d'inscription */}
      {showSignupModal && (
        <div className="modal-overlay" onClick={closeSignupModal}>
          <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Choisissez votre type de compte</h2>
              <button 
                className="close-btn" 
                onClick={closeSignupModal}
                aria-label="Fermer"
              >
                ×
              </button>
            </div>
            
            <div className="modal-content">
              <p>Sélectionnez le type de compte qui correspond à vos besoins :</p>
              
              <div className="signup-options">
                <div 
                  className="signup-option client-option"
                  onClick={() => handleSignupChoice('client')}
                >
                  <div className="option-icon">🛒</div>
                  <h3>Client</h3>
                  <p>Achetez des produits et services de qualité</p>
                  <ul>
                    <li>Parcourir le catalogue</li>
                    <li>Passer des commandes</li>
                    <li>Suivre vos achats</li>
                    <li>Évaluer les vendeurs</li>
                  </ul>
                  <button className="option-btn client-btn">
                    S'inscrire comme Client
                  </button>
                </div>

                <div 
                  className="signup-option vendor-option"
                  onClick={() => handleSignupChoice('vendeur')}
                >
                  <div className="option-icon">💼</div>
                  <h3>Vendeur</h3>
                  <p>Vendez vos produits et développez votre business</p>
                  <ul>
                    <li>Créer votre boutique</li>
                    <li>Gérer vos produits</li>
                    <li>Suivre vos ventes</li>
                    <li>Analyser vos performances</li>
                  </ul>
                  <button className="option-btn vendor-btn">
                    S'inscrire comme Vendeur
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;