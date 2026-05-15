import { useState, useEffect } from 'react'
import { Menu, X, Smartphone, Zap, Shield, Globe } from 'lucide-react'
import Home from './pages/Home'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [user, setUser] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    setCurrentPage('home')
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    setCurrentPage('home')
  }

  const handleCheckout = () => {
    if (!user) {
      setCurrentPage('login')
    } else {
      setCurrentPage('checkout')
    }
  }

  return (
    <div className="app">
      <Header 
        user={user} 
        onLogout={handleLogout}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={setCurrentPage}
      />
      
      <main>
        {currentPage === 'home' && (
          <Home user={user} onCheckout={handleCheckout} />
        )}
        {currentPage === 'login' && (
          <Login onLogin={handleLogin} />
        )}
        {currentPage === 'checkout' && user && (
          <Checkout user={user} onBack={() => setCurrentPage('home')} />
        )}
      </main>

      <Footer />
    </div>
  )
}

function Header({ user, onLogout, menuOpen, setMenuOpen, onNavigate }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo" onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>
          <Smartphone className="logo-icon" color="#7c3aed" />
          <h1 className="brand-name">NEXUS ESIM</h1>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); setMenuOpen(false); }}>HOME</a>
          <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); window.location.href = 'https://wa.me/5512920058001?text=Olá%20NEXUS%20ESIM!%20Gostaria%20de%20suporte'; }}>SUPORTE</a>
          {user ? (
            <div className="user-info">
              <span className="user-name">OLÁ, {user.name.toUpperCase()}</span>
              <button className="btn btn-secondary btn-sm" onClick={onLogout}>SAIR</button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={() => { onNavigate('login'); setMenuOpen(false); }}>LOGIN</button>
          )}
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">NEXUS ESIM</h3>
            <p>CONECTIVIDADE PREMIUM COM TECNOLOGIA ESIM. A MELHOR COBERTURA 5G DO BRASIL NAS REDES CLARO E VIVO.</p>
          </div>
          <div className="footer-section">
            <h4>SUPORTE</h4>
            <a href="https://wa.me/5512920058001?text=Olá%20NEXUS%20ESIM!%20Gostaria%20de%20suporte" target="_blank" rel="noopener noreferrer" className="footer-link">
              WHATSAPP: (12) 92900-5800
            </a>
          </div>
          <div className="footer-section">
            <h4>CARACTERÍSTICAS</h4>
            <ul className="footer-list">
              <li>✓ REDE CLARO E VIVO</li>
              <li>✓ TECNOLOGIA 5G</li>
              <li>✓ COBERTURA NACIONAL</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NEXUS ESIM. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  )
}
