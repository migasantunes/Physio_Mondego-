import { Outfit } from "next/font/google"; // Using a modern, clean geometric font to reduce 'wordiness' and increase readability
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
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
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
