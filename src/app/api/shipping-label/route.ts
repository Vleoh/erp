// app/api/shipping-label/route.ts
import { NextResponse } from 'next/server'
import PDFDocument from 'pdfkit'

export async function POST(req: Request) {
  const body = await req.json()
  const { orderId, address } = body

  const doc = new PDFDocument()
  let buffers: any[] = []
  doc.on('data', buffers.push.bind(buffers))
  doc.on('end', () => {
    let pdfData = Buffer.concat(buffers)
    return new NextResponse(pdfData, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=shipping-label-${orderId}.pdf`,
      },
    })
  })

  // Generar la etiqueta de env��o
  doc.fontSize(18).text('Etiqueta de Envío', 100, 80)
  doc.fontSize(12).text(`Orden: ${orderId}`, 100, 120)
  doc.text(`Dirección: ${address}`, 100, 140)
  doc.end()
}