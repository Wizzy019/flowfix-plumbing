import FloatingContactButton from "../components/common/FloatingContactButton";
import { EmergencyCTA } from "../components/home/EmergencyCTA";
import { FAQ } from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import { ServiceAreas } from "../components/home/ServiceAreas";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import { useSEO } from "../hooks/usePageTitle";

const Home = () => {
  useSEO({
    title: "Reliable Plumbing Services in Ontario | Flowfix Plumbing",
    description:
      "Need a trusted plumber in Ontario? Flowfix Plumbing provides reliable plumbing repairs, installations, and emergency plumbing services.",
    image: "",
    url: "",
  });

  return (
    <main className="bg-background min-h-screen z-10">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FloatingContactButton />
      <ServiceAreas />
      <EmergencyCTA />
    </main>
  );
};

export default Home;
