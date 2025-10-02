import Hero from "@/components/Hero";
import FloatingDifferentials from "@/components/FloatingDifferentials";
import TrajectorySection from "@/components/TrajectorySection";
import PracticeAreas from "@/components/PracticeAreas";
import HowWeWork from "@/components/HowWeWork";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import LocationContact from "@/components/LocationContact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Hero />
      <FloatingDifferentials />
      <Team />
      <PracticeAreas />
      <HowWeWork />
      <LocationContact />
      <ContactForm />
      <FloatingWhatsApp />
    </main>
  );
}
