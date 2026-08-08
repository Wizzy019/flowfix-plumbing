import { Droplet, Gauge, Heater, Search, Toilet, Wrench } from "lucide-react";
import GenPlumbingImg from "../assets/images/gen_plumbing.jpg";
import Cleaning from "../assets/images/drian-cleaning.jpg";
import ServiceImg from "../assets/images/water-heater-service.jpg";
import Installation from "../assets/images/installation.jpg";
import Detection from "../assets/images/detection.jpg";
import PumpService from "../assets/images/pump-service.jpg";

export const services = [
  {
    icon: Wrench,
    title: "General Plumbing",
    description: "Fixing leaks, faucets, fixtures, pipes and more.",
  },
  {
    icon: Droplet,
    title: "Drain Cleaning",
    description: "Clogged drain? We'll clear it fast and keep it flowing.",
  },
  {
    icon: Heater,
    title: "Water Heater Services",
    description: "Repair, replacement and installation for all models.",
  },
  {
    icon: Toilet,
    title: "Toilet Repair & Installation",
    description: "From running toilets to new installations, we do it all.",
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Advanced tools to find and fix leaks fast.",
  },
  {
    icon: Gauge,
    title: "Sump Pump Services",
    description: "Installation, repair and maintenance for sump pumps.",
  },
];

export const detialedServices = [
  {
    image: GenPlumbingImg,
    title: "General Plumbing",
    description:
      "From leaking faucets and damaged pipes to fixture repairs and installations, our general plumbing service handles the everyday plumbing problems around your home. We diagnose the issue properly, explain what needs to be done, and carry out reliable repairs to get your plumbing working as it should.",
  },
  {
    image: Cleaning,
    title: "Drain Cleaning",
    description:
      "Slow or completely blocked drains can quickly become a bigger problem. Our drain cleaning service clears stubborn clogs and buildup from sinks, showers, toilets, and other drainage systems. We work to restore proper water flow while identifying potential issues that could cause repeated blockages in the future.",
  },
  {
    image: ServiceImg,
    title: "Water Heater Services",
    description:
      "Whether your water heater is leaking, producing inconsistent hot water, or refusing to work altogether, we can help. We provide water heater repairs, replacements, installations, and maintenance for different systems. Our goal is to restore a dependable hot water supply while helping you choose the right solution for your home.",
  },
  {
    image: Installation,
    title: "Toilet Repair & Installation",
    description:
      "A running, leaking, clogged, or poorly functioning toilet can waste water and become a daily frustration. We handle common toilet repairs as well as complete toilet installations. From replacing faulty components to installing a new toilet, we make sure everything is properly fitted, sealed, and working correctly.",
  },
  {
    image: Detection,
    title: "Leak Detection",
    description:
      "Some plumbing leaks are easy to spot, while others can remain hidden behind walls, under floors, or around fixtures. Our leak detection service helps locate the source of the problem before it causes more damage. We carefully inspect the plumbing system and provide the necessary repair to stop the leak.",
  },
  {
    image: PumpService,
    title: "Sump Pump Services",
    description:
      "A reliable sump pump helps protect your basement from unwanted water and flooding. We provide sump pump installation, repairs, replacements, and maintenance to keep your system ready when you need it most. Whether your pump has stopped working or you need a new system installed, we can help protect your home.",
  },
];
