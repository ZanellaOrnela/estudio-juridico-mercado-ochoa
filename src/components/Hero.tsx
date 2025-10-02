"use client";
import Link from "next/link";
import PageLoadAnimation from "./PageLoadAnimation";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden h-screen flex items-center">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ce05f15cad5347cc8e01120fb017d75e_upscayl_4x_digital-art-4x.png')`
        }}
      />
      
      {/* Filtro negro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">

          <PageLoadAnimation delay={150} animationType="fadeInUp">
            {/* H1 - Tamaños UX/UI optimizados: 28px/36px/48px */}
            <h1 className="font-playfair text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-4 drop-shadow-lg">
              ESTUDIO JURÍDICO{" "}
              <span className="bg-gradient-to-r from-[#D9B166] to-[#fbbf24] bg-clip-text text-transparent">
                MERCADO OCHOA
              </span>{" "}
              ABOGADOS
            </h1>
          </PageLoadAnimation>
          
          <PageLoadAnimation delay={200} animationType="fadeInUp">
            {/* H2 - Tamaños UX/UI: 18px/20px/24px */}
            <h2 className="font-source-sans text-[#D9B166] text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed mb-6 drop-shadow-md">
              Abogados en Neuquén — Soluciones legales claras y efectivas
            </h2>
          </PageLoadAnimation>
          
          <PageLoadAnimation delay={300} animationType="fadeInUp">
            {/* Párrafo principal - Tamaño UX/UI: 16px/18px */}
            <p className="text-white/90 font-source-sans text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-md">
              En Estudio Jurídico Mercado Ochoa Abogados brindamos asesoría integral en Neuquén Capital 
              con un enfoque práctico y humano. Con 5 años de experiencia, atendemos casos de derecho civil, 
              contratos, familia y sucesiones, derecho laboral, ambiental y accidentes de tránsito.
            </p>
          </PageLoadAnimation>
          
          
          
          <PageLoadAnimation delay={500} animationType="fadeInUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5492995294952?text=Hola%20quisiera%20hacer%20una%20consulta"
                className="group inline-flex items-center justify-center px-6 py-3 font-semibold text-[#282E40] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 text-sm bg-gradient-to-r from-[#D9B166] to-[#fbbf24] hover:from-[#fbbf24] hover:to-[#D9B166]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Escribinos por WhatsApp
              </Link>
              <Link
                href="tel:+5492995294952"
                className="group inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:shadow-lg text-sm"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Llamar ahora
              </Link>
              <Link
                href="#contacto"
                className="group inline-flex items-center justify-center px-6 py-3 font-semibold text-white border-2 border-[#D9B166] bg-transparent hover:bg-[#D9B166] hover:text-[#282E40] transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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