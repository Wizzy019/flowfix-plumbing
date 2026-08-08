import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  Notebook,
  PhoneIcon,
  Search,
  Wrench,
} from "lucide-react";
import FadeUp from "../components/animations/FadeUp";
import Container from "../components/common/Container";
import { Desc } from "../components/common/SectionDesc";
import { SectionTitle } from "../components/common/SectionTitle";
import { detialedServices as services } from "../data/service";
import { serviceFaqs as faqs } from "../data/faq";
import { EmergencyCTA } from "../components/home/EmergencyCTA";

const steps = [
  { icon: PhoneIcon, text: "1. Contact Us" },
  { icon: Search, text: "2. Inspect and Diagnose" },
  { icon: Notebook, text: "3. Get Your Quote" },
  { icon: Wrench, text: "4. Get It Done" },
];

const Services = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="bg-background pt-4">
      <FadeUp>
        <section className="mb-8">
          <SectionTitle title="OUR SERVICES" />
          <Container
            vatiant="surface"
            className=""
            children={
              <>
                <Desc text="How We Solve Plumbing Problems" />
                <p className="text-text mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  labore illo suscipit nemo, quis rerum ipsum nisi distinctio
                  excepturi itaque aspernatur, adipisci odit sed. Ut modi illum,
                  rem quas praesentium nostrum quo temporibus fugiat numquam,
                  officiis deleniti voluptates repudiandae nemo quos quod, eos
                  eius excepturi nam vitae cum ex facilis reiciendis?
                  Asperiores, ut exercitationem. A quos iste dolor, molestiae
                  explicabo non modi eum ipsum, ullam sint, at sunt doloremque
                  beatae!
                </p>
              </>
            }
          />
        </section>
      </FadeUp>
      <FadeUp>
        <section className="mb-6">
          <Container
            vatiant="surface"
            className="flex flex-col gap-0"
            children={
              <>
                {services.map((service, index) => (
                  <FadeUp>
                    <div
                      className={`p-4 bg-surface rounded-lg border md:border-0 border-border flex flex-col md:flex-row items-center gap-3 md:gap-8 
                      ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="">
                        <img
                          src={service.image}
                          alt=""
                          className="h-40 md:w-2xl rounded-lg"
                        />
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col gap-2 items-start">
                        <h3 className="font-bold">{service.title}</h3>
                        <p className="text-sm text-text">
                          {service.description}
                        </p>
                        <button className="text-primary font-bold flex gap-4 items-center cursor-pointer">
                          <p>Request This Service </p>
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </>
            }
          />
        </section>
      </FadeUp>
      <FadeUp>
        <section className="mb-6 bg-surface py-4">
          <div className="text-center">
            <Desc text="How We Work" />
          </div>

          <Container
            vatiant="surface"
            className="flex items-center justify-between"
            children={
              <>
                {steps.map((step) => (
                  <div className="flex">
                    <div className="flex flex-col flex-1 items-center gap-4">
                      <div className="border border-border rounded-full p-2">
                        <step.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-xs font-bold">{step.text}</h3>
                    </div>
                  </div>
                ))}
              </>
            }
          />
        </section>
      </FadeUp>
      <FadeUp>
        <section className="bg-surface py-4">
          <div className="text-center">
            <Desc text="Frequenty Asked Questions" />
          </div>
          <Container
            vatiant="surface"
            className=""
            children={
              <div className="flex flex-col gap-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="">
                    <button
                      onClick={() =>
                        setOpenId(openId === faq.id ? null : faq.id)
                      }
                      className="w-full bg-surface border border-border rounded p-4 flex items-center justify-between"
                    >
                      <span className="text-text">{faq.question}</span>
                      <motion.div
                        animate={{
                          rotate: openId === faq.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-10 py4 text-xs text-text-light">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            }
          />
        </section>
      </FadeUp>
      <EmergencyCTA />
    </main>
  );
};

export default Services;
