import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './Accueil.css';

const Accueil = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const categories = [
    { id: 'programmation', name: 'Programmation', icon: '💻', description: 'Applications, sites web, logiciels' },
    { id: 'design', name: 'Design Graphique', icon: '🎨', description: 'Logos, illustrations, branding' },
    { id: 'marketing', name: 'Marketing Digital', icon: '📱', description: 'SEO, publicité, réseaux sociaux' },
    { id: 'redaction', name: 'Rédaction', icon: '✍️', description: 'Articles, copywriting, traduction' },
    { id: 'audio-video', name: 'Audio & Vidéo', icon: '🎵', description: 'Montage, animation, musique' },
    { id: 'business', name: 'Business', icon: '📊', description: 'Conseil, finance, gestion' },
  ];

  const services = [
    {
      id: 'logo-design',
      title: 'Je vais créer un logo professionnel pour votre entreprise',
      image: 'https://source.unsplash.com/random/300x200?logo',
      badge: 'TOP VENTE',
      freelancer: { avatar: 'MJ', name: 'Marie Josse' },
      rating: { score: 4.9, reviews: 247 },
      price: '25€',
    },
    {
      id: 'wordpress-dev',
      title: 'Je vais développer votre site WordPress sur mesure',
      image: 'https://source.unsplash.com/random/300x200?website',
      badge: 'NOUVEAU',
      freelancer: { avatar: 'JD', name: 'Jean Dupont' },
      rating: { score: 4.8, reviews: 156 },
      price: '75€',
    },
    {
      id: 'seo-writing',
      title: 'Je vais rédiger des articles SEO optimisés',
      image: 'https://source.unsplash.com/random/300x200?content',
      freelancer: { avatar: 'SL', name: 'Sophie Laurent' },
      rating: { score: 4.7, reviews: 89 },
      price: '15€',
    },
    {
      id: 'video-editing',
      title: 'Je vais monter vos vidéos de façon professionnelle',
      image: 'https://source.unsplash.com/random/300x200?video',
      freelancer: { avatar: 'AM', name: 'Alex Martin' },
      rating: { score: 4.9, reviews: 312 },
      price: '50€',
    },
    {
      id: 'translation',
      title: 'Je vais traduire vos textes français-anglais',
      image: 'https://source.unsplash.com/random/300x200?translation',
      freelancer: { avatar: 'CB', name: 'Claire Brown' },
      rating: { score: 4.8, reviews: 198 },
      price: '10€',
    },
    {
      id: 'facebook-ads',
      title: 'Je vais créer vos campagnes Facebook Ads',
      image: 'https://source.unsplash.com/random/300x200?advertising',
      freelancer: { avatar: 'TR', name: 'Tom Rodriguez' },
      rating: { score: 4.6, reviews: 134 },
      price: '40€',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Trouvez le service',
      description: 'Parcourez notre catalogue de services ou recherchez exactement ce dont vous avez besoin',
    },
    {
      step: '2',
      title: 'Passez commande',
      description: 'Choisissez votre forfait, précisez vos besoins et effectuez le paiement sécurisé',
    },
    {
      step: '3',
      title: 'Recevez votre livrable',
      description: 'Le freelancer travaille sur votre projet et vous livre le résultat dans les délais convenus',
    },
  ];

  return (
    <div className="accueil">
      <header>
        <div className="container">
          <div className="header-content">
            <span className="logo" role="img" aria-label="Logo Kandra">iKandra</span>
            {/* <div className="search-bar" role="search">
              <input
                type="text"
                placeholder="Rechercher un service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                aria-label="Rechercher un service"
              />
              <button className="search-btn" onClick={handleSearch} aria-label="Lancer la recherche">
                <SearchOutlined />
              </button>
            </div> */}
            <div className="header-actions">
              <button
                className="btn btn-outline"
                onClick={() => navigate('/seller')}
                aria-label="Vendre des services"
              >
                Vendre des services
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/login')}
                aria-label="Se connecter"
              >
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </header>

        <div className='hero-content'>
          <div className="container">


          <section className="hero">
              <h1>Trouvez le freelance parfait</h1>

              <p>Des milliers de services professionnels à partir de <span className='prix'>50 000Ar</span></p>
              
              {/* <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">2M+</span>
                  <span className="stat-label">Services actifs</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500K+</span>
                  <span className="stat-label">Freelancers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction client</span>
                </div>
              </div> */}

          </section>

          </div>
        </div>

      <div className="container">
        <section className="categories">
          <h2 className="section-title">Catégories populaires</h2>
          <div className="category-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => navigate(`/category/${category.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(`/category/${category.id}`)}
                aria-label={`Voir la catégorie ${category.name}`}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="featured-services">
          <h2 className="section-title">Services en vedette</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                onClick={() => navigate(`/service/${service.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(`/service/${service.id}`)}
                aria-label={`Voir le service ${service.title}`}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  {service.badge && <div className="service-badge">{service.badge}</div>}
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-meta">
                    <div className="freelancer-avatar">{service.freelancer.avatar}</div>
                    <span className="freelancer-name">{service.freelancer.name}</span>
                  </div>
                  <div className="rating">
                    <span className="stars">⭐ {service.rating.score}</span>
                    <span className="rating-text">({service.rating.reviews} avis)</span>
                  </div>
                  <div className="service-price">À partir de {service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="how-it-works">
          <h2 className="section-title">Comment ça marche</h2>
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>Prêt à commencer ?</h2>
          <p>Rejoignez des milliers de clients satisfaits</p>
          <div className="cta-buttons">
            <button
              className="btn btn-white"
              onClick={() => navigate('/search')}
              aria-label="Trouver un service"
            >
              Trouver un service
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate('/seller')}
              aria-label="Devenir freelance"
            >
              Devenir freelance
            </button>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <div className="footer-section">
              <h3>Catégories</h3>
              <ul>
                {categories.slice(0, 5).map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => navigate(`/category/${category.id}`)}
                      aria-label={`Voir la catégorie ${category.name}`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h3>À propos</h3>
              <ul>
                <li><button onClick={() => navigate('/about')}>Qui sommes-nous</button></li>
                <li><button onClick={() => navigate('/careers')}>Carrières</button></li>
                <li><button onClick={() => navigate('/press')}>Presse</button></li>
                <li><button onClick={() => navigate('/partners')}>Partenaires</button></li>
                <li><button onClick={() => navigate('/investors')}>Investisseurs</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><button onClick={() => navigate('/help')}>Centre d'aide</button></li>
                <li><button onClick={() => navigate('/trust')}>Confiance & sécurité</button></li>
                <li><button onClick={() => navigate('/quality')}>Qualité des services</button></li>
                <li><button onClick={() => navigate('/contact')}>Nous contacter</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Communauté</h3>
              <ul>
                <li><button onClick={() => navigate('/events')}>Événements</button></li>
                <li><button onClick={() => navigate('/blog')}>Blog</button></li>
                <li><button onClick={() => navigate('/forum')}>Forum</button></li>
                <li><button onClick={() => navigate('/affiliates')}>Affiliés</button></li>
                <li><button onClick={() => navigate('/podcast')}>Podcast</button></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 FreelanceHub. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Accueil;