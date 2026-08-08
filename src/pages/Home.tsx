import FloatingContactButton from "../components/common/FloatingContactButton";
import { EmergencyCTA } from "../components/home/EmergencyCTA";
import { FAQ } from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import { ServiceAreas } from "../components/home/ServiceAreas";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
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
