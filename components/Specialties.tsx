const cards = [
  {
    icon: 'spa', tag: 'Terapia Manual', tagColor: 'text-secondary',
    title: 'Masajes',
    desc: 'Terapéuticos y descontracturantes. Diseñados para relajar zonas en hipertonía muscular, mejorar la oxigenación de los tejidos y aliviar contracturas acumuladas por fatiga o tensión nerviosa.',
    items: ['Descontracturante cervical y dorsal', 'Alivio de tensiones lumbares', 'Disminución del estrés muscular'],
    waText: 'Masajes',
    border: 'border-slate-100 hover:border-[#bae6fd]',
    iconBg: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white',
    checkColor: 'text-secondary', btnColor: 'text-secondary hover:bg-secondary hover:text-white',
  },
  {
    icon: 'water_drop', tag: 'Circulatorio & Tisular', tagColor: 'text-tertiary',
    title: 'Drenaje Linfático Manual',
    desc: 'Maniobras suaves y precisas que estimulan el sistema linfático para evacuar toxinas y líquidos retenidos. Ideal para edemas y recuperación post-operatoria.',
    items: ['Rehabilitación postquirúrgica', 'Reducción de edemas e hinchazón', 'Mejora de la circulación de retorno'],
    waText: 'Drenaje%20Linf%C3%A1tico%20Manual',
    border: 'border-[#bae6fd]/80 hover:border-secondary',
    iconBg: 'bg-[#e0f2fe] border border-[#bae6fd] text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white',
    checkColor: 'text-[#0284c7]', btnColor: 'text-tertiary hover:bg-[#0284c7] hover:text-white',
  },
  {
    icon: 'accessibility_new', tag: 'Columna & Biomecánica', tagColor: 'text-secondary',
    title: 'Corrección Postural',
    desc: 'Reeducación motora y elongación activa de cadenas musculares acortadas para devolver a la columna vertebral sus curvas fisiológicas saludables.',
    items: ['Alineación de columna y cuello', 'Prevención de escoliosis y cifosis', 'Educación ergonómica cotidiana'],
    waText: 'Correcci%C3%B3n%20Postural',
    border: 'border-slate-100 hover:border-[#bae6fd]',
    iconBg: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white',
    checkColor: 'text-secondary', btnColor: 'text-secondary hover:bg-secondary hover:text-white',
  },
  {
    icon: 'face', tag: 'Mandíbula & Cervical', tagColor: 'text-secondary',
    title: 'A.T.M.',
    desc: 'Tratamiento específico de la Articulación Témporo-Mandibular. Alivia dolores maxilares, bloqueos, chasquidos, cefaleas tensionales y bruxismo.',
    items: ['Tratamiento de bruxismo y dolor orofacial', 'Descompresión de pterigoideos y masetero', 'Alivio de cefaleas asociadas'],
    waText: 'tratamiento%20de%20A.T.M.%20y%20bruxismo',
    border: 'border-[#bae6fd]/80 hover:border-secondary',
    iconBg: 'bg-[#e0f2fe] border border-[#bae6fd] text-secondary group-hover:bg-secondary group-hover:text-white',
    checkColor: 'text-secondary', btnColor: 'text-secondary hover:bg-secondary hover:text-white',
  },
]

export default function Specialties() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative" id="especialidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="inline-block px-3 sm:px-3.5 py-1 rounded-full glass-pill text-secondary text-xs font-bold mb-3 border border-[#bae6fd]">
              Servicios Principales
            </span>
            <h2 className="font-display-md text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight font-bold">
              Especialidades
            </h2>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md">
            Terapias físicas manuales aplicadas con precisión clínica para aliviar dolores, corregir
            desbalances y mejorar tu movilidad.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group hover:shadow-xl ${c.border}`}
            >
              <div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-sm transition-all ${c.iconBg}`}>
                  <span className="material-symbols-outlined text-xl sm:text-2xl">{c.icon}</span>
                </div>
                <div className={`inline-block px-2.5 sm:px-3 py-1 rounded-full bg-[#e0f2fe] text-xs font-bold mb-2 border border-[#bae6fd] ${c.tagColor}`}>
                  {c.tag}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{c.title}</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-5 leading-relaxed">{c.desc}</p>
                <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 text-xs sm:text-sm text-on-surface-variant">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`material-symbols-outlined text-sm sm:text-base shrink-0 mt-0.5 ${c.checkColor}`}>check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20${c.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl bg-white/85 border border-[#bae6fd] text-xs sm:text-sm text-center font-bold transition-all shadow-sm ${c.btnColor}`}
              >
                Consultar por {c.title}
              </a>
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl glass-navy-banner text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-2xl">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 text-[#38bdf8] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">sentiment_satisfied</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 rounded-full bg-white/10 text-[#bae6fd] text-xs mb-2 font-bold border border-white/20">
                <span className="material-symbols-outlined text-xs">verified_user</span>
                Atención Integral &amp; Multidisciplinar
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">
                ¿Tenés dudas sobre qué tratamiento es el adecuado para vos?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-2xl leading-relaxed">
                Escribile a Patricia Fontán. Te asesorará según tu sintomatología para coordinar la
                mejor sesión terapéutica en CTI.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5493446618591?text=Hola%20Patricia,%20tengo%20dudas%20sobre%20qu%C3%A9%20tratamiento%20necesito%20en%20CTI"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white text-primary font-bold text-sm md:text-base shadow-xl hover:bg-[#e0f2fe] hover:text-secondary hover:scale-105 transition-all flex items-center justify-center gap-2 border border-white/60"
          >
            <span className="material-symbols-outlined text-lg text-secondary">chat</span>
            <span>Asesorarme por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
