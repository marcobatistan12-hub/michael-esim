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
          <Smartphone className="logo-icon" />
          <h1>NEXUS ESIM</h1>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); setMenuOpen(false); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = 'https://wa.me/5512920058001?text=Olá%20NEXUS%20ESIM!%20Gostaria%20de%20suporte'; }}>Suporte</a>
          {user ? (
            <>
              <span className="user-name">Olá, {user.name}</span>
              <button className="btn btn-secondary" onClick={onLogout}>Sair</button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={() => { onNavigate('login'); setMenuOpen(false); }}>Login</button>
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
            <h3>NEXUS ESIM</h3>
            <p>Conectividade premium com tecnologia eSIM. A melhor cobertura 5G do Brasil.</p>
          </div>
          <div className="footer-section">
            <h4>Suporte</h4>
            <a href="https://wa.me/5512920058001?text=Olá%20NEXUS%20ESIM!%20Gostaria%20de%20suporte" target="_blank" rel="noopener noreferrer">
              WhatsApp: (12) 92900-5800
            </a>
          </div>
          <div className="footer-section">
            <h4>Características</h4>
            <ul>
              <li>✓ Rede Claro e Vivo</li>
              <li>✓ Tecnologia 5G</li>
              <li>✓ Cobertura Nacional</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NEXUS ESIM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
