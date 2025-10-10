"use client";
import Link from "next/link";
import PageLoadAnimation from "./PageLoadAnimation";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/herosection.png')`
        }}
      />
      
      {/* Overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-[#011640]/70"></div>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(217, 178, 106, 0.1) 25%, rgba(217, 178, 106, 0.1) 50%, transparent 50%, transparent 75%, rgba(217, 178, 106, 0.1) 75%)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Círculos flotantes */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#D9B26A]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D9B26A]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 z-10 w-full">
        <div className="text-center lg:text-right lg:ml-auto lg:max-w-2xl">
            <PageLoadAnimation delay={150} animationType="fadeInUp">
              {/* Título principal */}
              <h1 className="font-playfair text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Estudio Jurídico{" "}
                <span className="text-[#D9B26A] block lg:inline">Mercado Ochoa</span>{" "}
                Abogados
              </h1>
            </PageLoadAnimation>
            
            <PageLoadAnimation delay={200} animationType="fadeInUp">
              {/* Subtítulo */}
              <h2 className="font-source-sans text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8">
                Abogados en Neuquén y Río Negro — Soluciones legales claras y efectivas
              </h2>
            </PageLoadAnimation>
            
            <PageLoadAnimation delay={250} animationType="fadeInUp">
              {/* Descripción */}
              <p className="text-white/80 font-source-sans text-sm lg:text-base leading-relaxed mb-10 max-w-3xl mx-auto lg:mx-0">
                En Estudio Jurídico Mercado Ochoa Abogados brindamos asesoría integral en Neuquén Capital y Río Negro 
                con un enfoque práctico y humano. Con 5 años de experiencia, atendemos casos de derecho civil, 
                contratos en Neuquén, familia y sucesiones en Neuquén, derecho laboral, derecho ambiental y accidentes de tránsito.
              </p>
            </PageLoadAnimation>
            
            <PageLoadAnimation delay={300} animationType="fadeInUp">
              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link
                  href="https://wa.me/5492994728756?text=Hola%20quisiera%20hacer%20una%20consulta"
                  className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-[#011640] bg-[#D9B26A] hover:bg-[#c19a4d] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-sm rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Escribinos por WhatsApp
                </Link>
                <Link
                  href="tel:+5492994728756"
                  className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#011640] transition-all duration-300 text-sm rounded-lg"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Llamar ahora
                </Link>
                <Link
                  href="#contacto"
                  className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#011640] transition-all duration-300 text-sm rounded-lg"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar consulta
                </Link>
              </div>
            </PageLoadAnimation>
        </div>
      </div>
    </section>
  );
}