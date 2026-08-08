import {
  Clock1,
  Heart,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import MikeThompsonImg from "../assets/images/mike_thompson.jpg";
import AlexMorganImg from "../assets/images/alex_morgan.jpg";
import SarahJohnsonImg from "../assets/images/sarah_johnson.jpg";
import DavidchanImg from "../assets/images/david_chan.jpg";

type Variant = "primary" | "secondary";
type PlumberImageType = typeof MikeThompsonImg;

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: Variant;
};

export type Plumber = {
  image: PlumberImageType;
  name: string;
  role: string;
};

export const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    description: "We believe in clear communiction and transparent pricing",
    variant: "primary",
  },

  {
    icon: Wrench,
    title: "Quality",
    description:
      "We use best tools and materials to ensure long lasting results",
    variant: "secondary",
  },
  {
    icon: Clock1,
    title: "Reliability",
    description: "We show up on time, every time and get the job done right",
    variant: "primary",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We're no happy untill you are",
    variant: "secondary",
  },
];

export const trustFeatures = [
  {
    title: "Experienced Professionals",
    description:
      "Our licensed plumbers bring years of hands-on experience to every job.",
  },
  {
    title: "Upfront Pricing",
    description:
      "No hidden fees. We provide honest, upfront quotes before any work begins.",
  },
  {
    title: "Fast Response",
    description: "We respond quickly and are available 24/7 for emergencies.",
  },
  {
    title: "Workmanship Guaranteed",
    description:
      "We stand behind our work with a satisfaction guarantee on all services.",
  },
  {
    title: "Local & Trusted",
    description:
      "Proudly serving communities across Ontario with a strong reputation for reliability.",
  },
  {
    title: "Fully Licensed & Insured",
    description:
      "Your home is protected. We are fully licensed and insured for your peace of mind.",
  },
];

export const plumbers: Plumber[] = [
  {
    image: MikeThompsonImg,
    name: "Mike Thompson",
    role: "Founder & Master Plumber",
  },
  {
    image: SarahJohnsonImg,
    name: "Sarah Johnson",
    role: "Operation Manager",
  },
  {
    image: DavidchanImg,
    name: "David Chan",
    role: "Licensed Plumber",
  },
  {
    image: AlexMorganImg,
    name: "Alex Morgan",
    role: "Plumbing Technician",
  },
];
