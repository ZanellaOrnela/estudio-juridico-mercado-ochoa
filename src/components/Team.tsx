import SectionTransition from "./SectionTransition";


export default function Team() {
  return (
    <section id="nosotros" className="bg-[#282E40] pt-[40rem] sm:pt-[36rem] md:pt-[20rem] lg:pt-80 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden z-10">
      {/* Elementos creativos de fondo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(45deg, transparent 25%, rgba(217, 177, 102, 0.1) 25%, rgba(217, 177, 102, 0.1) 50%, transparent 50%, transparent 75%, rgba(217, 177, 102, 0.1) 75%)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        {/* Círculos flotantes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D9B166]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTransition>
          <div className="text-center mb-16 lg:mb-20">
            {/* H2 - Tamaños optimizados UX/UI */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D9B166] font-playfair mb-4 leading-tight">
              Quiénes somos
            </h2>
            <div className="w-20 h-0.5 bg-[#D9B166] mx-auto mb-8"></div>
            {/* Párrafo principal - Optimizado para legibilidad */}
            <p className="text-base lg:text-lg text-white/90 font-source-sans max-w-3xl mx-auto leading-relaxed mb-6">
              Somos un estudio jurídico en Neuquén orientado a resultados, comunicación clara y acompañamiento cercano. 
              Nuestra metodología combina prevención del conflicto, negociación y, cuando es necesario, litigio.
            </p>
            {/* Párrafo secundario - Tamaño consistente */}
            <p className="text-sm lg:text-base text-white/80 font-source-sans max-w-2xl mx-auto leading-relaxed">
              Trabajamos con honorarios transparentes, plazos por escrito y reportes periódicos. 
              Si buscás abogados en Neuquén Capital que expliquen cada paso sin tecnicismos, estás en el lugar correcto.
            </p>
          </div>
        </SectionTransition>
        

        {/* CTA Section */}
        <SectionTransition delay={1000}>
          <div className="mt-16 lg:mt-20 text-center">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md p-8 lg:p-10 border border-white/20 max-w-3xl mx-auto">
              <h3 className="text-lg lg:text-xl font-bold text-white font-playfair mb-3">
                ¿Listo para resolver tu situación legal?
              </h3>
              <p className="text-sm lg:text-base text-white/85 font-source-sans mb-6 leading-relaxed">
                Contanos tu caso y te brindaremos una evaluación inicial sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/5492995294952?text=Hola%20quisiera%20hacer%20una%20consulta"
                  className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#282E40] bg-[#D9B166] hover:bg-[#c19a4d] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white border border-white/40 hover:border-[#D9B166] hover:bg-[#D9B166] hover:text-[#282E40] transition-all duration-300 text-sm"
                >
                  Enviar consulta
                </a>
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}