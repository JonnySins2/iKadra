import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil/Accueil';
import LoginPage from './Login/LoginPage';
import Inscription from './Inscription/Inscription';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/search" element={<div>Page de recherche</div>} />
      <Route path="/category/:id" element={<div>Page de catégorie</div>} />
      <Route path="/service/:id" element={<div>Page de service</div>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Inscription" element={<Inscription />} />
      <Route path="/seller" element={<div>Page vendeur</div>} />
      <Route path="/about" element={<div>Page à propos</div>} />
      <Route path="/careers" element={<div>Page carrières</div>} />
      <Route path="/press" element={<div>Page presse</div>} />
      <Route path="/partners" element={<div>Page partenaires</div>} />
      <Route path="/investors" element={<div>Page investisseurs</div>} />
      <Route path="/help" element={<div>Page centre d'aide</div>} />
      <Route path="/trust" element={<div>Page confiance & sécurité</div>} />
      <Route path="/quality" element={<div>Page qualité des services</div>} />
      <Route path="/contact" element={<div>Page contact</div>} />
      <Route path="/events" element={<div>Page événements</div>} />
      <Route path="/blog" element={<div>Page blog</div>} />
      <Route path="/forum" element={<div>Page forum</div>} />
      <Route path="/affiliates" element={<div>Page affiliés</div>} />
      <Route path="/podcast" element={<div>Page podcast</div>} />
    </Routes>
  );
}

export default App;