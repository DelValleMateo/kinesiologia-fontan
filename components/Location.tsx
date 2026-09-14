import Image from 'next/image'

export default function Location() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-center">

          {/* Left — info */}
          <div className="lg:col-span-6">
            <span className="inline-block px-3 sm:px-3.5 py-1 rounded-full glass-pill text-secondary text-xs font-bold mb-3 border border-[#bae6fd]">
              Encontranos
            </span>
            <h2 className="font-display-md text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight font-bold mb-3 sm:mb-4 leading-tight">
              Consultorio CTI en 1° de mayo 130 y Atención a Domicilio
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-5 sm:mb-6">
              Un entorno cálido, confortable y especialmente acondicionado para que tu sesión de
              kinesiología sea una experiencia de verdadero alivio y desconexión. También brindamos
              atención y consultas a domicilio en toda la ciudad de Gualeguaychú.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {/* Dirección */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-secondary">pin_drop</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Consultorio CTI</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant">1° de mayo 130, Gualeguaychú</p>
                </div>
              </div>

              {/* Domicilio */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card border border-[#bae6fd]/80">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#e0f2fe] text-secondary border border-[#bae6fd] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">home</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Atención a Domicilio</h4>
                  <p className="text-xs sm:text-sm text-secondary font-semibold">Consultas y sesiones kinésicas en tu hogar</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card border border-[#bae6fd]/80">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#e0f2fe] text-secondary border border-[#bae6fd] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">phone_iphone</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Teléfono &amp; WhatsApp</h4>
                  <a
                    href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-secondary font-bold hover:underline flex items-center gap-1.5 flex-wrap"
                  >
                    <span>+54 3446-618591</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#e0f2fe] text-secondary">
                      Línea Directa
                    </span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card border border-[#bae6fd]/80">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#e0f2fe] text-secondary border border-[#bae6fd] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">mail</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-primary text-sm">Correo Electrónico</h4>
                  <a
                    href="mailto:patofontan2015@gmail.com"
                    className="text-xs sm:text-sm text-secondary font-bold hover:underline break-all"
                  >
                    patofontan2015@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — CTI card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-6 md:p-8 flex flex-col items-center text-center border border-white/95">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-lg mb-4 border border-white/60 p-2 flex items-center justify-center">
                <Image
                  src="/logo-cti.jpeg"
                  alt="Logo CTI"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">CTI - Centro Terapéutico Integral</h3>
              <p className="text-xs sm:text-sm font-semibold text-secondary mb-3">Patricia Fontán · Kinesióloga</p>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mb-5 sm:mb-6 leading-relaxed">
                Atención presencial en el consultorio CTI (1° de mayo 130) y visitas a domicilio en Gualeguaychú.
                Agendá tu turno previo para una atención personalizada y sin demoras.
              </p>
              <div className="w-full flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow hover:opacity-95 transition-all flex items-center justify-center gap-2 border border-white/20"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>Enviar WhatsApp</span>
                </a>
                <a
                  href="mailto:patofontan2015@gmail.com"
                  className="flex-1 sm:flex-none px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-pill text-primary font-bold text-sm hover:bg-white transition-all flex items-center justify-center gap-2 border border-[#bae6fd]"
                >
                  <span className="material-symbols-outlined text-lg text-secondary">mail</span>
                  <span>Enviar Correo</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
