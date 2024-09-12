// app/admin/inventory/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Product {
  id: number
  name: string
  price: number
  stock: number
}

export default function Inventory() {
  const [products, setProducts] = useState<Product[]>([])
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, stock: 0 })

  useEffect(() => {
    // Aquí iría la lógica para cargar los productos desde el backend
    // Por ahora, usaremos datos de ejemplo
    setProducts([
      { id: 1, name: 'Producto 1', price: 100, stock: 50 },
      { id: 2, name: 'Producto 2', price: 200, stock: 30 },
    ])
  }, [])

  const handleAddProduct = () => {
    // Aquí iría la lógica para añadir un producto al backend
    setProducts([...products, { ...newProduct, id: Date.now() }])
    setNewProduct({ name: '', price: 0, stock: 0 })
  }

  const handleDeleteProduct = (id: number) => {
    // Aquí iría la lógica para eliminar un producto del backend
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Inventario</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Añadir Producto</h2>
        <div className="flex gap-2">
          <Input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            placeholder="Nombre del producto"
          />
          <Input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            placeholder="Precio"
          />
          <Input
            type="number"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
            placeholder="Stock"
          />
          <Button onClick={handleAddProduct}>Añadir</Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Lista de Productos</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Button onClick={() => handleDeleteProduct(product.id)} variant="destructive">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}