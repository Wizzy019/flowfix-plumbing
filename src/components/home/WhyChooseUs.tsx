import { type LucideIcon } from "lucide-react";
import Container from "../common/Container";
import { SectionDesc } from "../common/SectionDesc";
import { SectionTitle } from "../common/SectionTitle";
import { whyarray } from "../../data/why";
import FadeUp from "../animations/FadeUp";

type WhyChooseProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function WhyChoose({ icon: Icon, title, description }: WhyChooseProps) {
  return (
    <div className="rounded-lg mb-4 md:my-2 px-3 text-primary flex md:flex-col flex-1 items-center gap-3 ">
      <Icon size={70} className="" />
      <div className="text-text md:text-center">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-text-light">{description}</p>
      </div>
    </div>
  );
}

const WhyChooseUs = () => {
  return (
    <FadeUp>
      <section className="relative mb-8">
        <SectionTitle title="WHY CHOOSE US" />
        <Container
          vatiant="transparent"
          className="flex flex-col md:flex-row"
          children={
            <>
              <div className="md:min-w-1/3">
                <SectionDesc title1="Your Trusted Plumbing Experts" />
                <span className="hidden md:block mt-2 py-4 text-sm text-text-light">
                  We've committed to provide exceptional service, quality
                  workmanship and honest pricing on every job
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-1.5">
                {whyarray.map((why) => {
                  return (
                    <WhyChoose
                      key={why.title}
                      icon={why.icon}
                      title={why.title}
                      description={why.description}
                    />
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

export default WhyChooseUs;
