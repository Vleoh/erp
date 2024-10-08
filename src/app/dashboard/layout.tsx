// app/dashboard/layout.tsx
import Link from 'next/link'
import { Home, Package, Users, Truck, Search, Phone ,Box} from 'lucide-react'
import { Notifications } from '@/components/Notifications'
import Chatbot from '@/components/Chatbot'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Bienvenido</h1>
        </div>
        <nav className="mt-6">
          <Link href="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Home className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link href="/dashboard/inventory" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Package className="w-5 h-5 mr-2" />
            Inventory
          </Link>
          <Link href="/dashboard/users" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Users className="w-5 h-5 mr-2" />
            Users
          </Link>
          <Link href="/dashboard/tracking" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Truck className="w-5 h-5 mr-2" />
            Tracking
          </Link>
          <Link href="/search" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Search className="w-5 h-5 mr-2" />
            Search
          </Link>
          <Link href="/order" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Box className="w-5 h-5 mr-2" />
            Order
          </Link>
          <Link href="/contact" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Phone className="w-5 h-5 mr-2" />
            Contacto
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Notifications />
          </div>

          <div>
            <Chatbot />
          </div>
          
          {children}
        </div>
      </main>
    </div>
  )
}
