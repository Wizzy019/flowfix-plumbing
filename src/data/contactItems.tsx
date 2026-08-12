import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";

export const contactItems = [
  {
    icon: FiPhone,
    title: "Phone",
    content: (
      <>
        <a
          href="tel:+16475550123"
          className="block text-primary font-bold text-start"
        >
          (647) 555-0123
        </a>

        <p className="mt-1 text-muted">Available 24/7 for emergencies</p>
      </>
    ),
  },

  {
    icon: FiMail,
    title: "Email",
    content: (
      <a
        href="mailto:info@plumbingontario.ca"
        className="text-primary font-bold"
      >
        info@plumbingontario.ca
      </a>
    ),
  },

  {
    icon: FiClock,
    title: "Business Hours",
    content: (
      <div className="space-y-2 text-muted">
        <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
        <p>Saturday: 9:00 AM - 5:00 PM</p>
        <p>Sunday: 10:00 AM - 4:00 PM</p>
      </div>
    ),
  },

  {
    icon: FiMapPin,
    title: "Service Area",
    content: (
      <p className="text-muted text-start">
        Proudly serving homeowners and businesses across Ontario.
      </p>
    ),
  },
];
