import { useState } from 'react'
import { Zap, Shield, Globe, Check, Wifi, SignalHigh, ArrowRight } from 'lucide-react'
import './Home.css'

const PLANS = [
  {
    id: 1,
    name: 'PLANO BÁSICO',
    data: '3GB',
    validity: '7 DIAS',
    price: 8.00,
    features: ['3GB DE DADOS 5G', 'REDE CLARO/VIVO', 'SUPORTE 24/7'],
    popular: false
  },
  {
    id: 2,
    name: 'PLANO POPULAR',
    data: '10GB',
    validity: '30 DIAS',
    price: 16.00,
    features: ['10GB DE DADOS 5G', 'REDE CLARO/VIVO', 'SMS ILIMITADOS', 'SUPORTE PRIORITÁRIO'],
    popular: true
  },
  {
    id: 3,
    name: 'PLANO PREMIUM',
    data: '25GB',
    validity: '30 DIAS',
    price: 35.00,
    features: ['25GB DE DADOS 5G', 'REDE CLARO/VIVO', 'SMS ILIMITADOS', 'ROAMING INTERNACIONAL', 'SUPORTE VIP'],
    popular: false
  },
  {
    id: 4,
    name: 'PLANO ULTRA',
    data: '50GB',
    validity: '60 DIAS',
    price: 40.00,
    features: ['50GB DE DADOS 5G', 'REDE CLARO/VIVO', 'SMS ILIMITADOS', 'ROAMING EM 180 PAÍSES', 'SUPORTE VIP 24/7'],
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
          <div className="hero-content full-width">
            <div className="badge-5g">5G EM TODO O BRASIL</div>
            <h1 className="hero-title">CONECTIVIDADE PREMIUM COM <span className="text-gradient">NEXUS ESIM</span></h1>
            <p className="hero-subtitle">Utilize a infraestrutura das redes <strong>CLARO</strong> e <strong>VIVO</strong> com ativação instantânea e a maior velocidade do Brasil.</p>
            
            <div className="network-badges-container">
              <div className="network-card">
                <div className="network-dot claro"></div>
                <span>REDE CLARO</span>
              </div>
              <div className="network-card">
                <div className="network-dot vivo"></div>
                <span>REDE VIVO</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary btn-xl" onClick={() => {
                const element = document.getElementById('plans');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                COMEÇAR AGORA <ArrowRight size={20} style={{marginLeft: '8px'}} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-content">
            <span>TECNOLOGIA DE PONTA</span>
            <span className="separator">•</span>
            <span>ATIVAÇÃO EM 2 MINUTOS</span>
            <span className="separator">•</span>
            <span>SEM FIDELIDADE</span>
            <span className="separator">•</span>
            <span>SUPORTE BRASILEIRO</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">POR QUE ESCOLHER A <span className="text-gradient">NEXUS ESIM</span>?</h2>
            <p className="section-subtitle">A melhor experiência em conectividade virtual do país.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box">
                <Wifi className="feature-icon" />
              </div>
              <h3>REDE DUAL CARRIER</h3>
              <p>CONEXÃO INTELIGENTE QUE SE ADAPTA À MELHOR REDE (CLARO OU VIVO) DEPENDENDO DA SUA LOCALIZAÇÃO.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box">
                <Zap className="feature-icon" />
              </div>
              <h3>VELOCIDADE ULTRA 5G</h3>
              <p>NAVEGUE, ASSISTA VÍDEOS EM 4K E JOGUE ONLINE COM A MENOR LATÊNCIA DO MERCADO NACIONAL.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box">
                <Globe className="feature-icon" />
              </div>
              <h3>COBERTURA TOTAL</h3>
              <p>SINAL GARANTIDO EM TODOS OS ESTADOS E MUNICÍPIOS COM ROAMING AUTOMÁTICO E SEM CUSTO EXTRA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans" id="plans">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ESCOLHA SEU <span className="text-gradient">PLANO 5G</span></h2>
            <p className="section-subtitle">PLANOS FLEXÍVEIS COM OS MELHORES PREÇOS DO MERCADO.</p>
          </div>
          
          <div className="plans-grid">
            {PLANS.map(plan => (
              <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">MAIS POPULAR</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-data">
                  <span className="data-amount">{plan.data}</span>
                  <span className="data-label">DADOS 5G</span>
                </div>
                <div className="plan-validity">VÁLIDO POR {plan.validity}</div>
                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="price">{plan.price.toFixed(0)}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  SELECIONAR PLANO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="mockup-section">
        <div className="container">
          <div className="mockup-grid">
            <div className="hero-visual">
              <div className="floating-card status-5g-floating">
                <SignalHigh size={24} color="#7c3aed" />
                <div>
                  <span className="status-label">STATUS</span>
                  <span className="status-value">5G ATIVO</span>
                </div>
              </div>
              <div className="phone-mockup-wrapper">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="brand-logo-vertical">NEXUS</div>
                    <div className="esim-visual">
                      <div className="chip-inner"></div>
                    </div>
                    <div className="phone-footer">
                      <p>CONECTADO</p>
                      <div className="bars">
                        <div className="bar active"></div>
                        <div className="bar active"></div>
                        <div className="bar active"></div>
                        <div className="bar active"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mockup-text">
              <h2 className="section-title">TECNOLOGIA <span className="text-gradient">ESIM</span></h2>
              <p>TRANSFORME SEU CELULAR COM A MELHOR CONECTIVIDADE VIRTUAL DO BRASIL. SEM CHIP FÍSICO, SEM ESPERAS, APENAS CONEXÃO.</p>
              <ul className="mockup-list">
                <li><Check size={20} /> ATIVAÇÃO VIA QR CODE</li>
                <li><Check size={20} /> MANTENHA SEU NÚMERO ATUAL</li>
                <li><Check size={20} /> SUPORTE PARA TODOS OS MODELOS COMPATÍVEIS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>PRONTO PARA CONECTAR COM A MELHOR REDE?</h2>
            <p>ATIVE SEU NEXUS ESIM AGORA E TENHA O 5G DA CLARO E VIVO NO SEU CELULAR EM MINUTOS.</p>
            <div className="cta-actions">
              <button className="btn btn-white btn-xl" onClick={() => handleSelectPlan(PLANS[1])}>
                ATIVAR AGORA
              </button>
            </div>
            <p className="support-text">
              DÚVIDAS? <a href="https://wa.me/5512920058001?text=Olá%20NEXUS%20ESIM!%20Gostaria%20de%20suporte" target="_blank" rel="noopener noreferrer">FALE CONOSCO NO WHATSAPP</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
