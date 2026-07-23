import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navLinks = [
    { id: 1, label: "Home", path: "" },
    { id: 2, label: "About", path: "" },
    { id: 3, label: "Our Services", path: "" },
    { id: 4, label: "Contact", path: "" },
  ];
  return (
    <header className="w-full flex items-center justify-between py-2 px-4 bg-surface">
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
                className="mx-2 px-4 text-primary border-primary hover:border-b transition-transform duration-slow"
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
        {/* MOBILE */}
        <div
          className={`md:hidden h-screen bg-surface w-2/3 fixed top-20 right-0 px-4 transform transition-shadow duration-slow z-50 
            ${open ? "opacity-100 translate-x-0 overflow-y-hidden" : "opacity-0 translate-x-full"}`}
        >
          {navLinks.map((link) => {
            return (
              <ul key={link.id}>
                <li className="py-4 text-primary border-b-primary font-bold ">
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
