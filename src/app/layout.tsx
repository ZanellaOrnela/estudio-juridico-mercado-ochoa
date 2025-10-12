import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ESTUDIO JURÍDICO MERCADO OCHOA ABOGADOS | Abogados en Neuquén",
    template: "%s | ESTUDIO JURÍDICO MERCADO OCHOA ABOGADOS",
  },
  description:
    "Abogados en Neuquén Capital con 5 años de experiencia. Soluciones legales claras y efectivas en derecho civil, familia, laboral y más.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png",
    shortcut: "/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png",
    apple: "/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png",
  },
  openGraph: {
    title: "ESTUDIO JURÍDICO MERCADO OCHOA ABOGADOS | Abogados en Neuquén",
    description:
      "Abogados en Neuquén Capital con 5 años de experiencia. Soluciones legales claras y efectivas en derecho civil, familia, laboral y más.",
    url: "https://example.com",
    siteName: "ESTUDIO JURÍDICO MERCADO OCHOA ABOGADOS",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESTUDIO JURÍDICO MERCADO OCHOA ABOGADOS | Abogados en Neuquén",
    description:
      "Abogados en Neuquén Capital con 5 años de experiencia. Soluciones legales claras y efectivas en derecho civil, familia, laboral y más.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Jurídico Mercado Ochoa Abogados",
    "description": "Abogados en Neuquén Capital y Río Negro con 5 años de experiencia. Soluciones legales claras y efectivas en derecho civil, familia, laboral, ambiental y accidentes de tránsito.",
    "url": "https://example.com",
    "logo": "https://example.com/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png",
    "image": "https://example.com/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png",
    "telephone": "+5492994728756",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Córdoba 466",
      "addressLocality": "Neuquén Capital",
      "addressRegion": "Neuquén",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-38.9516",
      "longitude": "-68.0591"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": [
      {
        "@type": "City",
        "name": "Neuquén Capital"
      },
      {
        "@type": "State",
        "name": "Río Negro"
      }
    ],
    "serviceType": [
      "Derecho Civil",
      "Contratos",
      "Familia y Sucesiones",
      "Derecho Laboral",
      "Derecho Ambiental",
      "Accidentes de Tránsito"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Legales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Derecho Civil y Contratos",
            "description": "Asesoría legal en derecho civil, contratos y obligaciones"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Familia y Sucesiones",
            "description": "Divorcios, sucesiones, alimentos y derecho de familia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Derecho Laboral",
            "description": "Despidos, accidentes laborales y conflictos laborales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Derecho Ambiental",
            "description": "Asesoría en normativa ambiental y conflictos ambientales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accidentes de Tránsito",
            "description": "Reclamos por accidentes de tránsito y seguros"
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/mercadoochoaabogados",
      "https://www.linkedin.com/in/ariel-a-mercado-ochoa-11b05a2a0/"
    ]
  };

  return (
    <html lang="es">
      <head>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://example.com" />
        
        {/* Force favicon to use site logo, overriding default favicon.ico */}
        <link rel="icon" href="/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png?v=4" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png?v=4" />
        <link rel="apple-touch-icon" href="/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png?v=4" />
        
        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#011640" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} antialiased transition-all duration-300 bg-transparent`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

