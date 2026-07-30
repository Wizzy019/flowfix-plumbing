import FloatingContactButton from "../components/common/FloatingContactButton";
import { EmergencyCTA } from "../components/home/EmergencyCTA";
import { FAQ } from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import { ServiceAreas } from "../components/home/ServiceAreas";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div className="bg-background min-h-screen z-10">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FloatingContactButton />
      <ServiceAreas />
      <EmergencyCTA />
      <Footer />
    </div>
  );
};

export default Home;
