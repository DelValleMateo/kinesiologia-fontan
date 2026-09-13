'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Cómo solicito un turno en el consultorio CTI o a domicilio?',
    a: 'La solicitud de turnos se realiza de forma directa comunicándote por WhatsApp al +54 3446-618591 con la kinesióloga Patricia Fontán. Podés indicarle si preferís atenderte en el consultorio CTI o si necesitás atención a domicilio en Gualeguaychú, y coordinarán el día y horario más conveniente.',
  },
  {
    q: '¿Se realizan consultas y sesiones de kinesiología a domicilio?',
    a: 'Sí, brindamos atención kinésica y consultas a domicilio en toda la ciudad de Gualeguaychú. Esta modalidad es ideal para personas mayores, pacientes en recuperación postquirúrgica, con movilidad reducida o que prefieran recibir su rehabilitación en la comodidad de su hogar.',
  },
  {
    q: '¿Qué patologías y síntomas se tratan en A.T.M.?',
    a: 'El tratamiento de la Articulación Témporo-Mandibular está enfocado en personas que sufren de bruxismo (apriete o rechinamiento dental), dolor al masticar o abrir la boca, ruidos o chasquidos articulares, contracturas en la mandíbula y cefaleas tensionales secundarias.',
  },
  {
    q: '¿En qué consiste el Drenaje Linfático Manual y para quiénes está indicado?',
    a: 'Es una técnica manual sumamente suave y relajante orientada a activar la circulación linfática. Está especialmente recomendada en recuperaciones post-quirúrgicas (cirugías estéticas o traumatológicas), sensación de pesadez en piernas, retención de líquidos y edemas.',
  },
  {
    q: '¿Dónde queda el consultorio CTI y cómo debo asistir?',
    a: 'El consultorio CTI está ubicado en 1° de mayo 130, Gualeguaychú. Te recomendamos asistir con ropa cómoda que permita una evaluación sencilla de las zonas a tratar. Recordá agendar tu turno previo por WhatsApp.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-3.5 py-1 rounded-full glass-pill text-secondary text-xs font-bold mb-3 border border-[#bae6fd]">
            Información Útil
          </span>
          <h2 className="font-display-md text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight mb-3 font-bold">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant px-2">
            Respuestas a las dudas habituales antes de asistir al consultorio CTI o solicitar tu sesión a domicilio.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-card">
              <button
                type="button"
                className="w-full flex items-start sm:items-center justify-between gap-3 sm:gap-4 text-left focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm sm:text-base lg:text-lg font-bold text-primary leading-snug">
                  {faq.q}
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-2xl transition-transform duration-200 shrink-0 mt-0.5 sm:mt-0"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              {open === i && (
                <div className="mt-3 text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed pt-3 border-t border-slate-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
