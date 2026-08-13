import { LocationEdit, Mail, Phone } from "lucide-react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";
import { FaMessage } from "react-icons/fa6";
import Logo from "../../assets/images/white_logo.png";
import Container from "../common/Container";

type SocialIconsProps = {
  icon: IconType;
  className?: string;
};

type FooterSectionTitleProp = {
  title: string;
};

const SocialIcon = ({ icon: Icon, className }: SocialIconsProps) => {
  return (
    <Icon
      size={30}
      className={`rounded-full border border-surface p-1 ${className}`}
    />
  );
};

const ContactIcon = ({ icon: Icon, className }: SocialIconsProps) => {
  return <Icon size={30} className={`${className}`} />;
};

const FooterSectionTitle = ({ title }: FooterSectionTitleProp) => {
  return <h3 className="font-bold mx-6 cursor-pointer">{title}</h3>;
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
    <footer className="min-h-screen md:min-h-fit bg-secondary w-full text-text-light-2 pb-8">
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
              <SocialIcon icon={FaFacebook} />
              <SocialIcon icon={FaInstagram} />
              <SocialIcon icon={FaGoogle} />
              <SocialIcon icon={FaMessage} />
            </div>
          </>
        }
      />
      <div className="w-full flex flex-col flex-1 md:flex-row md:items-center md:justify-between">
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
                  className="text-sm font-light cursor-pointer"
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
                <div key={contact.id} className="flex gap-4 cursor-pointer">
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
                      <span className="cursor-pointer">{h.label}</span>
                      <span>{h.time}</span>
                    </div>
                  );
                })}
                <span className="font-bold text-primary cursor-pointer">
                  24/7 Emergency Service
                </span>
              </>
            }
          />
        </div>
      </div>
      <div className="my-8 border-b-2 border-b-divider"></div>
      <div className="flex flex-col items-center justify-center text-muted">
        <p>©Copyright Flowfix Plumbing</p>
        <p>All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
