'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Profesional', href: '#profesional' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Ubicación', href: '#contacto' },
  { label: 'Preguntas', href: '#faq' },
]

export default function Navbar() {
  const [active, setActive] = useState('Inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  // Cerrar menú al pasar a desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLinkClick = (label: string) => {
    setActive(label)
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all">
      {/* ─── Main bar ─── */}
      <div className="h-20 sm:h-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-4">

        {/* Brand: Logo + Patricia Fontán - Kinesiología */}
        <Link
          href="#inicio"
          onClick={() => handleLinkClick('Inicio')}
          className="flex items-center gap-3 sm:gap-4 focus:outline-none group shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Logo Patricia Fontán - Kinesiología"
            width={110}
            height={110}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain shrink-0 group-hover:scale-105 transition-transform"
            priority
          />
          <span className="font-headline-sm text-base sm:text-xl md:text-2xl text-primary tracking-tight font-extrabold leading-none hover:text-secondary transition-colors">
            Patricia Fontán - Kinesiología
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1.5 glass-pill p-1.5 rounded-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                active === link.label
                  ? 'bg-primary text-white font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-white/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger — mobile/tablet only */}
        <button
          className="lg:hidden p-2 rounded-xl glass-pill text-primary hover:bg-white/90 transition-all ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* ─── Mobile drawer ─── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#bae6fd]/50 glass-card animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.label)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  active === link.label
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
