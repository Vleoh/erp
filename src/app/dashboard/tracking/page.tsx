// app/tracking/page.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para obtener el estado del envío
    // Por ahora, simplemente simularemos una respuesta
    setStatus('En tránsito')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Seguimiento de Envío</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Número de seguimiento"
          />
        </div>
        <Button type="submit">Buscar</Button>
      </form>
      {status && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Estado del envío:</h2>
          <p>{status}</p>
        </div>
      )}
    </div>
  )
}