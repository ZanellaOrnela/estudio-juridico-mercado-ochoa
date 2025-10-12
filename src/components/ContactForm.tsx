"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!subject) {
      newErrors.subject = "Selecciona un tipo de consulta";
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    return newErrors;
  };

  const showCustomAlert = (message: string, type: "success" | "error") => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validar formulario
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ariel@estudiomercadoochoa.com.ar", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        showCustomAlert("¡Consulta enviada exitosamente! Te responderemos pronto.", "success");
        form.reset();
      } else {
        showCustomAlert("Hubo un error al enviar la consulta. Por favor, inténtalo de nuevo.", "error");
      }
    } catch {
      showCustomAlert("Hubo un error al enviar la consulta. Por favor, inténtalo de nuevo.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-24 lg:py-28 bg-[#054035]/5 relative overflow-hidden px-6 sm:px-8 md:px-4 creative-section">
      {/* Fondo creativo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 diagonal-pattern opacity-15"></div>
        <div className="absolute inset-0 creative-grid opacity-10"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#BF926B]/5 rounded-full morphing-shape"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#054035]/5 rounded-full morphing-shape"></div>
      </div>
      
      <div className="relative max-w-content container-px mx-auto">
        {/* Alert personalizado */}
        {showAlert && (
          <div className={`fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50 mx-auto p-4 rounded-xl shadow-lg border-2 transition-all duration-500 transform ${
            alertType === "success" 
              ? "bg-[#D9B26A]/10 border-[#D9B26A]/30 text-[#011640]" 
              : "bg-red-50 border-red-200 text-red-800"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                alertType === "success" ? "bg-[#D9B26A]/20" : "bg-red-100"
              }`}>
                {alertType === "success" ? (
                  <svg className="w-5 h-5 text-[#011640]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">{alertMessage}</p>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Header con colores de marca */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#011640] font-playfair mb-4 leading-tight">
            Consulta <span className="bg-gradient-to-r from-[#D9B26A] to-[#c19a4d] bg-clip-text text-transparent">Inicial</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#D9B26A] mx-auto mb-6"></div>
          <p className="text-sm lg:text-base text-[#6B7280] font-source-sans max-w-3xl mx-auto leading-relaxed">
            Contanos brevemente tu consulta y te responderemos en menos de 24 horas con una evaluación inicial.
          </p>
        </div>
        {/* Formulario mejorado */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative z-10">
            {!isClient ? (
              <div className="grid gap-6 relative z-20 animate-pulse">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <div className="w-full sm:w-auto h-12 bg-gray-200 rounded px-6"></div>
                </div>
              </div>
            ) : (
              <form
              id="contact-form"
              className="grid gap-6 relative z-20"
              onSubmit={handleSubmit}
              style={{ pointerEvents: 'auto' }}
            >
              {/* FormSubmit special fields */}
              <input type="hidden" name="_subject" value="Nueva consulta desde el sitio" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_cc" value="ariel@estudiomercadoochoa.com.ar" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-source-sans font-semibold text-[#011640] flex items-center gap-2">
                    <span className="w-2 h-1 bg-[#D9B26A]"></span>
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`w-full h-10 border bg-white px-3 text-[#011640] placeholder-gray-400 focus:outline-none transition-all duration-300 font-source-sans relative z-30 ${
                      errors.name 
                        ? "border-red-300 focus:border-red-500" 
                        : "border-gray-300 focus:border-[#D9B26A]"
                    }`}
                    placeholder="Tu nombre completo"
                    style={{ pointerEvents: 'auto' }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-source-sans mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-source-sans font-semibold text-[#011640] flex items-center gap-2">
                    <span className="w-2 h-1 bg-[#D9B26A]"></span>
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`w-full h-10 border bg-white px-3 text-[#011640] placeholder-gray-400 focus:outline-none transition-all duration-300 font-source-sans relative z-30 ${
                      errors.email 
                        ? "border-red-300 focus:border-red-500" 
                        : "border-gray-300 focus:border-[#D9B26A]"
                    }`}
                    placeholder="tu@email.com"
                    style={{ pointerEvents: 'auto' }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-source-sans mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-source-sans font-semibold text-[#011640] flex items-center gap-2">
                    <span className="w-2 h-1 bg-[#D9B26A]"></span>
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full h-10 border border-gray-300 bg-white px-3 text-[#011640] placeholder-gray-400 focus:border-[#D9B26A] focus:outline-none transition-all duration-300 font-source-sans relative z-30"
                    placeholder="(11) 1234-5678"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-source-sans font-semibold text-[#011640] flex items-center gap-2">
                    <span className="w-2 h-1 bg-[#D9B26A]"></span>
                    Tipo de Consulta
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={`w-full h-10 border bg-white px-3 text-[#011640] focus:outline-none transition-all duration-300 font-source-sans relative z-30 ${
                      errors.subject 
                        ? "border-red-300 focus:border-red-500" 
                        : "border-gray-300 focus:border-[#D9B26A]"
                    }`}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <option value="" className="bg-white text-[#011640]">Selecciona un área</option>
                    <option value="Derecho Civil" className="bg-white text-[#011640]">Derecho Civil</option>
                    <option value="Derecho Comercial" className="bg-white text-[#011640]">Derecho Comercial</option>
                    <option value="Derecho Laboral" className="bg-white text-[#011640]">Derecho Laboral</option>
                    <option value="Derecho de Familia" className="bg-white text-[#011640]">Derecho de Familia</option>
                    <option value="Sucesiones" className="bg-white text-[#011640]">Sucesiones</option>
                    <option value="Otro" className="bg-white text-[#011640]">Otro</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-xs font-source-sans mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-source-sans font-semibold text-[#011640] flex items-center gap-2">
                  <span className="w-2 h-1 bg-[#D9B26A]"></span>
                  Describe tu Consulta
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full border bg-white px-3 py-3 text-[#011640] placeholder-gray-400 focus:outline-none transition-all duration-300 font-source-sans resize-none relative z-30 ${
                    errors.message 
                      ? "border-red-300 focus:border-red-500" 
                      : "border-gray-300 focus:border-[#D9B26A]"
                  }`}
                  placeholder="Describe brevemente tu situación legal. Cuanto más detalle proporciones, mejor podremos ayudarte..."
                  style={{ pointerEvents: 'auto' }}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-source-sans mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-[#D9B26A] hover:bg-[#c19a4d] text-[#011640] font-semibold transition-all duration-300 font-source-sans text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative z-30 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ pointerEvents: 'auto' }}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                </button>
              </div>
            </form>
            )}
          </div>
          
          {/* Información adicional */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#D9B26A]/15 flex items-center justify-center mx-auto">
                <div className="w-4 h-0.5 bg-[#D9B26A]"></div>
              </div>
              <h3 className="text-[#011640] font-semibold font-playfair text-sm">Respuesta Rápida</h3>
              <p className="text-[#6B7280] text-sm font-source-sans">Te contactamos en menos de 24 horas</p>
            </div>
            <div className="space-y-3 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#D9B26A]/15 flex items-center justify-center mx-auto">
                <div className="w-4 h-0.5 bg-[#011640]"></div>
              </div>
              <h3 className="text-[#011640] font-semibold font-playfair text-sm">Atención Personalizada</h3>
              <p className="text-[#6B7280] text-sm font-source-sans">Trato directo con los abogados</p>
            </div>
            <div className="space-y-3 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#D9B26A]/15 flex items-center justify-center mx-auto">
                <div className="w-4 h-0.5 bg-[#D9B26A]"></div>
              </div>
              <h3 className="text-[#011640] font-semibold font-playfair text-sm">Confidencialidad</h3>
              <p className="text-[#6B7280] text-sm font-source-sans">Absoluta reserva profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
