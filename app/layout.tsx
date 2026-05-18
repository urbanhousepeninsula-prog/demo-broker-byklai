import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/tokens.css";
import StickyWhatsapp from "@/components/ui/sticky-whatsapp";

const playfair = Playfair_Display({
  variable: "--font-heading-loaded",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body-loaded",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Mendoza · Broker Inmobiliario en Mérida",
  description:
    "12 años ayudando a familias e inversionistas en la zona norte de Mérida. Residencial y lujo en Cholul, Conkal y Country Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <StickyWhatsapp />
      </body>
    </html>
  );
}
