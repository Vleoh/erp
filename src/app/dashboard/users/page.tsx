// app/admin/users/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' })

  useEffect(() => {
    // Aquí iría la lógica para cargar los usuarios desde el backend
    setUsers([
      { id: 1, name: 'Admin 1', email: 'admin1@example.com', role: 'admin' },
      { id: 2, name: 'User 1', email: 'user1@example.com', role: 'user' },
    ])
  }, [])

  const handleAddUser = () => {
    // Aquí iría la lógica para añadir un usuario al backend
    setUsers([...users, { ...newUser, id: Date.now() }])
    setNewUser({ name: '', email: '', role: '' })
  }

  const handleDeleteUser = (id: number) => {
    // Aquí iría la lógica para eliminar un usuario del backend
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Añadir Usuario</h2>
        <div className="flex gap-2">
          <Input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Nombre"
          />
          <Input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Email"
          />
          <Input
            type="text"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            placeholder="Rol"
          />
          <Button onClick={handleAddUser}>Añadir</Button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Lista de Usuarios</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Button onClick={() => handleDeleteUser(user.id)} variant="destructive">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}