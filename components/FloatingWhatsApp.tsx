export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Contacto flotante" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5493446618591?text=Hola%20Patricia,%20quisiera%20consultar%20por%20un%20turno%20en%20CTI"
        target="_blank"
        rel="noopener noreferrer"
        title="Pedir turno por WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl">chat</span>
        <span className="hidden sm:inline font-bold text-sm">Pedir Turno</span>
      </a>
    </aside>
  )
}
