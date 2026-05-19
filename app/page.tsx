import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Properties from "@/components/sections/properties";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import Process from "@/components/sections/process";
import AiFeature from "@/components/sections/ai-feature";
import Faq from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Mendoza",
  jobTitle: "Broker Inmobiliario",
  description:
    "Broker inmobiliario con 12 años de experiencia en la zona norte de Mérida, Yucatán. Especialista en residencial y lujo en Cholul, Conkal y Country Club.",
  url: "https://demo.byklai.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mérida",
    addressRegion: "Yucatán",
    addressCountry: "MX",
  },
  areaServed: ["Country Club Mérida", "Cholul", "Conkal", "Norte de Mérida"],
  knowsAbout: [
    "Bienes raíces residenciales",
    "Propiedades de lujo en Mérida",
    "Compraventa inmobiliaria en Yucatán",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Carlos Mendoza Bienes Raíces",
    url: "https://demo.byklai.com",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Hero />
      <About />
      <Properties />
      <Benefits />
      <Testimonials />
      <Process />
      <AiFeature />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
