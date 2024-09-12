// // app/admin/dashboard/page.tsx
// 'use client'

// import { useState, useEffect } from 'react'
// import { Bar } from 'react-chartjs-2'
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// export default function Dashboard() {
//   const [salesData, setSalesData] = useState({
//     labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
//     datasets: [
//       {
//         label: 'Ventas',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
//   })

//   useEffect(() => {
//     // Aquí iría la lógica para cargar los datos de ventas desde el backend
//   }, [])

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard de Ventas</h1>
//       <div className="w-full h-64">
//         <Bar data={salesData} options={{ responsive: true, maintainAspectRatio: false }} />
//       </div>
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function DashboardPage() {
  const [salesData, setSalesData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  })

  useEffect(() => {
    // Here you would typically fetch real data from an API
    // For now, we'll just use the static data
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$12,345</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">123</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">56</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <Bar 
              data={salesData} 
              options={{ 
                responsive: true, 
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }} 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}