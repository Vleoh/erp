'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])

  // Mock product data (in a real app, this would come from an API or database)
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 699 },
    { id: 3, name: "Headphones", price: 199 },
    { id: 4, name: "Tablet", price: 499 },
    { id: 5, name: "Smartwatch", price: 299 },
  ]

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Product Search</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded border border-gray-300 mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link href={`/product/${product.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}