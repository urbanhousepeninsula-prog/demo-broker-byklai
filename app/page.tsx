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

export default function Home() {
  return (
    <main>
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
