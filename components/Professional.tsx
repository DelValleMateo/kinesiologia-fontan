export default function Professional() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative" id="profesional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-block px-3 sm:px-3.5 py-1 rounded-full glass-pill text-secondary text-xs font-bold mb-3 border border-[#bae6fd]">
            Enfoque y Filosofía
          </span>
          <h2 className="font-display-md text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight mb-4 font-bold leading-tight">
            Un espacio terapéutico pensado para restablecer tu armonía corporal
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            En CTI abordamos a cada persona como una unidad biomecánica y emocional única. Guiados
            por la calidez y la experiencia de Patricia Fontán, diseñamos planes terapéuticos
            manuales orientados a eliminar las causas del dolor y no solo sus manifestaciones
            superficiales.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Left pillar — 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">

            {/* Bio card */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-base sm:text-xl shadow-md border border-white/20 shrink-0">
                  PF
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary">Patricia Fontán</h3>
                  <p className="text-xs sm:text-sm text-secondary font-semibold">Terapista Física · Directora en CTI</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-3 sm:mb-4">
                Con una sólida vocación por la terapia física manual y la reeducación funcional, en
                el <strong>Centro Terapéutico Integral (CTI)</strong> brindamos una atención cercana,
                respetando los tiempos del cuerpo y enfocándonos en la escucha activa de cada paciente.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Ya sea que necesites descomprimir contracturas acumuladas por el estrés cotidiano,
                rehabilitarte tras una intervención quirúrgica con drenaje linfático, alinear tu
                columna o solucionar los síntomas del bruxismo y la disfunción de ATM, en nuestro
                consultorio de <strong>1° de mayo 130</strong> encontrarás contención y profesionalismo.
              </p>
            </div>

            {/* 3 value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: 'spa', title: 'Terapia Manual', desc: 'Manipulación suave que favorece la relajación miofascial y el retorno venoso.' },
                { icon: 'person_pin', title: 'Tratamiento 1 a 1', desc: 'Sesiones exclusivas dedicadas a un solo paciente sin esperas ni distracciones.' },
                { icon: 'health_and_safety', title: 'Alivio Integral', desc: 'Pautas posturales y de autocuidado para que los resultados perduren en el tiempo.' },
              ].map((v) => (
                <div key={v.title} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-card flex flex-row sm:flex-col gap-3 sm:gap-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center shrink-0 sm:mb-3">
                    <span className="material-symbols-outlined text-lg sm:text-xl">{v.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-1">{v.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Consultorio card — 5 cols */}
          <div className="lg:col-span-5 glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-primary">Ficha del Consultorio</h3>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-bold border border-secondary/20">
                Activo
              </span>
            </div>
            <div className="space-y-3 sm:space-y-4 text-sm">
              {[
                { label: 'Centro', value: 'CTI - Centro Terapéutico Integral', sub: null, icon: null },
                { label: 'Profesional Responsable', value: 'Patricia Fontán', sub: 'Terapista Física', icon: null },
                { label: 'Dirección', value: '1° de mayo 130', sub: null, icon: 'home_pin' },
              ].map((item) => (
                <div key={item.label} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/75 border border-slate-100">
                  <span className="text-xs text-on-surface-variant font-semibold block mb-0.5">{item.label}</span>
                  <span className="font-bold text-primary text-sm sm:text-base flex items-center gap-1.5">
                    {item.icon && <span className="material-symbols-outlined text-secondary text-base sm:text-lg">{item.icon}</span>}
                    {item.value}
                  </span>
                  {item.sub && <span className="text-xs text-secondary font-semibold block mt-0.5">{item.sub}</span>}
                </div>
              ))}

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/75 border border-slate-100">
                <span className="text-xs text-on-surface-variant font-semibold block mb-1.5">Contacto Directo</span>
                <div className="space-y-1.5">
                  <a href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20CTI" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:underline flex items-center gap-1.5 text-sm">
                    <span className="material-symbols-outlined text-base">call</span>
                    +54 3446-618591
                  </a>
                  <a href="mailto:patofontan2015@gmail.com" className="font-medium text-on-surface-variant hover:text-secondary flex items-center gap-1.5 text-xs">
                    <span className="material-symbols-outlined text-base">mail</span>
                    patofontan2015@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20CTI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm text-center block shadow-lg hover:shadow-xl hover:opacity-95 transition-all border border-white/20"
              >
                Consultar a Patricia por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
