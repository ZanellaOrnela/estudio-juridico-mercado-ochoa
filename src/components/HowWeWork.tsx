import SectionTransition from "./SectionTransition";

const WORK_STEPS = [
  {
    step: "01",
    title: "Consulta inicial",
    description: "Recibimos tu consulta por WhatsApp, teléfono o email. Coordinamos una entrevista presencial u online para entender completamente tu situación."
  },
  {
    step: "02",
    title: "Estrategia y presupuesto",
    description: "Definimos objetivos claros, plazos realistas y honorarios transparentes. Todo queda por escrito para tu tranquilidad."
  },
  {
    step: "03",
    title: "Gestión y seguimiento",
    description: "Ejecutamos la estrategia legal con reportes periódicos. Te mantenemos informado en cada paso del proceso."
  },
  {
    step: "04",
    title: "Cierre y prevención",
    description: "Buscamos el mejor resultado posible y te asesoramos para evitar futuros conflictos legales similares."
  }
];

const WHY_CHOOSE_US = [
  {
    title: "5 años de experiencia y foco en resultados",
    description: "Trayectoria sólida con casos exitosos en múltiples áreas del derecho."
  },
  {
    title: "Abogados en Neuquén con atención directa y personalizada",
    description: "Trato directo con los abogados del estudio, sin intermediarios."
  },
  {
    title: "Transparencia en costos y etapas del proceso",
    description: "Honorarios claros desde el inicio y seguimiento detallado de cada etapa."
  },
  {
    title: "Asesoría integral: prevención, negociación y litigio",
    description: "Enfoque 360° que combina prevención, mediación y representación judicial."
  },
  {
    title: "Orientación práctica en múltiples áreas del derecho",
    description: "Experiencia en laboral, familia, civil, contratos, ambiental y tránsito."
  }
];

export default function HowWeWork() {
  return (
    <>
      {/* Cómo Trabajamos Section */}
      <section className="bg-[#F8FAFC] py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Elementos creativos de fondo */}
        <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ 
              background: 'linear-gradient(45deg, transparent 25%, rgba(40, 46, 64, 0.05) 25%, rgba(40, 46, 64, 0.05) 50%, transparent 50%, transparent 75%, rgba(40, 46, 64, 0.05) 75%)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-[#D9B26A]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tl from-[#011640]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTransition>
            <div className="text-center mb-12 lg:mb-16">
              {/* H2 - Tamaños optimizados UX/UI */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#011640] font-playfair mb-4 leading-tight">
                Cómo <span className="bg-gradient-to-r from-[#D9B26A] to-[#c19a4d] bg-clip-text text-transparent">trabajamos</span>
            </h2>
              <div className="w-20 h-0.5 bg-[#D9B26A] mx-auto mb-6"></div>
              {/* Párrafo principal - Optimizado */}
              <p className="text-base lg:text-lg text-[#6B7280] font-source-sans max-w-3xl mx-auto leading-relaxed">
                Nuestro proceso de trabajo está diseñado para brindarte transparencia, seguimiento constante 
                y los mejores resultados en cada caso.
            </p>
          </div>
        </SectionTransition>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {WORK_STEPS.map((step, index) => (
            <SectionTransition key={step.step} delay={100 + (index * 150)}>
                <div className="group bg-white p-6 shadow-lg border border-gray-200 hover:border-[#D9B26A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col text-center relative overflow-hidden">
                  {/* Elemento decorativo */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D9B26A]/10 to-transparent"></div>
                  
                  {/* Número del paso optimizado */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D9B26A] to-[#c19a4d] text-[#011640] font-bold text-lg font-playfair flex items-center justify-center mx-auto shadow-md group-hover:scale-105 transition-transform duration-300">
                    {step.step}
                    </div>
                  </div>

                  {/* Título - Optimizado UX/UI */}
                  <h3 className="font-bold text-base lg:text-lg text-[#011640] font-playfair mb-3 leading-tight">
                    {step.title}
                  </h3>

                  {/* Descripción - Tamaño optimizado */}
                  <p className="text-sm lg:text-base text-[#6B7280] font-source-sans leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Footer decorativo más sutil */}
                  <div className="mt-4 pt-4">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D9B26A] to-transparent mx-auto"></div>
                  </div>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>

      {/* Por Qué Elegirnos Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTransition>
            <div className="text-center mb-12 lg:mb-16">
              {/* H2 - Tamaños optimizados UX/UI */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#011640] font-playfair mb-4 leading-tight">
                Por qué <span className="bg-gradient-to-r from-[#D9B26A] to-[#c19a4d] bg-clip-text text-transparent">elegirnos</span>
              </h2>
              <div className="w-20 h-0.5 bg-[#D9B26A] mx-auto mb-6"></div>
              {/* Párrafo principal - Optimizado */}
              <p className="text-base lg:text-lg text-[#6B7280] font-source-sans max-w-3xl mx-auto leading-relaxed">
                Conocé las razones que nos convierten en tu mejor opción para resolver tus asuntos legales 
                de manera efectiva y confiable.
              </p>
            </div>
          </SectionTransition>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {WHY_CHOOSE_US.map((reason, index) => (
              <SectionTransition key={index} delay={100 + (index * 100)}>
                <div className="group bg-white p-6 shadow-lg border border-gray-200 hover:border-[#D9B26A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
                  {/* Elemento decorativo */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D9B26A]/10 to-transparent"></div>
                  
                  {/* Título - Optimizado UX/UI */}
                  <h4 className="text-[#011640] font-playfair font-bold text-base lg:text-lg leading-tight mb-3 flex-grow relative z-10">
                    {reason.title}
                  </h4>

                  {/* Descripción - Tamaño optimizado */}
                  <p className="text-sm lg:text-base text-[#6B7280] font-source-sans leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Línea decorativa más sutil */}
                  <div className="mt-4 pt-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D9B26A]/50 to-transparent group-hover:via-[#D9B26A] transition-colors duration-300"></div>
                  </div>
                </div>
              </SectionTransition>
            ))}
          </div>

          {/* CTA Section */}
          <SectionTransition delay={800}>
            <div className="mt-16 lg:mt-20 text-center">
              <div className="bg-gradient-to-r from-[#011640] to-[#1e2532] p-8 lg:p-12 text-white relative overflow-hidden max-w-4xl mx-auto">
                {/* Elementos decorativos sutiles */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#D9B26A]/10"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5"></div>
                
                <div className="relative z-10">
                  {/* H3 - Tamaño optimizado UX/UI */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white font-playfair mb-4">
                    ¿Listo para comenzar?
                  </h3>
                  {/* Párrafo - Más conciso */}
                  <p className="text-sm lg:text-base text-white/90 font-source-sans leading-relaxed mb-6 max-w-2xl mx-auto">
                    Contanos tu situación legal y te brindaremos una evaluación inicial personalizada. 
                    Nuestro equipo está listo para ayudarte.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/5492994728756?text=Hola%20quisiera%20hacer%20una%20consulta"
                      className="group inline-flex items-center justify-center px-6 py-3 font-semibold text-[#011640] bg-[#D9B26A] hover:bg-[#c19a4d] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Consultar por WhatsApp
                    </a>
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white border border-white/30 hover:border-[#D9B26A] hover:bg-[#D9B26A] hover:text-[#011640] transition-all duration-300 text-sm"
                    >
                      Enviar consulta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>
        </div>
      </section>
    </>
  );
}