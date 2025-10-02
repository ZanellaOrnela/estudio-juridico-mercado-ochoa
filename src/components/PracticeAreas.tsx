import SectionTransition from "./SectionTransition";
import Link from "next/link";

const PRACTICE_AREAS = [
  {
    title: "Civil y Contratos en Neuquén",
    description: "Asesoramos en redacción y revisión de contratos, incumplimientos y responsabilidad civil. Actuamos en mediaciones y juicios, protegiendo tus intereses desde el primer borrador hasta la firma.",
    features: ["Contratos comerciales", "Responsabilidad civil", "Mediaciones"]
  },
  {
    title: "Familia y Sucesiones en Neuquén",
    description: "Atendemos divorcios, cuota alimentaria, régimen de comunicación, uniones convivenciales, compensación económica, filiación y tramitación integral de sucesiones.",
    features: ["Divorcios", "Sucesiones", "Régimen de visitas"]
  },
  {
    title: "Abogado Laboral en Neuquén",
    description: "Defensa de trabajadores y asesoramiento a empresas: despidos, diferencias salariales, registración deficiente, accidentes y enfermedades laborales (ART) y acuerdos.",
    features: ["Despidos", "ART", "Diferencias salariales"]
  },
  {
    title: "Derecho Ambiental en Neuquén",
    description: "Prevención de daños, reclamos por afectación ambiental y cumplimiento normativo para particulares y pymes. Ayudamos a gestionar riesgos y políticas internas.",
    features: ["Impacto ambiental", "Normativas", "Gestión de riesgos"]
  },
  {
    title: "Accidentes de Tránsito en Neuquén",
    description: "Gestión integral de reclamos a aseguradoras, tasación de lesiones y daños materiales, acuerdos y juicios. Priorizamos soluciones ágiles para que recibas lo que corresponde.",
    features: ["Reclamos a seguros", "Lesiones", "Daños materiales"]
  },
  {
    title: "Asesoría Integral 360°",
    description: "Diagnóstico legal completo para personas y negocios: evaluación de riesgos, diseño de contratos, cumplimiento regulatorio y prevención de conflictos.",
    features: ["Diagnóstico legal", "Prevención", "Consultoría integral"]
  }
];

export default function PracticeAreas() {
  return (
    <section id="servicios" className="bg-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Elementos creativos de fondo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            background: 'radial-gradient(circle at 25% 25%, #D9B166 0%, transparent 50%), radial-gradient(circle at 75% 75%, #282E40 0%, transparent 50%)',
          }}></div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#D9B166]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-[#282E40]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTransition>
          <div className="text-center mb-12 lg:mb-16">
            {/* H2 - Tamaños optimizados UX/UI */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#282E40] font-playfair mb-4 leading-tight">
              Áreas de <span className="bg-gradient-to-r from-[#D9B166] to-[#c19a4d] bg-clip-text text-transparent">práctica</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#D9B166] mx-auto mb-6"></div>
            {/* Párrafo principal - Optimizado */}
            <p className="text-base lg:text-lg text-[#6B7280] font-source-sans max-w-3xl mx-auto leading-relaxed">
              Brindamos soluciones legales especializadas en las principales áreas del derecho 
              con un enfoque práctico y humano.
            </p>
          </div>
        </SectionTransition>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PRACTICE_AREAS.map((area, index) => (
            <SectionTransition key={area.title} delay={100 + (index * 100)}>
              <div className="group bg-white p-6 shadow-lg border border-gray-200 hover:border-[#D9B166] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#D9B166]/10 to-transparent"></div>
                

                {/* Título - Optimizado UX/UI */}
                <h3 className="font-bold text-base lg:text-lg font-playfair text-[#282E40] mb-3 leading-tight group-hover:text-[#D9B166] transition-colors duration-300 relative z-10">
                  {area.title}
                </h3>

                {/* Descripción - Tamaño optimizado */}
                <p className="text-sm lg:text-base text-[#6B7280] font-source-sans leading-relaxed mb-4 flex-grow">
                  {area.description}
                </p>

                {/* Features list - Más compacto */}
                <div className="space-y-1.5 mb-4">
                  {area.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D9B166] flex-shrink-0"></div>
                      <span className="text-xs lg:text-sm text-[#4B5563] font-source-sans">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Línea decorativa - Más sutil */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D9B166]/50 to-transparent group-hover:via-[#D9B166] transition-colors duration-300"></div>
              </div>
            </SectionTransition>
          ))}
        </div>

        {/* CTA Section optimizada */}
        <SectionTransition delay={900}>
          <div className="mt-16 lg:mt-20">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 border border-gray-200 shadow-lg relative overflow-hidden max-w-4xl mx-auto">
              {/* Elementos decorativos sutiles */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D9B166]/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#282E40]/5 to-transparent"></div>
              
              <div className="relative z-10 text-center">
                {/* H3 - Tamaño optimizado UX/UI */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#282E40] font-playfair mb-4">
                  ¿Tu caso no figura en la lista?
                </h3>
                {/* Párrafo - Más conciso */}
                <p className="text-sm lg:text-base text-[#6B7280] font-source-sans leading-relaxed mb-6 max-w-2xl mx-auto">
                  No te preocupes. Contanos tu situación y evaluaremos la viabilidad junto con los próximos pasos, 
                  todo explicado de manera clara y sin tecnicismos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://wa.me/5492995294952?text=Hola%20quisiera%20hacer%20una%20consulta"
                    className="group inline-flex items-center justify-center px-6 py-3 font-semibold text-[#282E40] bg-[#D9B166] hover:bg-[#c19a4d] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Consultar por WhatsApp
                  </Link>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#282E40] border border-gray-300 bg-white hover:border-[#D9B166] hover:bg-[#D9B166] hover:text-white transition-all duration-300 hover:shadow-lg text-sm"
                  >
                    Enviar consulta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}