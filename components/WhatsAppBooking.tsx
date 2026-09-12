export default function WhatsAppBooking() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative" id="reservar-turno">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full glass-pill text-secondary font-bold text-xs sm:text-sm mb-3 border border-[#bae6fd]">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>Coordinación Inmediata</span>
          </div>
          <h2 className="font-display-md text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight mb-3 font-bold">
            Pedí tu Turno en CTI por WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
            En CTI priorizamos la atención personalizada desde el primer contacto. Coordiná día y
            horario directamente con Patricia Fontán de forma rápida y sencilla.
          </p>
        </div>

        {/* Main booking card */}
        <div className="glass-card rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-12 shadow-2xl border border-white/95">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left — steps */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1.5 sm:mb-2">¿Cómo reservar tu sesión?</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant">Sin registros engorrosos ni esperas. Solo seguí estos 3 pasos:</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { n: '1', title: 'Hacé clic en el botón de WhatsApp', desc: 'Se abrirá una conversación directa con Patricia Fontán (+54 3446-618591) con un mensaje listo para enviar.' },
                  { n: '2', title: 'Indicanos tu motivo de consulta', desc: 'Contanos si buscás Masajes, Drenaje Linfático Manual, Corrección Postural o tratamiento de A.T.M.' },
                  { n: '3', title: 'Coordiná día y horario disponible', desc: 'Te responderemos a la brevedad con las opciones horarias en el consultorio de 1° de mayo 130.' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/75 border border-slate-100">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                      {step.n}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{step.title}</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-secondary">
                {['Atención 1 a 1 exclusiva', 'Ambiente climatizado y privado', 'Ubicación céntrica'].map((b) => (
                  <span key={b} className="px-2.5 sm:px-3 py-1.5 rounded-xl glass-pill flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check</span>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — booking card */}
            <div className="lg:col-span-6 glass-card-subtle p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-5 shadow-xl border border-white/90">

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-sm sm:text-lg shadow-md border border-white/20 shrink-0">
                    CTI
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-primary">Patricia Fontán</h4>
                    <p className="text-xs text-secondary font-semibold">Terapista Física · Consultorio CTI</p>
                  </div>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping" />
                  En línea
                </span>
              </div>

              {/* Info rows */}
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  { icon: 'location_on', label: 'Dirección:', value: '1° de mayo 130' },
                  { icon: 'call', label: 'WhatsApp:', value: '+54 3446-618591' },
                  { icon: 'mail', label: 'Email:', value: 'patofontan2015@gmail.com' },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-2.5 sm:gap-3 text-sm">
                    <span className="material-symbols-outlined text-secondary text-lg sm:text-xl mt-0.5 shrink-0">{row.icon}</span>
                    <div className="min-w-0">
                      <span className="font-bold text-primary block text-xs sm:text-sm">{row.label}</span>
                      <span className="text-on-surface-variant text-xs break-all">{row.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message preview */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f0f9ff] border border-[#bae6fd] text-xs text-on-surface-variant leading-relaxed">
                <span className="font-bold text-primary block mb-1">Mensaje sugerido al abrir WhatsApp:</span>
                <p className="italic text-on-surface">
                  &ldquo;Hola Patricia, quisiera consultar por un turno en CTI para [indicar tratamiento o dolor]...&rdquo;
                </p>
              </div>

              {/* CTA */}
              <div className="border-t border-slate-200 pt-4">
                <a
                  href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20CTI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-xl hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 sm:gap-3"
                >
                  <span className="material-symbols-outlined text-xl sm:text-2xl">chat</span>
                  <span>Pedir Turno por WhatsApp</span>
                </a>
                <p className="text-center text-xs text-on-surface-variant mt-2">
                  Respuesta rápida y coordinación directa con la profesional.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
