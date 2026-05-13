import { useState } from 'react'
import { Mail, Lock, User } from 'lucide-react'
import './Login.css'

export default function Login({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError('Preencha todos os campos')
        return
      }
    } else {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Preencha todos os campos')
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setError('As senhas não correspondem')
        return
      }
    }

    const user = {
      id: Date.now(),
      name: formData.name || formData.email.split('@')[0],
      email: formData.email
    }

    onLogin(user)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? 'Entrar' : 'Criar Conta'}</h2>
        <p className="subtitle">{isLogin ? 'Bem-vindo de volta' : 'Junte-se a nós'}</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <div className="input-wrapper">
                <User size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <Mail size={20} />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="input-wrapper">
              <Lock size={20} />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <div className="input-wrapper">
                <Lock size={20} />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-full">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>

        <div className="toggle-auth">
          <p>
            {isLogin ? 'Não tem conta? ' : 'Já tem conta? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
                setFormData({ name: '', email: '', password: '', confirmPassword: '' })
              }}
            >
              {isLogin ? 'Criar conta' : 'Entrar'}
            </button>
          </p>
        </div>

        <div className="support-link">
          <p>
            Dúvidas? <a href="https://wa.me/5512920058001?text=Olá%20MICHAEL%20ESIM!%20Gostaria%20de%20suporte" target="_blank" rel="noopener noreferrer">Fale conosco</a>
          </p>
        </div>
      </div>
    </div>
  )
}
