import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";
import { FaMessage } from "react-icons/fa6";
import Logo from "../../assets/images/white_logo.webp";
import Container from "../common/Container";
import { NavLink } from "react-router-dom";

type SocialIconsProps = {
  icon: IconType;
  label: string;
  href: string;
  className?: string;
};

type FooterSectionTitleProp = {
  title: string;
};

const SocialIcon = ({
  icon: Icon,
  label,
  href,
  className,
}: SocialIconsProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      className={`rounded-full border border-surface p-1 ${className}`}
    >
      <Icon size={30} aria-hidden="true" />
    </a>
  );
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
            <img
              src={Logo}
              alt="flowfix-plumbing"
              width={160}
              height={80}
              className="w-40 h-20 mb-4"
            />
            <div className="mb-4 font-light">
              Reliable plumbing service you can count on. Available 24/7 for all
              your plumbing needs.
            </div>
            <div className="flex gap-3">
              <SocialIcon icon={FaFacebook} label="Facebook" href="#" />
              <SocialIcon icon={FaInstagram} label="Instagram" href="#" />
              <SocialIcon icon={FaGoogle} label="Google" href="#" />
              <SocialIcon icon={FaMessage} label="Contact Us" href="#" />
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
                <NavLink
                  key={link.id}
                  to={link.path}
                  className="text-sm font-extralight"
                >
                  {link.label}
                </NavLink>
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
        <div className="mb-4 flex flex-col">
          <FooterSectionTitle title="Contact Info" />
          <Container
            className="flex flex-col gap-1.5"
            children={
              <>
                <a href="mailto:flowfix@gmail.com" className="flex gap-4">
                  <Mail aria-hidden="true" />
                  flowfix@gmail.com
                </a>
                <a href="tel:+2347034011184" className="flex gap-4">
                  <Phone aria-hidden="true" />
                  +2347034011184
                </a>
              </>
            }
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
