// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "../../public/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  display: "swap",
});

const sora = localFont({
  src: [
    { path: "../../public/fonts/Sora-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Sora-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/Sora-Bold.ttf", weight: "700" },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fundiaseguros.com"),
  
  title: {
    default: "Fundia Seguros | Protege lo que más importa",
    template: "%s | Fundia Seguros",
  },
  
  description: "Asesoría personalizada en seguros de auto, vida, gastos médicos y protección empresarial en Mazatlán, Sinaloa.",
  
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
    description: "Asesoría personalizada en seguros de auto, vida, gastos médicos y protección empresarial en Mazatlán, Sinaloa.",
    images: [
      {
        url: "/images/branding/Fundia_original.png",
        width: 1200,
        height: 630,
        alt: "Fundia Seguros - Protege lo que más importa",
      },
    ],
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
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
