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
  return (
    <html lang="es">
      <head>
        {/* Force favicon to use site logo, overriding default favicon.ico */}
        <link rel="icon" href="/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png?v=4" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png?v=4" />
        <link rel="apple-touch-icon" href="/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png?v=4" />
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

