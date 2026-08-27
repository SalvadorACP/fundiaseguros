import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { title: "Fundia Seguros | Muy pronto", description: "Estamos trabajando en una nueva experiencia digital para acompañarte a proteger lo que más importa." };

export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased bg-background`}><body className="min-h-full">{children}</body></html>; }
