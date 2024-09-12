'use client'

import { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Notification {
  id: number
  message: string
  timestamp: Date
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Simulating real-time notifications
    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        message: `New notification at ${new Date().toLocaleTimeString()}`,
        timestamp: new Date(),
      }
      setNotifications(prev => [newNotification, ...prev.slice(0, 4)])
    }, 30000) // New notification every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700"
      >
        <Bell />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>
      {isOpen && (
        <Card className="absolute right-0 mt-2 w-80 overflow-hidden">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            {notifications.length === 0 ? (
              <p>No new notifications</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <li key={notification.id} className="py-4">
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-gray-500">
                      {notification.timestamp.toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}