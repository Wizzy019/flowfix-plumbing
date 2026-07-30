import { PhoneIcon } from "lucide-react";
import { Button } from "../common/Button";
import Container from "../common/Container";
import { Clock, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import BackgroundImage from "../../assets/images/trust-bg.jpg";
import MobileEmergencyCard from "./MobileEmergencyCard";
import DesktopBenefitsCard from "./DestopBenefitCards";

type TrustItemsProps = {
  icon: LucideIcon;
  text: string;
};

const TrustItems = ({ icon: Icon, text }: TrustItemsProps) => {
  return (
    <div className="flex items-center md:text-xs gap-1">
      <Icon className="text-primary" />
      <p className="font-black">{text}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative mb-22 md:mb-32">
      <div className={`min-h-[80vh] w-full grid lg:grid-cols-2 mb-10 relative`}>
        <Container
          vatiant="transparent"
          className="md:mx-8 my-4"
          children={
            <>
              <div className="font-bold text-text">
                <h1 className="text-3xl md:text-5xl mb-2">
                  Trusted Plumbing Services in Ontario
                </h1>
                <h2 className="text-3xl md:text-4xl text-primary">
                  Whenever You Need Us
                </h2>
                <p className="text-sx md:text-xl font-light mt-4">
                  We Provide fast and reliable plumbing solution for your home
                  or businesses. Available 24/7 hours for emergency service
                </p>
              </div>
              <div className="font-bold flex flex-col md:flex-row md:gap-4 mb-10">
                <Button
                  className="w-full flex bg-primary text-white py-4"
                  icon={PhoneIcon}
                  text="Call Now"
                />
                <Button
                  className="w-full bg-transparent py-4 text-primary"
                  text="Get Free Estimate"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-3 z-20">
                <TrustItems icon={ShieldCheck} text="Lisenced & Insured" />
                <TrustItems icon={Clock} text="24/7 Hours Emergency Service" />
                <TrustItems icon={Zap} text="Fast & Reliable" />
              </div>
            </>
          }
        />
        <div
          className="relative h-[60vh] md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage}) ` }}
        >
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-white via-white/40 md:via-white/10 to-transparent"></div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 md:hidden w-[90%] max-w-sm">
        <MobileEmergencyCard />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 hidden md:block w-[90%] max-w-7xl">
        <DesktopBenefitsCard />
      </div>
    </section>
  );
};

export default Hero;
