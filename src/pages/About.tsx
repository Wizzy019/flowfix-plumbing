import { CircleCheck, type LucideIcon } from "lucide-react";
import Hero from "../components/about/Hero";
import Container from "../components/common/Container";
import { SectionTitle } from "../components/common/SectionTitle";
import FadeUp from "../components/animations/FadeUp";
import { trustFeatures, values } from "../data/about";
import OurBus from "../assets/images/bus.jpg";
import TrustImage from "../assets/images/fixing-man.jpg";
import { plumbers } from "../data/about";
import { LiaLinkedin } from "react-icons/lia";
import { EmergencyCTA } from "../components/home/EmergencyCTA";
import { Desc } from "../components/common/SectionDesc";
import { useSEO } from "../hooks/usePageTitle";

const variants = {
  primary: "text-primary",
  secondary: "text-orange-400",
};

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: keyof typeof variants;
};

type WhyChooseUsCardProps = {
  title: string;
  description: string;
};

function ValusCard({
  icon: Icon,
  title,
  description,
  variant,
}: ValueCardProps) {
  return (
    <div className="w-full bg-surface-2 rounded-lg p-3 text-primary flex flex-1 md:flex-col justify-between gap-4 cursor-pointer">
      <Icon size={70} className={`${variant ? variants[variant] : ""}`} />
      <div className="ml-3 text-text">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-text-light">{description}</p>
      </div>
    </div>
  );
}

function WhyChooseUsCard({ title, description }: WhyChooseUsCardProps) {
  return (
    <div className="w-full bg-surface-2 rounded-lg text-primary flex justify-evenly cursor-pointer">
      <CircleCheck size={70} className="" />
      <div className="ml-3 text-text">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-text-light">{description}</p>
      </div>
    </div>
  );
}

const About = () => {
  useSEO({
    title: "About Flowfix Plumbing | Trusted Ontario Plumbers",
    description:
      "Learn about Flowfix Plumbing and our commitment to providing reliable, professional plumbing services to homeowners across Ontario.",
    image: "",
    url: "",
  });

  return (
    <main className="bg-background min-h-screen z-10">
      <Hero />
      <FadeUp>
        <section className="mb-8 py-4 bg-surface flex flex-1 flex-col md:flex-row">
          <div className="md:w-1/2 md:ml-4 md:mt-4">
            <SectionTitle title="OUR STORY" />
            <Container
              vatiant="transparent"
              className="flex flex-col md:flex-row flex-1 gap-4"
              children={
                <>
                  <div className="flex flex-col gap-3">
                    <Desc text="Built On Integrity. Driven By Purpose" />
                    <p className="text-text ">
                      Founded in 2015, Flowfix Plumbing was built with a unique
                      misson,
                      <br /> to provide reliable plumbing service with honesty,
                      transpenrency
                      <br /> and top quality workmanship.
                      <br />
                      From small repairs to complex instalations, we trust every
                      project like
                      <br /> it's our own home.
                    </p>
                  </div>
                </>
              }
            />
          </div>
          <div className="mx-auto hidden md:block">
            <img
              src={OurBus}
              alt="Flowfix Plumbing service van with company logo"
              className="h-70 w-xl rounded-xl"
            />
          </div>
        </section>
      </FadeUp>
      <FadeUp>
        <section className="mb-8">
          <SectionTitle title="OUR VALUES" />
          <Container
            vatiant="transparent"
            className=""
            children={
              <>
                <Desc text="Standards We Live By" />
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  {values.map((value) => (
                    <div>
                      <ValusCard
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                        variant={value.variant}
                      />
                    </div>
                  ))}
                </div>
              </>
            }
          />
        </section>
      </FadeUp>
      <FadeUp>
        <section className="mb-8 py-4 bg-surface flex flex-1 flex-col md:flex-row">
          <div>
            <SectionTitle title="WHY CHOOSE FLOWFIX" />
            <Container
              vatiant="surface"
              className=""
              children={
                <>
                  <Desc text="Why Homeowners Choose Us" />
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {trustFeatures.map((feature) => (
                      <div>
                        <WhyChooseUsCard
                          title={feature.description}
                          description={feature.description}
                        />
                      </div>
                    ))}
                  </div>
                </>
              }
            />
          </div>
          <div className="mx-auto hidden md:block px-4">
            <img
              src={TrustImage}
              alt="A plumber fixing pipes"
              className="h-100 w-xl rounded-lg"
            />
          </div>
        </section>
      </FadeUp>
      <FadeUp>
        <section className="">
          <SectionTitle title="MEET OUR TEEM" />
          <Container
            vatiant="transparent"
            className=""
            children={
              <>
                <Desc text="The People Behind Flowfix" />
                <div className="my-6 w-full flex flex-1 flex-col md:flex-row md:justify-between gap-4">
                  {plumbers.map((plumber) => (
                    <FadeUp>
                      <div className="bg-surface-2 mx-auto rounded-lg flex gap-2 items-center flex-wrap">
                        <div className="w-full">
                          <img
                            src={plumber.image}
                            alt={`${plumber.name} A Flowfix technician`}
                            className="h-52 w-full rounded-lg"
                          />
                        </div>
                        <div className="w-full mb-2 flex flex-col items-center">
                          <h2 className="font-bold text-xl">{plumber.name}</h2>
                          <p>{plumber.role}</p>
                          <LiaLinkedin size={30} className="text-primary" />
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </>
            }
          />
        </section>
      </FadeUp>
      <EmergencyCTA />
    </main>
  );
};

export default About;
