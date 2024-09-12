// components/Chatbot.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const faqs = {
  'productos': 'Ofrecemos una amplia gama de productos. Por favor, visita nuestra página de productos para más detalles.',
  'compra': 'Para realizar una compra, simplemente añade los productos a tu carrito y procede al checkout.',
  'envío': 'Realizamos envíos a todo el país. Los tiempos de entrega varían según la ubicación.',
}

export default function Chatbot() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const response = faqs[input.toLowerCase()] || 'Lo siento, no puedo responder a esa pregunta en este momento.'
    setMessages([...messages, { text: input, sender: 'user' }, { text: response, sender: 'bot' }])
    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-blue-500 text-white">Chatbot</div>
      <div className="h-64 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          className="mb-2"
        />
        <Button type="submit" className="w-full">Enviar</Button>
      </form>
    </div>
  )
}