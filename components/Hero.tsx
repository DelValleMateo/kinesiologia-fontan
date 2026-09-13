import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pb-24" id="inicio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ─── Left copy (7 cols on lg) ─── */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/85 border border-[#bae6fd] shadow-sm text-xs sm:text-sm mb-4 sm:mb-5 font-semibold text-secondary backdrop-blur-md flex-wrap">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
              <span className="text-primary font-bold">Consultorio CTI</span>
              <span className="text-secondary font-medium hidden sm:inline">· 1° de mayo 130</span>
              <span className="text-primary font-medium hidden md:inline">· Atención a Domicilio</span>
            </div>

            {/* H1 */}
            <h1 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-tight mb-4 sm:mb-5 font-extrabold">
              Rehabilitación física y bienestar con{' '}
              <span className="bg-gradient-to-r from-primary via-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent">
                atención personalizada
              </span>
              .
            </h1>

            {/* Paragraph */}
            <p className="font-body-lg text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-6 sm:mb-8">
              En el consultorio <strong>CTI</strong> y también con <strong>atención a domicilio</strong>,{' '}
              <strong>Patricia Fontán</strong> brinda un abordaje integral de kinesiología enfocado en
              aliviar el dolor, corregir la postura y devolver la armonía a tu cuerpo mediante
              técnicas manuales de probada eficacia clínica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-primary via-[#16385c] to-secondary text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all border border-white/20"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl text-[#38bdf8]">chat</span>
                <span>Pedir Turno por WhatsApp</span>
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white/85 border border-[#bae6fd] text-secondary font-semibold text-sm sm:text-base hover:bg-white hover:border-[#38bdf8] shadow-sm hover:shadow-md transition-all backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl text-secondary">self_improvement</span>
                <span>Ver Especialidades</span>
              </a>
            </div>

            {/* Quick pillars */}
            <div className="w-full max-w-2xl p-3 sm:p-5 rounded-2xl glass-card">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y-0 sm:divide-x divide-slate-200 gap-3 sm:gap-0">
                {[
                  { icon: 'person', title: 'Atención 1 a 1', sub: 'Patricia Fontán' },
                  { icon: 'pin_drop', title: 'Consultorio CTI', sub: '1° de mayo 130' },
                  { icon: 'home', title: 'A Domicilio', sub: 'Gualeguaychú', subColor: true },
                  { icon: 'schedule', title: 'Turnos Directos', sub: 'Vía WhatsApp', subColor: true },
                ].map((p) => (
                  <div key={p.title} className="flex items-center gap-2.5 sm:px-3 first:pl-0 last:pr-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base sm:text-lg">{p.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs sm:text-sm font-bold text-primary truncate">{p.title}</span>
                      <span className={`block text-[11px] sm:text-xs truncate ${p.subColor ? 'text-secondary font-medium' : 'text-on-surface-variant'}`}>
                        {p.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right image column (5 cols on lg) ─── */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0284c7]/25 via-white/70 to-[#38bdf8]/30 blur-2xl" />

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-3 sm:p-3.5 shadow-2xl border border-white/95">
                {/* Image / Logo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[4/4.2] bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe] shadow-inner group flex items-center justify-center p-6 sm:p-10 border border-white/80">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Logo Patricia Fontán - Kinesiología"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-contain p-4 sm:p-8 group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary font-bold text-[10px] sm:text-xs shadow-md border border-white shrink-0">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Consultorio CTI Activo
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-[#0f2b48]/85 backdrop-blur-md text-white font-medium text-[10px] sm:text-xs border border-white/20 shadow-md shrink-0">
                      <span className="material-symbols-outlined text-[10px] sm:text-xs text-[#38bdf8]">location_on</span>
                      <span>1° de mayo 130</span>
                    </span>
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/92 backdrop-blur-md border border-white/95 shadow-lg">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-xs font-bold text-primary block truncate">Atención en Consultorio CTI y a Domicilio</span>
                        <span className="text-[9px] sm:text-[11px] text-on-surface-variant font-medium hidden sm:block">Espacio terapéutico privado y climatizado</span>
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base sm:text-lg">verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio bar */}
                <div className="mt-3 p-3 sm:p-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-white flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <Image
                      src="/logo.png"
                      alt="Logo Patricia Fontán"
                      width={40}
                      height={40}
                      className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-primary text-xs sm:text-sm leading-tight truncate">Patricia Fontán</span>
                      <span className="text-[10px] sm:text-xs text-secondary font-semibold">Kinesióloga · Consultorio CTI</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-[10px] sm:text-xs font-bold hover:opacity-95 transition-all shadow-sm flex items-center gap-1 sm:gap-1.5 border border-white/20 shrink-0"
                  >
                    <span className="material-symbols-outlined text-xs sm:text-sm">chat</span>
                    <span>Pedir Turno</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Quick contact bar ─── */}
        <div className="mt-8 sm:mt-12 py-4 sm:py-5 px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-3xl glass-card border border-[#bae6fd]/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/15 text-secondary border border-secondary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl text-secondary">contact_support</span>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm">Consultorio CTI · Patricia Fontán</h3>
                <p className="text-xs text-on-surface-variant font-medium">Atención presencial en 1° de mayo 130 y consultas a domicilio</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <a
                href="tel:+543446618591"
                className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-xl bg-white/85 border border-[#bae6fd] font-semibold text-xs text-secondary flex items-center justify-center sm:justify-start gap-1.5 hover:bg-[#e0f2fe] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-base text-secondary">call</span>
                <span>3446-618591</span>
              </a>
              <a
                href="mailto:patofontan2015@gmail.com"
                className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-xl bg-white/85 border border-[#bae6fd] font-semibold text-xs text-secondary flex items-center justify-center sm:justify-start gap-1.5 hover:bg-[#e0f2fe] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-base text-secondary">mail</span>
                <span className="truncate">Mail</span>
              </a>
              <span className="hidden sm:flex px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 font-bold text-xs text-primary items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-secondary">location_on</span>
                1° de mayo 130
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
