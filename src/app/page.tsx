import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Services } from "@/components/sections/services";
import { WhyFundia } from "@/components/sections/why-fundia";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyFundia />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
