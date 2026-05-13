import { useState, useEffect } from 'react'
import { ArrowLeft, Phone, MapPin } from 'lucide-react'
import './Checkout.css'

const PLANS = [
  { id: 1, name: 'Plano Básico', data: '5GB', price: 19.90 },
  { id: 2, name: 'Plano Popular', data: '15GB', price: 49.90 },
  { id: 3, name: 'Plano Premium', data: '50GB', price: 99.90 },
  { id: 4, name: 'Plano Ultra', data: '100GB', price: 179.90 }
]

export default function Checkout({ user, onBack }) {
  const [selectedPlan, setSelectedPlan] = useState(PLANS[1])
  const [formData, setFormData] = useState({
    phoneNumber: '',
    activationType: 'new',
    country: 'Brasil'
  })
  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContinue = () => {
    if (!formData.phoneNumber) {
      alert('Por favor, preencha o número de telefone')
      return
    }
    setStep(2)
  }

  const handleWhatsAppCheckout = () => {
    const message = `Olá! Gostaria de comprar o *${selectedPlan.name}* (${selectedPlan.data}) por R$ ${selectedPlan.price.toFixed(2)}.

Meus dados:
- Nome: ${user.name}
- Email: ${user.email}
- Número de telefone: ${formData.phoneNumber}
- Tipo de ativação: ${formData.activationType === 'new' ? 'Nova Ativação' : 'Portabilidade'}
- País: ${formData.country}

Por favor, confirme meu pedido.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5512920058001?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="checkout">
      <div className="container">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          Voltar
        </button>

        <div className="checkout-content">
          <div className="checkout-main">
            {step === 1 ? (
              <div className="step-1">
                <h2>Dados da Ativação</h2>
                
                <div className="form-section">
                  <label>Tipo de Ativação</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="activationType"
                        value="new"
                        checked={formData.activationType === 'new'}
                        onChange={handleChange}
                      />
                      <span>Nova Ativação</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="activationType"
                        value="portability"
                        checked={formData.activationType === 'portability'}
                        onChange={handleChange}
                      />
                      <span>Portabilidade</span>
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <label htmlFor="phoneNumber">Número de Telefone</label>
                  <div className="input-with-icon">
                    <Phone size={20} />
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="(11) 9 8765-4321"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-section">
                  <label htmlFor="country">País</label>
                  <div className="input-with-icon">
                    <MapPin size={20} />
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option>Brasil</option>
                      <option>Portugal</option>
                      <option>Estados Unidos</option>
                      <option>Canadá</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>

                <button className="btn btn-primary btn-full" onClick={handleContinue}>
                  Continuar
                </button>
              </div>
            ) : (
              <div className="step-2">
                <h2>Resumo do Pedido</h2>
                
                <div className="order-summary">
                  <div className="summary-item">
                    <span>Plano:</span>
                    <strong>{selectedPlan.name}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Dados:</span>
                    <strong>{selectedPlan.data}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Tipo de Ativação:</span>
                    <strong>{formData.activationType === 'new' ? 'Nova Ativação' : 'Portabilidade'}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Número:</span>
                    <strong>{formData.phoneNumber}</strong>
                  </div>
                  <div className="summary-item">
                    <span>País:</span>
                    <strong>{formData.country}</strong>
                  </div>
                </div>

                <div className="payment-info">
                  <h3>Método de Pagamento</h3>
                  <p>Você será redirecionado para o WhatsApp para completar o pagamento com segurança.</p>
                </div>

                <div className="order-total">
                  <span>Total:</span>
                  <span className="total-price">R$ {selectedPlan.price.toFixed(2)}</span>
                </div>

                <button className="btn btn-primary btn-full btn-whatsapp" onClick={handleWhatsAppCheckout}>
                  Finalizar Compra via WhatsApp
                </button>

                <button className="btn btn-secondary btn-full" onClick={() => setStep(1)}>
                  Voltar
                </button>
              </div>
            )}
          </div>

          <div className="checkout-sidebar">
            <div className="plan-preview">
              <h3>Seu Plano</h3>
              <div className="plan-details">
                <div className="plan-name">{selectedPlan.name}</div>
                <div className="plan-data">{selectedPlan.data}</div>
                <div className="plan-price">R$ {selectedPlan.price.toFixed(2)}</div>
              </div>
              <button className="btn btn-secondary btn-full" onClick={onBack}>
                Mudar Plano
              </button>
            </div>

            <div className="support-box">
              <h4>Precisa de Ajuda?</h4>
              <p>Fale com nosso suporte via WhatsApp</p>
              <a href="https://wa.me/5512920058001?text=Olá%20MICHAEL%20ESIM!%20Gostaria%20de%20suporte" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-full">
                Contatar Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
