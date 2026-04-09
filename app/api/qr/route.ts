import { NextRequest, NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const url = searchParams.get('url') ?? process.env.NEXT_PUBLIC_APP_URL ?? 'https://madecases.com'
  const label = searchParams.get('label') ?? ''

  const buffer = await QRCode.toBuffer(url, {
    type: 'png',
    width: 400,
    margin: 2,
    color: { dark: '#000000', light: '#ffffff' },
  })

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename="madecases-qr${label ? `-${label}` : ''}.png"`,
    },
  })
}
