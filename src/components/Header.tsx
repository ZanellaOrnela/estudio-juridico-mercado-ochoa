"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center group">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 overflow-hidden shadow-lg ${
              scrolled 
                ? 'bg-white' 
                : 'bg-white'
            }`}>
              <img 
                src="/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png" 
                alt="Estudio Jurídico Mercado Ochoa Abogados Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Texto del logo - solo en desktop */}
            <div className="hidden sm:block">
              <div className="font-playfair font-bold text-base lg:text-lg leading-tight drop-shadow-lg text-white transition-colors duration-300">
                Mercado Ochoa
              </div>
              <div className="text-[#D9B26A] font-source-sans text-sm lg:text-base font-medium drop-shadow-md">
                Abogados
              </div>
            </div>
          </div>
        </Link>
        
        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center space-x-10 xl:space-x-12">
          <Link 
            href="#inicio" 
            className="text-white font-source-sans font-medium text-base hover:text-[#D9B26A] transition-colors duration-300 relative group py-3 drop-shadow-lg"
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9B26A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#nosotros" 
            className="text-white font-source-sans font-medium text-base hover:text-[#D9B26A] transition-colors duration-300 relative group py-3 drop-shadow-lg"
          >
            Quiénes Somos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9B26A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#servicios" 
            className="text-white font-source-sans font-medium text-base hover:text-[#D9B26A] transition-colors duration-300 relative group py-3 drop-shadow-lg"
          >
            Áreas de Práctica
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9B26A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#contacto" 
            className="text-white font-source-sans font-medium text-base hover:text-[#D9B26A] transition-colors duration-300 relative group py-3 drop-shadow-lg"
          >
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9B26A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-[#011640] hover:bg-[#1e3a8a] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
          >
            Enviar Consulta
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 hover:bg-white/20 transition-all duration-300 drop-shadow-lg text-white"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/80 backdrop-blur-md`}>
        <div className="px-6 py-6 space-y-4">
          <Link
            href="#inicio"
            className="block py-3 px-4 text-white font-source-sans font-medium hover:text-[#D9B26A] hover:bg-white/10 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="#nosotros"
            className="block py-3 px-4 text-white font-source-sans font-medium hover:text-[#D9B26A] hover:bg-white/10 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Quiénes Somos
          </Link>
          <Link
            href="#servicios"
            className="block py-3 px-4 text-white font-source-sans font-medium hover:text-[#D9B26A] hover:bg-white/10 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Áreas de Práctica
          </Link>
          <Link
            href="#contacto"
            className="block py-3 px-4 text-white font-source-sans font-medium hover:text-[#D9B26A] hover:bg-white/10 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
          <div className="pt-4 border-t border-white/20">
            <Link
              href="#contacto"
              className="block w-full text-center py-4 px-6 font-semibold text-white bg-[#011640] hover:bg-[#1e3a8a] transition-all duration-300 shadow-lg"
              onClick={() => setOpen(false)}
            >
              Enviar Consulta
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}