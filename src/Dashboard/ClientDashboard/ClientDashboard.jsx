import React, { useState } from 'react';
import { 
  User, 
  Heart, 
  MessageSquare, 
  Star, 
  DollarSign, 
  Package, 
  Clock, 
  Bell,
  Settings,
  Search,
  Eye,
  Download,
  LogOut,
  UserCircle,
  ShoppingCart,
  BookOpen,
  CreditCard,
  Filter
} from 'lucide-react';
import { Dropdown, Menu } from 'antd';
import './ClientDashboard.css';

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFilter, setSelectedFilter] = useState('Toutes les commandes');

  // Données mockées pour la démo
  const stats = {
    totalSpent: '485,000',
    activeOrders: 5,
    completedOrders: 23,
    savedServices: 12,
    avgRating: 4.6
  };

  const recentOrders = [
    {
      id: '#CMD-001',
      title: 'Logo design pour startup tech',
      seller: 'Marie Dubois',
      status: 'En cours',
      deadline: '2025-08-12',
      price: '125,000 Ar',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: '#CMD-002',
      title: 'Site web e-commerce',
      seller: 'Jean Martin',
      status: 'Livré',
      deadline: '2025-08-08',
      price: '750,000 Ar',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: '#CMD-003',
      title: 'Campagne publicitaire Facebook',
      seller: 'Sophie Laurent',
      status: 'En révision',
      deadline: '2025-08-15',
      price: '250,000 Ar',
      progress: 90,
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=100&h=100&fit=crop&crop=center'
    }
  ];

  const favoriteServices = [
    {
      id: 1,
      title: 'Je vais créer votre logo professionnel',
      seller: 'Marie Dubois',
      price: '125,000 Ar',
      rating: 4.9,
      reviews: 247,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Je vais développer votre site WordPress',
      seller: 'Alex Martin',
      price: '750,000 Ar',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Je vais créer vos campagnes publicitaires',
      seller: 'Tom Rodriguez',
      price: '400,000 Ar',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const messages = [
    {
      id: 1,
      seller: 'Marie Dubois',
      service: 'Logo design pour startup tech',
      message: 'Bonjour ! J\'ai terminé la première version de votre logo. Que pensez-vous de cette direction ?',
      time: '10:30',
      unread: true,
      avatar: 'MD'
    },
    {
      id: 2,
      seller: 'Jean Martin',
      service: 'Site web e-commerce',
      message: 'Votre site est maintenant en ligne ! Voici les accès admin.',
      time: '09:15',
      unread: false,
      avatar: 'JM'
    },
    {
      id: 3,
      seller: 'Sophie Laurent',
      service: 'Campagne publicitaire',
      message: 'Les créas sont prêtes pour validation. Merci de me faire un retour.',
      time: 'Hier',
      unread: true,
      avatar: 'SL'
    }
  ];

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'En cours': return 'status-in-progress';
      case 'Livré': return 'status-delivered';
      case 'En révision': return 'status-review';
      case 'En attente': return 'status-pending';
      default: return 'status-default';
    }
  };

  const filterMenu = (
    <Menu
      onClick={({ key }) => {
        setSelectedFilter(key);
      }}
      items={[
        { key: 'Toutes les commandes', label: 'Toutes les commandes' },
        { key: 'En cours', label: 'En cours' },
        { key: 'Livrées', label: 'Livrées' },
        { key: 'En révision', label: 'En révision' },
        { key: 'En attente', label: 'En attente' }
      ]}
    />
  );

  const userMenu = (
    <Menu
      items={[
        {
          key: 'profile',
          icon: <UserCircle className="w-4 h-4" />,
          label: 'Mon Profil',
        },
        {
          key: 'settings',
          icon: <Settings className="w-4 h-4" />,
          label: 'Paramètres',
        },
        {
          type: 'divider',
        },
        {
          key: 'logout',
          icon: <LogOut className="w-4 h-4" />,
          label: 'Déconnexion',
          danger: true,
        },
      ]}
    />
  );

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-container">
          <div className="header-content">
            <div className="header-left">
              <h1 className="logo">iKandra</h1>
              <span className="dashboard-title"></span>
            </div>
            <div className="header-right">
              <button className="notification-btn">
                <Bell className="icon" />
                <span className="notification-badge">2</span>
              </button>
              <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
                <div className="user-profile">
                  <div className="user-avatar">D</div>
                  <span className="user-name">Diamondra Ralahijaonina</span>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <nav className="nav-list">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: BookOpen },
              { id: 'orders', label: 'Mes Commandes', icon: Package },
              { id: 'favorites', label: 'Favoris', icon: Heart },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
              { id: 'billing', label: 'Facturation', icon: CreditCard },
              { id: 'settings', label: 'Paramètres', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`nav-tab ${activeTab === tab.id ? 'nav-tab-active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            {/* Welcome Section */}
            <div className="welcome-banner">
              <h2 className="welcome-title">Bonjour Diamondra ! 👋</h2>
              <p className="welcome-subtitle">Suivez vos projets en cours et découvrez de nouveaux services</p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Total dépensé</p>
                    <p className="stat-value">{stats.totalSpent} Ar</p>
                  </div>
                  <div className="stat-icon earnings-icon">
                    <DollarSign className="icon" />
                  </div>
                </div>
                <div className="stat-footer">
                  <span className="stat-detail">Cette année</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Commandes en cours</p>
                    <p className="stat-value">{stats.activeOrders}</p>
                  </div>
                  <div className="stat-icon orders-icon">
                    <Package className="icon" />
                  </div>
                </div>
                <div className="stat-footer">
                  <span className="stat-detail">2 se terminent bientôt</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Projets terminés</p>
                    <p className="stat-value">{stats.completedOrders}</p>
                  </div>
                  <div className="stat-icon rating-icon">
                    <Star className="icon" />
                  </div>
                </div>
                <div className="stat-footer">
                  <span className="stat-detail excellent">98% de satisfaction</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Services favoris</p>
                    <p className="stat-value">{stats.savedServices}</p>
                  </div>
                  <div className="stat-icon response-icon">
                    <Heart className="icon" />
                  </div>
                </div>
                <div className="stat-footer">
                  <span className="stat-detail">Voir tout</span>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="section-card">
              <div className="section-header">
                <h3 className="section-title">Commandes récentes</h3>
                <button className="view-all-btn">Voir tout</button>
              </div>
              <div className="orders-list">
                {recentOrders.map((order) => (
                  <div key={order.id} className="order-item">
                    <div className="order-content">
                      <div className="order-image">
                        <img src={order.image} alt={order.title} className="service-thumbnail" />
                      </div>
                      <div className="order-info">
                        <div className="order-meta">
                          <span className="order-id">{order.id}</span>
                          <span className={`order-status ${getStatusColorClass(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <h4 className="order-title">{order.title}</h4>
                        <p className="order-seller">Par: {order.seller}</p>
                      </div>
                      <div className="order-details">
                        <p className="order-price">{order.price}</p>
                        <p className="order-deadline">Livraison: {order.deadline}</p>
                      </div>
                    </div>
                    <div className="order-progress">
                      <div className="progress-header">
                        <span className="progress-label">Progression</span>
                        <span className="progress-value">{order.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <button className="action-card">
                <div className="action-content">
                  <div className="action-icon new-service-icon">
                    <Search className="icon" />
                  </div>
                  <div className="action-info">
                    <h3 className="action-title">Chercher un service</h3>
                    <p className="action-description">Explorez notre catalogue de services</p>
                  </div>
                </div>
              </button>

              <button className="action-card">
                <div className="action-content">
                  <div className="action-icon messages-icon">
                    <MessageSquare className="icon" />
                  </div>
                  <div className="action-info">
                    <h3 className="action-title">Messages</h3>
                    <p className="action-description">2 nouveaux messages</p>
                  </div>
                </div>
              </button>

              <button className="action-card">
                <div className="action-content">
                  <div className="action-icon analytics-icon">
                    <Heart className="icon" />
                  </div>
                  <div className="action-info">
                    <h3 className="action-title">Mes Favoris</h3>
                    <p className="action-description">{stats.savedServices} services sauvegardés</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="tab-content">
            <div className="page-header">
              <h2 className="page-title">Mes Commandes</h2>
              <div className="page-actions">
                <Dropdown overlay={filterMenu} trigger={['click']} placement="bottomLeft">
                  <button className="filter-dropdown">
                    <span>{selectedFilter}</span>
                    <Filter className="dropdown-icon" />
                  </button>
                </Dropdown>
              </div>
            </div>

            <div className="orders-grid">
              {recentOrders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-card-header">
                    <img src={order.image} alt={order.title} className="order-card-image" />
                    <span className={`order-status ${getStatusColorClass(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-card-content">
                    <div className="order-card-meta">
                      <span className="order-id">{order.id}</span>
                      <span className="order-price">{order.price}</span>
                    </div>
                    <h3 className="order-card-title">{order.title}</h3>
                    <p className="order-card-seller">Par: {order.seller}</p>
                    <div className="order-card-progress">
                      <div className="progress-header">
                        <span className="progress-label">Progression</span>
                        <span className="progress-value">{order.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="order-card-actions">
                      <button className="action-btn view-btn">
                        <Eye className="btn-icon" />
                        <span>Voir</span>
                      </button>
                      <button className="action-btn message-btn">
                        <MessageSquare className="btn-icon" />
                        <span>Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="tab-content">
            <div className="page-header">
              <h2 className="page-title">Mes Services Favoris</h2>
              <span className="favorites-count">{favoriteServices.length} services</span>
            </div>

            <div className="favorites-grid">
              {favoriteServices.map((service) => (
                <div key={service.id} className="favorite-card">
                  <div className="favorite-image">
                    <img src={service.image} alt={service.title} />
                    <button className="favorite-btn active">
                      <Heart className="heart-icon" />
                    </button>
                  </div>
                  <div className="favorite-content">
                    <h3 className="favorite-title">{service.title}</h3>
                    <p className="favorite-seller">Par: {service.seller}</p>
                    <div className="favorite-rating">
                      <div className="rating-display">
                        <Star className="star-icon" />
                        <span className="rating-score">{service.rating}</span>
                        <span className="rating-text">({service.reviews} avis)</span>
                      </div>
                    </div>
                    <div className="favorite-footer">
                      <span className="favorite-price">À partir de {service.price}</span>
                      <button className="order-btn">Commander</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="tab-content">
            <div className="page-header">
              <h2 className="page-title">Messages</h2>
              <span className="unread-badge">2 non lus</span>
            </div>

            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className={`message-item ${message.unread ? 'message-unread' : ''}`}>
                  <div className="message-content">
                    <div className="message-avatar">{message.avatar}</div>
                    <div className="message-info">
                      <div className="message-header">
                        <div className="message-seller-info">
                          <h3 className="message-sender">{message.seller}</h3>
                          <span className="message-service">{message.service}</span>
                        </div>
                        <span className="message-time">{message.time}</span>
                      </div>
                      <p className="message-text">{message.message}</p>
                    </div>
                    {message.unread && (
                      <div className="unread-indicator"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;