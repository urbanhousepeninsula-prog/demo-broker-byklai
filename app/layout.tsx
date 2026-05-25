import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
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
  title: "Carlos Mendoza · Broker Inmobiliario en Mérida, Yucatán",
  description:
    "12 años ayudando a familias e inversionistas en la zona norte de Mérida. Residencial y lujo en Cholul, Conkal y Country Club. Contacto directo sin intermediarios.",
  openGraph: {
    title: "Carlos Mendoza · Broker Inmobiliario en Mérida",
    description:
      "Encuentra tu propiedad ideal en la zona norte de Mérida. Atención directa y proceso claro de principio a fin.",
    type: "website",
    url: "https://demo.byklai.com",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-91XDGGY5GZ" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-91XDGGY5GZ');
        `}</Script>
      </body>
    </html>
  );
}
