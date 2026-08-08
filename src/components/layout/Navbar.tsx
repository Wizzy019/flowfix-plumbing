import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, PhoneCall, X } from "lucide-react";
import { motion } from "motion/react";
import Logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    console.log(window.scrollY);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navLinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Reviews", path: "" },
    { id: 5, label: "Services Areas", path: "" },
    { id: 6, label: "Contact", path: "" },
  ];
  return (
    <motion.header
      animate={{
        height: scrolled ? 60 : 72,
        boxShadow: scrolled
          ? "0 4px 12px rgba(0,0,0,0.12)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full flex items-center justify-between mb-4 px-4 bg-surface ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <img src={Logo} alt="logo" className="w-40 h-20" />
      <div className="w-1/2">
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto flex size-11 items-center justify-center transition-colors md:hidden"
        >
          {open ? (
            <X className="text-primary" />
          ) : (
            <Menu className="text-primary" />
          )}
        </button>
        <nav className="hidden w-max md:flex items-center ml-auto">
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.path}
                className="mx-2 px-1.5 text-primary font-bold border-b-3 border-transparent hover:border-primary transition-colors duration-slow"
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
        {/* MOBILE */}
        <div
          className={`md:hidden h-screen bg-surface w-2/3 fixed top-15 right-0 px-4 transform transition duration-slow z-50 
            ${open ? "opacity-100 translate-x-0 overflow-y-hidden" : "opacity-0 translate-x-full"}`}
        >
          {navLinks.map((link) => {
            return (
              <ul key={link.id}>
                <li className="py-4 text-primary border-b-primary font-bold ">
                  <NavLink to={link.path} onClick={() => setOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div
        className={`px-8 py-5 hidden md:flex items-center justify-center gap-4 cursor-pointer`}
      >
        <PhoneCall size={28} className="text-primary" />

        <div className="text-center">
          <h3 className="text-primary text-xl font-bold">(905) 123-4567</h3>

          <p className="text-sm text-muted-foreground">
            24/7 Emergency Service
          </p>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
