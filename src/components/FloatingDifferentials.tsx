import SectionTransition from "./SectionTransition";

const DIFFERENTIALS = [
  {
    title: "Respuesta ágil y trato personalizado",
    description: "Atendemos tu consulta en menos de 24 horas con un enfoque directo y cercano.",
    direction: "left"
  },
  {
    title: "Estrategia legal a medida y asesoría integral 360°",
    description: "Diseñamos soluciones específicas para cada caso con visión integral del problema.",
    direction: "right"
  },
  {
    title: "Experiencia en familia, sucesiones, laboral, civil, ambiental y tránsito",
    description: "Cobertura completa en las principales áreas del derecho con especialización probada.",
    direction: "left"
  }
];

export default function FloatingDifferentials() {
  return (
    <section className="absolute top-[calc(100vh-3rem)] left-0 right-0 z-40 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {DIFFERENTIALS.map((differential, index) => (
            <SectionTransition key={index} delay={200 + (index * 150)}>
              <div 
                className="group bg-white/95 backdrop-blur-md shadow-2xl border border-gray-100 hover:border-[#D9B166] hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col relative overflow-hidden pointer-events-auto"
              >
                {/* Elemento decorativo superior */}
                <div className={`absolute top-0 w-full h-1 bg-gradient-to-r ${
                  differential.direction === 'left' 
                    ? 'from-[#D9B166] to-transparent' 
                    : 'from-transparent to-[#D9B166]'
                }`}></div>
                
                {/* Contenido */}
                <div className="p-8">

                  {/* Título */}
                  <h3 className={`text-[#282E40] font-playfair font-bold text-lg lg:text-xl leading-tight mb-4 ${
                    differential.direction === 'left' ? 'text-left' : 'text-right'
                  }`}>
                    {differential.title}
                  </h3>

                  {/* Descripción */}
                  <p className={`text-[#6B7280] font-source-sans text-sm lg:text-base leading-relaxed ${
                    differential.direction === 'left' ? 'text-left' : 'text-right'
                  }`}>
                    {differential.description}
                  </p>

                  {/* Línea decorativa */}
                  <div className="mt-6">
                    <div className={`h-px bg-gradient-to-r ${
                      differential.direction === 'left' 
                        ? 'from-[#D9B166] to-transparent' 
                        : 'from-transparent to-[#D9B166]'
                    }`}></div>
                  </div>
                </div>

                {/* Elemento decorativo de esquina */}
                <div className={`absolute ${
                  differential.direction === 'left' 
                    ? 'bottom-0 right-0' 
                    : 'bottom-0 left-0'
                } w-16 h-16 bg-gradient-to-${
                  differential.direction === 'left' ? 'tl' : 'tr'
                } from-[#D9B166]/10 to-transparent`}></div>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
