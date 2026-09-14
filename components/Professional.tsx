import Image from 'next/image'

export default function Professional() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative" id="profesional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div className="max-w-5xl mb-10 sm:mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 sm:px-3.5 py-1 rounded-full glass-pill text-secondary text-xs font-bold mb-3 border border-[#bae6fd]">
              Enfoque y Filosofía
            </span>
            <h2 className="font-display-md text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight mb-4 font-bold leading-tight">
              Un espacio pensado para restablecer tu armonía corporal
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              En el <strong>CTI</strong> abordamos a cada persona como una unidad, además de los servicios de kinesiología, encontrarás profesionales del área de Odontología, Psicología, Fonoaudiología y Estética Corporal.
            </p>
          </div>
          <div className="shrink-0 self-center md:self-auto p-2.5 rounded-2xl sm:rounded-3xl glass-card border border-white/90 bg-white/85 shadow-md">
            <Image
              src="/logo-cti.jpeg"
              alt="Logo CTI - Centro Terapéutico Integral"
              width={110}
              height={110}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Left pillar — 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">

            {/* Bio card */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-md border border-white/60 shrink-0 p-1 flex items-center justify-center">
                  <Image
                    src="/logo-cti.jpeg"
                    alt="Logo CTI"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary">Patricia Fontán</h3>
                  <p className="text-xs sm:text-sm text-secondary font-semibold">Kinesióloga · Consultorio CTI</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-3 sm:mb-4">
                Con una sólida vocación por la kinesiología y experiencia profesional de más de 25 años, te brindaré una atención cercana, respetando los tiempos del cuerpo y enfocándome en la escucha activa de cada paciente.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Ya sea que necesites descomprimir contracturas acumuladas por el estrés cotidiano, rehabilitarte tras una intervención quirúrgica, mejorar la circulación linfática y venosa con drenaje linfático, alinear tu columna o solucionar los síntomas del bruxismo y la disfunción de ATM, en mi consultorio de <strong>1° de mayo 130</strong> o a través de <strong>visitas a domicilio</strong> encontrarás contención y profesionalismo.
              </p>
            </div>

            {/* 4 value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  icon: 'spa',
                  title: 'Terapia Manual',
                  desc: 'Manipulación suave y precisa que favorece la relajación miofascial y el retorno venoso.',
                },
                {
                  icon: 'person_pin',
                  title: 'Tratamiento 1 a 1',
                  desc: 'Sesiones exclusivas dedicadas a un solo paciente sin esperas ni distracciones.',
                },
                {
                  icon: 'home',
                  title: 'Atención a Domicilio',
                  desc: 'Consultas y sesiones kinésicas a domicilio en Gualeguaychú para pacientes con movilidad reducida.',
                },
                {
                  icon: 'health_and_safety',
                  title: 'Alivio Integral',
                  desc: 'Pautas posturales y de autocuidado para que los resultados perduren en el tiempo.',
                },
              ].map((v) => (
                <div key={v.title} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card flex flex-col gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center shrink-0">
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
                { label: 'Centro / Consultorio', value: 'CTI - Centro Terapéutico Integral', sub: null, icon: null },
                { label: 'Profesional Responsable', value: 'Patricia Fontán', sub: 'Kinesióloga', icon: null },
                { label: 'Dirección del Consultorio', value: '1° de mayo 130', sub: null, icon: 'home_pin' },
                { label: 'Modalidad de Atención', value: 'Consultorio CTI y A Domicilio', sub: 'En Gualeguaychú, Entre Ríos', icon: 'home' },
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
                  <a
                    href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-secondary hover:underline flex items-center gap-1.5 text-sm"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    +54 3446-618591
                  </a>
                  <a
                    href="mailto:patofontan2015@gmail.com"
                    className="font-medium text-on-surface-variant hover:text-secondary flex items-center gap-1.5 text-xs"
                  >
                    <span className="material-symbols-outlined text-base">mail</span>
                    patofontan2015@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
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
