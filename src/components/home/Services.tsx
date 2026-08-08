import { ArrowRight, ChevronRightIcon, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { SectionDesc } from "../common/SectionDesc";
import { services } from "../../data/service";
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
  return (
    <FadeUp>
      <section className="relative mb-8 py-4 bg-surface">
        <SectionTitle title="OUR SERVICES" />
        <Container
          vatiant="transparent"
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
