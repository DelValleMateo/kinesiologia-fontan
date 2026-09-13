import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative z-10 w-full glass-card border-t border-slate-200 text-on-surface py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">

          {/* Brand */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Logo Patricia Fontán - Kinesiología"
                width={36}
                height={36}
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
              />
              <span className="font-headline-sm font-extrabold text-base text-primary tracking-tight">
                CTI · Centro Terapéutico Integral
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Rehabilitación física y bienestar integral a través de kinesiología, terapia manual, masajes
              terapéuticos, drenaje y corrección postural en consultorio y a domicilio.
            </p>
            <div className="pt-1">
              <p className="font-bold text-xs text-primary">Patricia Fontán</p>
              <p className="text-xs text-secondary font-semibold">Kinesióloga</p>
            </div>
          </div>

          {/* Especialidades */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-primary">Especialidades</h4>
            <ul className="space-y-1.5 text-xs text-on-surface-variant">
              <li>• Masajes Terapéuticos y Descontracturantes</li>
              <li>• Drenaje Linfático Manual</li>
              <li>• Corrección Postural</li>
              <li>• A.T.M. (Articulación Témporo-Mandibular)</li>
              <li>• Kinesiología y Rehabilitación a Domicilio</li>
            </ul>
          </div>

          {/* Consultorio & Modalidades */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-primary">Atención</h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">location_on</span>
                <span>Consultorio CTI: 1° de mayo 130</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">home</span>
                <span>Atención a domicilio en Gualeguaychú</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base shrink-0">person</span>
                <span>Atención 1 a 1 con turno previo</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base shrink-0">verified</span>
                <span>Espacio privado y climatizado</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-primary">Contacto Directo</h4>
            <p className="text-xs text-on-surface-variant">Para coordinar turnos en consultorio o a domicilio:</p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-xs text-secondary hover:underline flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base shrink-0">call</span>
                <span>+54 3446-618591</span>
              </a>
              <a
                href="mailto:patofontan2015@gmail.com"
                className="text-xs text-on-surface-variant hover:text-secondary flex items-start gap-1.5"
              >
                <span className="material-symbols-outlined text-base shrink-0">mail</span>
                <span className="break-all">patofontan2015@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-on-surface-variant">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} CTI - Centro Terapéutico Integral · Patricia Fontán Kinesióloga. Todos los derechos reservados.
            </p>
            <span className="hidden sm:inline text-slate-300">|</span>
            <p>
              Sitio web creado por{' '}
              <a
                href="mailto:mateodelvalle100@gmail.com"
                className="font-semibold text-secondary hover:underline"
              >
                mateodelvalle100@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a className="hover:text-secondary transition-colors" href="#especialidades">Tratamientos</a>
            <a className="hover:text-secondary transition-colors" href="#contacto">Ubicación</a>
            <a
              className="hover:text-secondary font-bold transition-colors"
              href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20CTI%20o%20a%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir Turno
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
