import type { Metadata } from 'next'
import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'Patricia Fontán - Kinesiología | Consultorio CTI y Atención a Domicilio',
  description:
    'Patricia Fontán - Kinesiología en Consultorio CTI (1° de mayo 130) y atención a domicilio en Gualeguaychú. Masajes, drenaje linfático, corrección postural y A.T.M. Turnos por WhatsApp.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    'kinesiología', 'Patricia Fontán', 'kinesióloga', 'CTI', 'Centro Terapéutico Integral',
    'kinesiología a domicilio', 'masajes', 'drenaje linfático', 'corrección postural',
    'ATM bruxismo', 'Gualeguaychú', 'Entre Ríos',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        />
      </head>
      <body className="relative bg-[#f8fafc] font-body-md text-on-surface antialiased min-h-screen overflow-x-hidden">
        {/* Ambient glow blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-[#0284c7]/20 via-[#38bdf8]/15 to-transparent blur-[120px] transform-gpu" />
          <div className="absolute top-[16%] -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#0f2b48]/15 via-[#0284c7]/15 to-transparent blur-[130px] transform-gpu" />
          <div className="absolute top-[48%] left-[1%] w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-[#0284c7]/12 via-[#38bdf8]/18 to-transparent blur-[130px] transform-gpu" />
          <div className="absolute top-[72%] -right-28 w-[640px] h-[640px] rounded-full bg-gradient-to-tl from-[#0f2b48]/15 via-[#bae6fd]/25 to-transparent blur-[120px] transform-gpu" />
        </div>

        {children}

        {/* Floating WhatsApp button */}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
