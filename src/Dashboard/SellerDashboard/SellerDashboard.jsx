import React, { useState } from 'react';
import { 
  User, 
  TrendingUp, 
  MessageSquare, 
  Star, 
  DollarSign, 
  Package, 
  Calendar, 
  Bell,
  Settings,
  Plus,
  Eye,
  Edit,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  LogOut,
  UserCircle
} from 'lucide-react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './SellerDashboard.css';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFilter, setSelectedFilter] = useState('Toutes les commandes');

  // Données mockées pour la démo
  const stats = {
    totalEarnings: '125,400',
    pendingEarnings: '8,500',
    activeGigs: 12,
    totalOrders: 247,
    avgRating: 4.8,
    responseTime: '2h',
    completionRate: 98
  };

  const recentOrders = [
    {
      id: '#ORD-001',
      title: 'Logo design pour startup tech',
      buyer: 'Marie Dubois',
      status: 'En cours',
      deadline: '2025-08-08',
      price: '125,000 Ar',
      progress: 75
    },
    {
      id: '#ORD-002',
      title: 'Site web e-commerce',
      buyer: 'Jean Martin',
      status: 'Livré',
      deadline: '2025-08-05',
      price: '750,000 Ar',
      progress: 100
    },
    {
      id: '#ORD-003',
      title: 'Rédaction articles SEO',
      buyer: 'Sophie Laurent',
      status: 'En révision',
      deadline: '2025-08-10',
      price: '250,000 Ar',
      progress: 90
    }
  ];

  const myGigs = [
    {
      id: 1,
      title: 'Je vais créer votre logo professionnel',
      price: '125,000 Ar',
      orders: 45,
      rating: 4.9,
      status: 'Actif',
      views: 1250
    },
    {
      id: 2,
      title: 'Je vais développer votre site WordPress',
      price: '750,000 Ar',
      orders: 28,
      rating: 4.8,
      status: 'Actif',
      views: 890
    },
    {
      id: 3,
      title: 'Je vais optimiser votre référencement SEO',
      price: '400,000 Ar',
      orders: 15,
      rating: 4.7,
      status: 'Pausé',
      views: 567
    }
  ];

  const messages = [
    {
      id: 1,
      buyer: 'Marie Dubois',
      message: 'Bonjour, pouvez-vous modifier la couleur du logo ?',
      time: '10:30',
      unread: true
    },
    {
      id: 2,
      buyer: 'Jean Martin',
      message: 'Parfait ! Merci pour le travail excellent.',
      time: '09:15',
      unread: false
    },
    {
      id: 3,
      buyer: 'Sophie Laurent',
      message: 'Quand pouvez-vous commencer le projet ?',
      time: 'Hier',
      unread: true
    }
  ];

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'En cours': return 'status-in-progress';
      case 'Livré': return 'status-delivered';
      case 'En révision': return 'status-review';
      case 'Actif': return 'status-active';
      case 'Pausé': return 'status-paused';
      default: return 'status-default';
    }
  };

  // Menu utilisateur
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
      onClick={({ key }) => {
        switch (key) {
          case 'profile':
            console.log('Naviguer vers le profil');
            break;
          case 'settings':
            console.log('Naviguer vers les paramètres');
            break;
          case 'logout':
            console.log('Déconnexion');
            break;
        }
      }}
    />
  );
    const filterMenu = (
    <Menu
      onClick={({ key }) => {
        setSelectedFilter(key);
        // Ici vous pouvez ajouter votre logique de filtrage
        console.log('Filtre sélectionné:', key);
      }}
      items={[
        {
          key: 'Toutes les commandes',
          label: 'Toutes les commandes',
        },
        {
          key: 'En cours',
          label: 'En cours',
        },
        {
          key: 'Livrées',
          label: 'Livrées',
        },
        {
          key: 'En révision',
          label: 'En révision',
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
                <span className="notification-badge">3</span>
              </button>
              <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
                <div className="user-profile">
                  <div className="user-avatar">J</div>
                  <span className="user-name">Julianot Ralahy</span>
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
              { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
              { id: 'orders', label: 'Commandes', icon: Package },
              { id: 'gigs', label: 'Mes Services', icon: Star },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
              { id: 'earnings', label: 'Revenus', icon: DollarSign },
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
              <h2 className="welcome-title">Bonjour julianot ! 👋</h2>
              <p className="welcome-subtitle">Voici un aperçu de vos performances aujourd'hui</p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Revenus totaux</p>
                    <p className="stat-value">{stats.totalEarnings},000 Ar</p>
                  </div>
                  <div className="stat-icon earnings-icon">
                    <DollarSign className="icon" />
                  </div>
                </div>
                <div className="stat-trend">
                  <TrendingUp className="trend-icon" />
                  <span className="trend-text">+12% ce mois</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Commandes totales</p>
                    <p className="stat-value">{stats.totalOrders}</p>
                  </div>
                  <div className="stat-icon orders-icon">
                    <Package className="icon" />
                  </div>
                </div>
                <div className="stat-footer">
                  <span className="stat-detail">3 en cours</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Note moyenne</p>
                    <p className="stat-value">{stats.avgRating}/5</p>
                  </div>
                  <div className="stat-icon rating-icon">
                    <Star className="icon" />
                  </div>
                </div>
                <div className="stat-footer">
                  <span className="stat-detail">Sur 156 avis</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">Temps de réponse</p>
                    <p className="stat-value">{stats.responseTime}</p>
                  </div>
                  <div className="stat-icon response-icon">
                    <Clock className="icon" />
                  </div>
                </div>
                <div className="stat-footer">
                  <span className="stat-detail excellent">Excellent</span>
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
                      <div className="order-info">
                        <div className="order-meta">
                          <span className="order-id">{order.id}</span>
                          <span className={`order-status ${getStatusColorClass(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <h4 className="order-title">{order.title}</h4>
                        <p className="order-buyer">Client: {order.buyer}</p>
                      </div>
                      <div className="order-details">
                        <p className="order-price">{order.price}</p>
                        <p className="order-deadline">Échéance: {order.deadline}</p>
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
                    <Plus className="icon" />
                  </div>
                  <div className="action-info">
                    <h3 className="action-title">Créer un nouveau service</h3>
                    <p className="action-description">Ajoutez un nouveau service à votre catalogue</p>
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
                    <BarChart3 className="icon" />
                  </div>
                  <div className="action-info">
                    <h3 className="action-title">Analytics</h3>
                    <p className="action-description">Voir vos statistiques détaillées</p>
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
                  <DownOutlined className="dropdown-icon" />
                </button>
              </Dropdown>
              </div>
            </div>

            <div className="table-container">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Commande</th>
                    <th>Client</th>
                    <th>Statut</th>
                    <th>Échéance</th>
                    <th>Prix</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="table-row">
                      <td>
                        <div className="order-cell">
                          <div className="order-id-table">{order.id}</div>
                          <div className="order-title-table">{order.title}</div>
                        </div>
                      </td>
                      <td className="buyer-cell">{order.buyer}</td>
                      <td>
                        <span className={`table-status ${getStatusColorClass(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="deadline-cell">{order.deadline}</td>
                      <td className="price-cell">{order.price}</td>
                      <td>
                        <div className="table-actions">
                          <button className="action-btn view-btn">
                            <Eye className="btn-icon" />
                          </button>
                          <button className="action-btn message-btn">
                            <MessageSquare className="btn-icon" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gigs Tab */}
        {activeTab === 'gigs' && (
          <div className="tab-content">
            <div className="page-header">
              <h2 className="page-title">Mes Services</h2>
              <button className="primary-btn">
                <Plus className="btn-icon" />
                <span>Nouveau service</span>
              </button>
            </div>

            <div className="gigs-grid">
              {myGigs.map((gig) => (
                <div key={gig.id} className="gig-card">
                  <div className="gig-image"></div>
                  <div className="gig-content">
                    <div className="gig-header">
                      <span className={`gig-status ${getStatusColorClass(gig.status)}`}>
                        {gig.status}
                      </span>
                      <div className="gig-actions">
                        <button className="gig-action-btn">
                          <Eye className="btn-icon" />
                        </button>
                        <button className="gig-action-btn">
                          <Edit className="btn-icon" />
                        </button>
                      </div>
                    </div>
                    <h3 className="gig-title">{gig.title}</h3>
                    <div className="gig-stats">
                      <div className="gig-stat">
                        <span className="stat-label">Prix:</span>
                        <span className="stat-value">{gig.price}</span>
                      </div>
                      <div className="gig-stat">
                        <span className="stat-label">Commandes:</span>
                        <span className="stat-value">{gig.orders}</span>
                      </div>
                      <div className="gig-stat">
                        <span className="stat-label">Note:</span>
                        <div className="rating-display">
                          <Star className="star-icon" />
                          <span className="stat-value">{gig.rating}</span>
                        </div>
                      </div>
                      <div className="gig-stat">
                        <span className="stat-label">Vues:</span>
                        <span className="stat-value">{gig.views}</span>
                      </div>
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
                    <div className="message-avatar">
                      <User className="avatar-icon" />
                    </div>
                    <div className="message-info">
                      <div className="message-header">
                        <h3 className="message-sender">{message.buyer}</h3>
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

export default SellerDashboard;