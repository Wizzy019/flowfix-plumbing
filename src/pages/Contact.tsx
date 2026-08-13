import type { IconType } from "react-icons";
import FadeUp from "../components/animations/FadeUp";
import Container from "../components/common/Container";
import { Desc } from "../components/common/SectionDesc";
import { SectionTitle } from "../components/common/SectionTitle";
import { contactItems } from "../data/contactItems";
import { ContactRound } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import { serviceAreas } from "../data/serviceAreas";

type ContactInfoItemProps = {
  icon: IconType;
  title: string;
  children: React.ReactNode;
};

function ContactInfoItem({
  icon: Icon,
  title,
  children,
}: ContactInfoItemProps) {
  return (
    <div className="flex gap-4 py-2 border-b border-border">
      <div className="h-fit bg-blue-100 mt-1 p-1">
        <Icon className="text-primary size-5" />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="font-semibold text-lg">{title}</h3>

        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}

const BoldHeading = ({ heading }: { heading: string }) => {
  return <h3 className="w-fit text-text font-black">{heading}</h3>;
};
const ContactInfoCard = () => {
  return (
    <Container
      vatiant="surface"
      className="max-w-80 rounded-lg border border-border flex flex-col gap-6"
      children={
        <>
          <div className="flex gap-4 mb-2">
            <ContactRound className="text-primary" />
            <BoldHeading heading="Contact Information" />
          </div>
          {contactItems.map((item) => (
            <ContactInfoItem
              key={item.title}
              icon={item.icon}
              title={item.title}
            >
              {item.content}
            </ContactInfoItem>
          ))}
        </>
      }
    />
  );
};

const Contact = () => {
  const mobileEndIds = [3, 6, 9, 12];
  const desktopEndIds = [6, 12];
  return (
    <section className="bg-background py-4">
      <FadeUp>
        <div className="text-center flex flex-col items-center">
          <SectionTitle title="GET IN TOUCH" />
          <Container
            vatiant="transparent"
            className="flex flex-col items-center gap-2"
            children={
              <>
                <Desc text="We Are Here To Help" />
                <p className="w-3/4 text-text">
                  Have a question, need a quote, or dealing with a plumbing
                  issue? Send us a message and our team will get back to you as
                  soon as posible
                </p>
              </>
            }
          />
        </div>
      </FadeUp>
      <FadeUp>
        <Container
          vatiant="transparent"
          className="flex flex-col mb-4 md:flex-row items-center md:justify-center gap-8"
          children={
            <>
              <ContactInfoCard />
              <ContactForm />
            </>
          }
        />
      </FadeUp>
      <FadeUp>
        <Container
          vatiant="surface"
          className=""
          children={
            <>
              <div className="text-center flex flex-col items-center gap-3">
                <SectionTitle title="SERVICE AREAS" />
                <Desc text="Areas WE Serve In Ontario" />
                <div className="mt-3 grid grid-cols-3 md:grid-cols-6">
                  {serviceAreas.map((area) => {
                    const hideOnMobile = mobileEndIds.includes(area.id);
                    const hideOnDesktop = desktopEndIds.includes(area.id);
                    return (
                      <div
                        key={area.id}
                        className="flex items-center gap-4 justify-center"
                      >
                        <h4 className="text-text font-bold">{area.city}</h4>
                        <span
                          className={`size-2 rounded-full bg-primary
                                ${hideOnMobile ? "max-md:hidden" : ""}
                                 ${hideOnDesktop ? "md:hidden" : ""}
                              }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          }
        />
      </FadeUp>
    </section>
  );
};

export default Contact;
