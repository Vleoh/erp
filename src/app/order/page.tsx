// app/order/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

interface Product {
  id: number
  name: string
  price: number
}

export default function Order() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [address, setAddress] = useState('')

  useEffect(() => {
    // Aquí iría la lógica para cargar los productos desde el backend
    setProducts([
      { id: 1, name: 'Producto 1', price: 100 },
      { id: 2, name: 'Producto 2', price: 200 },
    ])
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el pedido al backend
    console.log({ productId: selectedProduct, quantity, address })
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Realizar Pedido</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="product">Producto</Label>
          <Select
            id="product"
            value={selectedProduct?.toString() || ''}
            onValueChange={(value) => setSelectedProduct(Number(value))}
          >
            <option value="">Selecciona un producto</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name} - ${product.price}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="quantity">Cantidad</Label>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
          />
        </div>
        <div>
          <Label htmlFor="address">Dirección de Envío</Label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <Button type="submit">Realizar Pedido</Button>
      </form>
    </div>
  )
}