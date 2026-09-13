export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="rounded-2xl sm:rounded-[2.5rem] glass-navy-banner text-white p-6 sm:p-10 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden backdrop-blur-xl">

          {/* Copy */}
          <div className="w-full lg:max-w-2xl relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#bae6fd] text-xs font-bold mb-3 sm:mb-4 border border-white/20">
              <span className="material-symbols-outlined text-xs sm:text-sm text-[#bae6fd]">event_available</span>
              <span>Consultorio CTI (1° de mayo 130) y Atención a Domicilio</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3 leading-tight">
              Comenzá hoy tu recuperación en CTI o en tu hogar
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
              Escribile a Patricia Fontán por WhatsApp para resolver tus dudas y elegir el horario
              más conveniente para tu sesión en el consultorio CTI o a domicilio.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3 sm:gap-4 relative z-10 w-full lg:w-auto shrink-0">
            <a
              href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#25D366] text-white text-sm sm:text-base shadow-lg hover:bg-[#20ba59] transition-all font-bold"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">chat</span>
              <span>Pedir Turno por WhatsApp</span>
            </a>
            <a
              href="mailto:patofontan2015@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white/10 text-white border border-[#bae6fd]/50 text-sm sm:text-base shadow hover:bg-white hover:text-primary transition-all font-semibold backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
              <span>Enviar Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
