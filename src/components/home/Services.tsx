import {
  ArrowRight,
  ChevronRightIcon,
  Droplet,
  Gauge,
  Heater,
  Search,
  Toilet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { SectionDesc } from "../common/SectionDesc";
import FadeUp from "../animations/FadeUp";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-surface-2 rounded-lg p-3 text-primary flex flex-1 justify-between gap-4 cursor-pointer">
      <Icon size={70} className="" />
      <div className="ml-3 text-text">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-text-light">{description}</p>
        <a href="#">
          <div className="hidden mt-6 font-bold text-sm text-primary cursor-pointer md:flex items-center gap-2">
            <span>Learn More</span>
            <ArrowRight size={15} />
          </div>
        </a>
      </div>
      <ChevronRightIcon size={50} className="md:hidden" />
    </div>
  );
}

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Plumbing",
      description: "Fixing leaks, faucets, fixtures, pipes and more.",
    },
    {
      icon: Droplet,
      title: "Drain Cleaning",
      description: "Clogged drain? We'll clear it fast and keep it flowing.",
    },
    {
      icon: Heater,
      title: "Water Heater Services",
      description: "Repair, replacement and installation for all models.",
    },
    {
      icon: Toilet,
      title: "Toilet Repair & Installation",
      description: "From running toilets to new installations, we do it all.",
    },
    {
      icon: Search,
      title: "Leak Detection",
      description: "Advanced tools to find and fix leaks fast.",
    },
    {
      icon: Gauge,
      title: "Sump Pump Services",
      description: "Installation, repair and maintenance for sump pumps.",
    },
  ];

  return (
    <FadeUp>
      <section className="relative mb-8">
        <SectionTitle title="OUR SERVICES" />
        <Container
          vatiant="surface"
          className="flex flex-col md:flex-row"
          children={
            <>
              <div className="md:min-w-1/3 mb-3">
                <SectionDesc title1="How We Can" title2="Help You" />
                <span className="hidden md:block my-2 py-4 text-sm text-text-light">
                  From minor leaks to major repairs we've got you covered with a
                  professional plumbing service
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {services.map((service) => {
                  return (
                    <motion.div
                      whileHover={{ y: 0, scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      key={service.title}
                    >
                      <ServiceCard
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </>
          }
        />
      </section>
    </FadeUp>
  );
};

export default Services;
