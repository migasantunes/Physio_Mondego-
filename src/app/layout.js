import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Physio Mondego — Fisioterapia e Osteopatia em Coimbra",
  description:
    "Unidade privada de Fisioterapia e Osteopatia em Coimbra. Especialistas em reabilitação, alívio da dor e desempenho físico, com acompanhamento personalizado.",
  keywords: [
    "fisioterapia coimbra",
    "osteopatia coimbra",
    "physio mondego",
    "reabilitação",
    "dor muscular",
    "quiropraxia",
    "massagem terapêutica",
  ],
  openGraph: {
    title: "Physio Mondego — Fisioterapia e Osteopatia em Coimbra",
    description:
      "Unidade privada especializada em reabilitação, alívio da dor e desempenho físico.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
