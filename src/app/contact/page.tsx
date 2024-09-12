// // app/contact/page.tsx
// 'use client'

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   })

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // Aquí iría la lógica para enviar los datos del formulario al backend
//     console.log(formData)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
//         <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
//         <form onSubmit={handleSubmit} className="w-full max-w-lg">
//           <div className="mb-4">
//             <Label htmlFor="name">Nombre</Label>
//             <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="email">Correo electrónico</Label>
//             <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="phone">Teléfono</Label>
//             <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="message">Mensaje</Label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <Button type="submit">Enviar</Button>
//         </form>
//       </main>
//     </div>
//   )
// }
// app/contact/page.tsx
'use client'

import Layout from '../dashboard/layout' 
import { useState } from 'react'
import Link from 'next/link'
import { Home, Package, Users, Truck, Bot, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
   
      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Contáctanos</h1>
          <Link href="/dashboard">
            <Button variant="secondary" className="ml-4">Regresar</Button>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Mensaje</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
      </main>
    
       </Layout>
  )
}
