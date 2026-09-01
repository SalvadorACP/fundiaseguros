// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fundiaseguros.com"),
  
  title: {
    default: "Fundia Seguros | Protege lo que más importa",
    template: "%s | Fundia Seguros",
  },
  
  description: "En Fundia Seguros te ayudamos a proteger tu patrimonio con los mejores seguros de vida, auto y gastos médicos.",
  
  keywords: ["seguros", "Fundia Seguros", "seguro de vida", "seguro de auto", "seguro de gastos médicos", "GNP", "Qualitas", "protección", "patrimonio"],
  
  authors: [{ name: "Fundia Seguros" }],
  
  publisher: "Fundia Seguros",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.fundiaseguros.com",
    siteName: "Fundia Seguros",
    title: "Fundia Seguros | Protege lo que más importa",
    description: "En Fundia Seguros te ayudamos a proteger tu patrimonio con los mejores seguros de vida, auto y gastos médicos.",
    images: [
      {
        url: "/images/branding/Fundia_original.png",
        width: 1200,
        height: 630,
        alt: "Fundia Seguros - Protege lo que más importa",
      },
    ],
  },
  verification: {
    google: "TU_CODIGO_DE_VERIFICACION",
  },
  
  alternates: {
    canonical: "https://www.fundiaseguros.com",
  },
  
  category: "Seguros",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}