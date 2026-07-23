import {
  Factory,
  Inspect,
  LocationEdit,
  Mail,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";
import Logo from "../../assets/images/logo.png";
import Container from "../common/Container";

type SocialIconsProps = {
  icon: LucideIcon;
  className?: string;
};

type FooterSectionTitleProp = {
  title: string;
};

const SocialIcon = ({ icon: Icon, className }: SocialIconsProps) => {
  return (
    <Icon
      size={30}
      className={`p-1 border border-surface rounded-full ${className}`}
    />
  );
};

const ContactIcon = ({ icon: Icon, className }: SocialIconsProps) => {
  return <Icon size={30} className={`${className}`} />;
};

const FooterSectionTitle = ({ title }: FooterSectionTitleProp) => {
  return <div className="font-bold mx-6">{title}</div>;
};

const quickLinks = [
  { id: 1, label: "Home", path: "#" },
  { id: 2, label: "About Us", path: "" },
  { id: 3, label: "Service", path: "" },
  { id: 4, label: "Service Areas", path: "" },
  { id: 5, label: "Contact Us", path: "" },
];

const services = [
  { id: 1, label: "General Plumbing", path: "" },
  { id: 2, label: "Drian Cleaning", path: "" },
  { id: 3, label: "Water Heater Services", path: "" },
  { id: 4, label: "Toilet Repair and Installation", path: "" },
  { id: 5, label: "Leak Detection", path: "" },
  { id: 6, label: "Sump Pump Services", path: "" },
];

const contacts = [
  { id: 1, label: "+2347034011184", icon: Phone },
  { id: 2, label: "flowfix@gmail.com", icon: Mail },
  { id: 3, label: "Ontario, Canada", icon: LocationEdit },
];

const hours = [
  { id: 1, label: "Monday - Friday", time: "7:00AM - 8:00PM" },
  { id: 2, label: "Saturday", time: "7:00AM - 8:00PM" },
  { id: 3, label: "Sunday", time: "7:00AM - 8:00PM" },
];

const Footer = () => {
  return (
    <footer className="min-h-svh bg-secondary w-full text-white text-pretty">
      {/* LOGO */}
      <Container
        className="mb-6"
        children={
          <>
            <img src={Logo} alt="logo" className="w-40 h-20 mb-4" />
            <div className="mb-4 font-light">
              Reliable plumbing service you can count on. Available 24/7 for all
              your plumbing needs.
            </div>
            <div className="flex gap-3">
              <SocialIcon icon={Phone} />
              <SocialIcon icon={Factory} />
              <SocialIcon icon={Inspect} />
              <SocialIcon icon={X} />
            </div>
          </>
        }
      />
      <div className="mb-4">
        <FooterSectionTitle title="Quick Links" />
        <Container
          className="flex flex-col gap-1.5"
          children={quickLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.path}
                className="text-sm font-extralight"
              >
                {link.label}
              </a>
            );
          })}
        />
      </div>
      <div className="mb-4">
        <FooterSectionTitle title="Our Services" />
        <Container
          className="flex flex-col gap-1.5"
          children={services.map((service) => {
            return (
              <a
                key={service.id}
                href={service.path}
                className="text-sm font-light"
              >
                {service.label}
              </a>
            );
          })}
        />
      </div>
      <div className="mb-4">
        <FooterSectionTitle title="Contact Info" />
        <Container
          className="flex flex-col gap-1.5"
          children={contacts.map((contact) => {
            return (
              <div key={contact.id} className="flex gap-4">
                <ContactIcon icon={contact.icon} />
                {contact.label}
              </div>
            );
          })}
        />
      </div>
      <div>
        <FooterSectionTitle title="Business Hours" />
        <Container
          className="flex flex-col gap-1.5"
          children={
            <>
              {hours.map((h) => {
                return (
                  <div key={h.id} className="flex justify-between">
                    <span>{h.label}</span>
                    <span>{h.time}</span>
                  </div>
                );
              })}
              <span className="font-bold text-primary">
                24/7 Emergency Service
              </span>
            </>
          }
        />
      </div>
      <div className="my-8 border-b-2 border-b-gray-600"></div>
      <div className="flex flex-col items-center justify-center text-muted pb-6">
        <p>©Copyright Flowfix Plumbing</p>
        <p>All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
