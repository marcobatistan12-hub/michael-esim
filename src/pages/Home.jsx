import { useState } from 'react'
import { Zap, Shield, Globe, Check } from 'lucide-react'
import './Home.css'

const PLANS = [
  {
    id: 1,
    name: 'Plano Básico',
    data: '3GB',
    validity: '7 dias',
    price: 9.90,
    features: ['3GB de dados', 'Chamadas ilimitadas', 'Suporte 24/7'],
    popular: false
  },
  {
    id: 2,
    name: 'Plano Popular',
    data: '10GB',
    validity: '30 dias',
    price: 19.90,
    features: ['10GB de dados', 'Chamadas ilimitadas', 'SMS ilimitados', 'Suporte prioritário'],
    popular: true
  },
  {
    id: 3,
    name: 'Plano Premium',
    data: '25GB',
    validity: '30 dias',
    price: 34.90,
    features: ['25GB de dados', 'Chamadas ilimitadas', 'SMS ilimitados', 'Roaming internacional', 'Suporte VIP'],
    popular: false
  },
  {
    id: 4,
    name: 'Plano Ultra',
    data: '50GB',
    validity: '60 dias',
    price: 49.90,
    features: ['50GB de dados', 'Chamadas ilimitadas', 'SMS ilimitados', 'Roaming em 180 países', 'Suporte VIP 24/7'],
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
            <h1>Conectividade Global com eSIM</h1>
            <p>Ative seu eSIM em segundos. Sem complicações, sem esperas.</p>
            <button className="btn btn-primary btn-large" onClick={() => {
              if (!user) {
                window.location.href = '#login'
              }
            }}>
              Começar Agora
            </button>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="esim-icon">📱</div>
                <p>eSIM Ativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Por que escolher MICHAEL ESIM?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Zap className="feature-icon" />
              <h3>Ativação Instantânea</h3>
              <p>Ative seu eSIM em segundos, sem necessidade de cartão físico</p>
            </div>
            <div className="feature-card">
              <Globe className="feature-icon" />
              <h3>Cobertura Global</h3>
              <p>Conecte-se em mais de 180 países com a mesma linha</p>
            </div>
            <div className="feature-card">
              <Shield className="feature-icon" />
              <h3>Segurança Garantida</h3>
              <p>Seus dados protegidos com as melhores tecnologias de criptografia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans">
        <div className="container">
          <h2>Escolha seu Plano</h2>
          <div className="plans-grid">
            {PLANS.map(plan => (
              <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Mais Popular</div>}
                <h3>{plan.name}</h3>
                <div className="plan-data">
                  <span className="data-amount">{plan.data}</span>
                  <span className="data-label">de dados</span>
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
          <h2>Pronto para conectar?</h2>
          <p>Ative seu eSIM agora e comece a usar em minutos</p>
          <button className="btn btn-primary btn-large" onClick={() => handleSelectPlan(PLANS[1])}>
            Ativar eSIM Agora
          </button>
          <p className="support-text">
            Dúvidas? <a href="https://wa.me/5512920058001?text=Olá%20MICHAEL%20ESIM!%20Gostaria%20de%20suporte" target="_blank" rel="noopener noreferrer">Fale conosco no WhatsApp</a>
          </p>
        </div>
      </section>
    </div>
  )
}
