// app/api/inquiry/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, phone, message } = body

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    })

    return NextResponse.json(inquiry)
  } catch (error) {
    return NextResponse.json({ error: 'Error al procesar la consulta' }, { status: 500 })
  }
}