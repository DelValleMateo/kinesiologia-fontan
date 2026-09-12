import Image from 'next/image'

const features = [
  {
    icon: '🏥',
    title: 'Equipamiento moderno',
    desc: 'Contamos con tecnología de última generación para diagnóstico y tratamiento.',
  },
  {
    icon: '🧘',
    title: 'Ambiente terapéutico',
    desc: 'Un espacio diseñado para tu comodidad y bienestar durante cada sesión.',
  },
  {
    icon: '📋',
    title: 'Seguimiento continuo',
    desc: 'Monitoreo de tu evolución en cada etapa del tratamiento.',
  },
  {
    icon: '💬',
    title: 'Consultas por WhatsApp',
    desc: 'Resolvemos tus dudas y coordinamos turnos de manera ágil.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-block text-[#1a4fa0] text-sm font-semibold uppercase tracking-wider mb-3">
              Sobre CTI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2d5e] mb-6 leading-tight">
              Un espacio terapéutico pensado para fortalecer tu{' '}
              <span className="text-[#1a4fa0]">armonía corporal</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              En el Centro Terapéutico Integral (CTI) creemos que cada persona merece un tratamiento
              único. Nuestro equipo de profesionales trabaja de manera interdisciplinaria para
              ofrecerte la mejor experiencia en rehabilitación física y bienestar en Gualeguaychú,
              Entre Ríos.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">{f.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image + floating card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] lg:aspect-auto lg:h-[540px]">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                alt="Consultorio CTI Gualeguaychú"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating appointments card */}
            <div className="absolute top-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-2xl p-5 w-52 border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Turnos disponibles
              </p>
              {['Lun – Vie', 'Sáb'].map((d, i) => (
                <div key={d} className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">{d}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {i === 0 ? 'Disponible' : 'Consultar'}
                  </span>
                </div>
              ))}
              <a
                href={`https://wa.me/543446618591?text=Hola%20CTI%2C%20quiero%20consultar%20turnos`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full text-center bg-[#1a4fa0] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#0d2d5e] transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
