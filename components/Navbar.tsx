'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3">

        {/* Logo */}
        <Link href="#inicio" onClick={() => handleLinkClick('Inicio')} className="flex items-center gap-2 sm:gap-3 focus:outline-none group shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-sm sm:text-xl shadow-md group-hover:scale-105 transition-transform border border-white/20">
            <span className="tracking-tighter font-headline-sm">CTI</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-headline-sm text-sm sm:text-lg text-primary tracking-tight font-extrabold leading-none">CTI</span>
              <span className="text-xs text-on-surface-variant font-medium hidden md:inline">· Centro Terapéutico Integral</span>
            </div>
            <span className="font-label-sm text-[10px] sm:text-xs text-secondary font-semibold mt-0.5 leading-tight">Patricia Fontán · Terapista Física</span>
          </div>
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

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Phone — sm+ */}
          <a
            href="tel:+543446618591"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-secondary bg-white/85 border border-[#bae6fd] hover:bg-white transition-all text-xs sm:text-sm font-semibold shadow-sm"
          >
            <span className="material-symbols-outlined text-base sm:text-lg text-secondary">chat</span>
            <span className="hidden lg:inline">+54 3446-618591</span>
          </a>

          {/* Pedir Turno CTA */}
          <Link
            href="#reservar-turno"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs sm:text-sm shadow-md hover:from-primary-container hover:to-tertiary transition-all border border-white/20"
          >
            <span className="material-symbols-outlined text-sm sm:text-base">calendar_month</span>
            <span>Pedir Turno</span>
          </Link>

          {/* Hamburger — mobile/tablet only */}
          <button
            className="lg:hidden p-2 rounded-xl glass-pill text-primary hover:bg-white/90 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
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

            <div className="border-t border-slate-200 pt-3 mt-3 grid grid-cols-2 gap-2">
              <a
                href="tel:+543446618591"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-secondary bg-white/85 border border-[#bae6fd] font-semibold text-sm"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>Llamar</span>
              </a>
              <a
                href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20CTI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
