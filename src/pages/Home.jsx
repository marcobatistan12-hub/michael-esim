import { useState } from 'react'
import { Zap, Shield, Globe, Check, Wifi, SignalHigh } from 'lucide-react'
import './Home.css'

const PLANS = [
  {
    id: 1,
    name: 'Plano Básico',
    data: '3GB',
    validity: '7 dias',
    price: 9.90,
    features: ['3GB de dados 5G', 'Rede Claro/Vivo', 'Suporte 24/7'],
    popular: false
  },
  {
    id: 2,
    name: 'Plano Popular',
    data: '10GB',
    validity: '30 dias',
    price: 19.90,
    features: ['10GB de dados 5G', 'Rede Claro/Vivo', 'SMS ilimitados', 'Suporte prioritário'],
    popular: true
  },
  {
    id: 3,
    name: 'Plano Premium',
    data: '25GB',
    validity: '30 dias',
    price: 34.90,
    features: ['25GB de dados 5G', 'Rede Claro/Vivo', 'SMS ilimitados', 'Roaming internacional', 'Suporte VIP'],
    popular: false
  },
  {
    id: 4,
    name: 'Plano Ultra',
    data: '50GB',
    validity: '60 dias',
    price: 49.90,
    features: ['50GB de dados 5G', 'Rede Claro/Vivo', 'SMS ilimitados', 'Roaming em 180 países', 'Suporte VIP 24/7'],
    popular: false
  }
]

export default function Home({ user, onCheckout }) {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan)
    onCheckout()
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge-5g">5G EM TODO O BRASIL</div>
            <h1>Conectividade Premium com NEXUS eSIM</h1>
            <p>Utilize as redes <strong>Claro</strong> e <strong>Vivo</strong> com ativação instantânea e a melhor velocidade do mercado.</p>
            <div className="network-badges">
              <span className="network-badge">Rede Claro</span>
              <span className="network-badge">Rede Vivo</span>
            </div>
            <button className="btn btn-primary btn-large" onClick={() => {
              const element = document.getElementById('plans');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Começar Agora
            </button>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="esim-icon">
                  <SignalHigh size={64} />
                </div>
                <div className="status-5g">5G ATIVO</div>
                <p>NEXUS eSIM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Por que escolher NEXUS eSIM?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Wifi className="feature-icon" />
              <h3>Rede Dual Carrier</h3>
              <p>Conexão automática na melhor rede disponível (Claro ou Vivo) em sua região.</p>
            </div>
            <div className="feature-card">
              <Zap className="feature-icon" />
              <h3>Velocidade 5G</h3>
              <p>Aproveite o máximo da tecnologia 5G no Brasil todo para navegar sem travar.</p>
            </div>
            <div className="feature-card">
              <Globe className="feature-icon" />
              <h3>Cobertura Nacional</h3>
              <p>Sinal garantido em 100% dos municípios brasileiros com roaming inteligente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans" id="plans">
        <div className="container">
          <h2>Escolha seu Plano</h2>
          <div className="plans-grid">
            {PLANS.map(plan => (
              <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Mais Popular</div>}
                <h3>{plan.name}</h3>
                <div className="plan-data">
                  <span className="data-amount">{plan.data}</span>
                  <span className="data-label">de dados 5G</span>
                </div>
                <div className="plan-validity">Válido por {plan.validity}</div>
                <div className="plan-price">
                  <span className="price">R$ {plan.price.toFixed(2)}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-full`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  Selecionar Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Pronto para conectar com a melhor rede?</h2>
          <p>Ative seu NEXUS eSIM agora e tenha 5G da Claro e Vivo no seu celular.</p>
          <button className="btn btn-primary btn-large" onClick={() => handleSelectPlan(PLANS[1])}>
            Ativar eSIM Agora
          </button>
          <p className="support-text">
            Dúvidas? <a href="https://wa.me/5512920058001?text=Olá%20NEXUS%20ESIM!%20Gostaria%20de%20suporte" target="_blank" rel="noopener noreferrer">Fale conosco no WhatsApp</a>
          </p>
        </div>
      </section>
    </div>
  )
}
