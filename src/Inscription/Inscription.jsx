import React, { use, useState } from 'react';
import './Inscription.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { EyeInvisibleFilled, EyeInvisibleOutlined, EyeOutlined, CameraOutlined } from '@ant-design/icons';




const Inscription = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const userType = location.state?.userType || 'client'; // Par défaut, 'client' si non spécifié

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    telephone: '',
    photoProfil: null,
    cinRecto: null,
    cinVerso: null
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [previewImages, setPreviewImages] = useState({
    photoProfil: null,
    cinRecto: null,
    cinVerso: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (file) {
      // Vérifier la taille du fichier (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          [name]: 'Le fichier ne doit pas dépasser 5MB'
        }));
        return;
      }

      // Vérifier le type de fichier
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          [name]: 'Veuillez sélectionner un fichier image'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        [name]: file
      }));

      // Créer un aperçu de l'image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImages(prev => ({
          ...prev,
          [name]: reader.result
        }));
      };
      reader.readAsDataURL(file);

      // Effacer l'erreur
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    }
  };

  const removeImage = (fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: null
    }));
    setPreviewImages(prev => ({
      ...prev,
      [fieldName]: null
    }));

    const fileInput = document.getElementById(fieldName);
    if (fileInput) {
    fileInput.value = '';
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation des champs requis
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.pseudo.trim()) newErrors.pseudo = 'Le pseudo est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.password) newErrors.password = 'Le mot de passe est requis';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'La confirmation est requise';
    if (!formData.telephone.trim()) newErrors.telephone = 'Le numéro de téléphone est requis';

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    // Validation du mot de passe
    if (formData.password && formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }

    // Vérification de la correspondance des mots de passe
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    // Validation du téléphone
    const phoneRegex = /^(\+261|0)[0-9]{9}$/;
    if (formData.telephone && !phoneRegex.test(formData.telephone)) {
      newErrors.telephone = 'Format de téléphone invalide (ex: +261341234567)';
    }

    // Validation des fichiers requis
    if (!formData.photoProfil) newErrors.photoProfil = 'La photo de profil est requise';
    if (!formData.cinRecto) newErrors.cinRecto = 'La photo CIN recto est requise';
    if (!formData.cinVerso) newErrors.cinVerso = 'La photo CIN verso est requise';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Créer FormData pour l'envoi des fichiers
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          submitData.append(key, formData[key]);
        }
      });
      submitData.append('userType', userType);

      // Simuler une requête API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Données d\'inscription:', formData);
      alert(`Inscription ${userType} réussie ! (Remplacez par votre API)`);
      
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePassword = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="inscription-page">
      <div className="inscription-container">
        <div className="inscription-header">
          <button 
            className="back-btn" 
            onClick={handleBackToLogin}
            type="button"
            aria-label="Retour à la connexion"
          >
            ←
          </button>
          <div className="header-content">
            <h1>Inscription {userType}</h1>
            <p>Créez votre compte {userType}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="inscription-form">
          {/* Informations personnelles */}
          <div className="form-section">
            <h3 className="section-title">Informations personnelles</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className={`form-input ${errors.nom ? 'error' : ''}`}
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Votre nom"
                />
                {errors.nom && <span className="error-message">{errors.nom}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="prenom">Prénom *</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  className={`form-input ${errors.prenom ? 'error' : ''}`}
                  value={formData.prenom}
                  onChange={handleInputChange}
                  placeholder="Votre prénom"
                />
                {errors.prenom && <span className="error-message">{errors.prenom}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="pseudo">Pseudo *</label>
              <input
                type="text"
                id="pseudo"
                name="pseudo"
                className={`form-input ${errors.pseudo ? 'error' : ''}`}
                value={formData.pseudo}
                onChange={handleInputChange}
                placeholder="Votre nom d'utilisateur"
              />
              {errors.pseudo && <span className="error-message">{errors.pseudo}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Numéro de téléphone *</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className={`form-input ${errors.telephone ? 'error' : ''}`}
                value={formData.telephone}
                onChange={handleInputChange}
                placeholder="+261341234567"
              />
              {errors.telephone && <span className="error-message">{errors.telephone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="bio">Biographie</label>
              <textarea
                id="bio"
                name="bio"
                className="form-textarea"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder={`Parlez-nous de vous${userType === 'vendeur' ? ' et de votre activité' : ''}...`}
                rows="4"
              />
            </div>
          </div>

          {/* Documents et photos */}
          <div className="form-section">
            <h3 className="section-title">Documents et photo</h3>
            
            {/* Photo de profil */}
            <div className="form-group">
              <label>Photo de profil *</label>
              <div  className="file-upload-area">
                {previewImages.photoProfil ? (
                  <div className="image-preview">
                    <img src={previewImages.photoProfil} alt="Photo de profil" />
                    <button 
                      type="button" 
                      className="remove-image-btn"
                      onClick={() => removeImage('photoProfil')}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label htmlFor="photoProfil" className="file-upload-label">
                    <div className="upload-icon"><CameraOutlined  style={{ fontSize: '40px' }}/></div>
                    <span>Cliquez pour ajouter votre photo</span>
                    <small>Format: JPG, PNG (Max: 5MB)</small>
                  </label>
                )}
                <input
                  type="file"
                  id="photoProfil"
                  name="photoProfil"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
              {errors.photoProfil && <span className="error-message">{errors.photoProfil}</span>}
            </div>

            {/* CIN Recto/Verso */}
            <div className="form-row">
              <div className="form-group">
                <label>CIN Recto *</label>
                <div className="file-upload-area">
                  {previewImages.cinRecto ? (
                    <div className="image-preview">
                      <img src={previewImages.cinRecto} alt="CIN Recto" />
                      <button 
                        type="button" 
                        className="remove-image-btn"
                        onClick={() => removeImage('cinRecto')}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="cinRecto" className="file-upload-label">
                      <div className="upload-icon">🆔</div>
                      <span>CIN Recto</span>
                    </label>
                  )}
                  <input
                    type="file"
                    id="cinRecto"
                    name="cinRecto"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                </div>
                {errors.cinRecto && <span className="error-message">{errors.cinRecto}</span>}
              </div>

              <div className="form-group">
                <label>CIN Verso *</label>
                <div  className="file-upload-area">
                  {previewImages.cinVerso ? (
                    <div className="image-preview">
                      <img src={previewImages.cinVerso} alt="CIN Verso" />
                      <button 
                        type="button" 
                        className="remove-image-btn"
                        onClick={() => removeImage('cinVerso')}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="cinVerso" className="file-upload-label">
                      <div className="upload-icon">🆔</div>
                      <span>CIN Verso</span>
                    </label>
                  )}
                  <input
                    type="file"
                    id="cinVerso"
                    name="cinVerso"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                </div>
                {errors.cinVerso && <span className="error-message">{errors.cinVerso}</span>}
              </div>
            </div>
          </div>

          {/* Informations de connexion */}
          <div className="form-section">
            <h3 className="section-title">Informations de connexion</h3>
            
            <div className="form-group">
              <label htmlFor="email">Adresse email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Mot de passe *</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => togglePassword('password')}
                  >
                    {showPassword ? <EyeInvisibleOutlined/> : <EyeOutlined/>}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmer le mot de passe *</label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => togglePassword('confirmPassword')}
                  >
                    {showConfirmPassword ? <EyeInvisibleOutlined/> : <EyeOutlined/>}
                  </button>
                </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className={`inscription-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? '' : `Créer mon compte ${userType}`}
          </button>
        </form>

        <div className="login-link">
          Vous avez déjà un compte ? 
          <button 
            className="login-btn-link"
            onClick={handleBackToLogin}
            type="button"
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inscription;