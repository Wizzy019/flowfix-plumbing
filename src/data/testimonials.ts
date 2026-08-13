import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaCrown,
  FaFaucet,
  FaToilet,
  FaHotTub,
  FaPumpSoap,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiMarrowDrain } from "react-icons/gi";

export const testimonials = [
  {
    name: "Sarah O.",
    location: "Toronto, Ontario",
    rating: 5,
    testimony:
      "Fantastic service! The plumber arrived on time, explained everything clearly, and fixed the leak quickly. Highly recommended.",
  },
  {
    name: "Michael T.",
    location: "Mississauga, Ontario",
    rating: 5,
    testimony:
      "Professional, friendly, and reasonably priced. They solved our clogged drain the same day and left everything clean.",
  },
  {
    name: "Emily R.",
    location: "Ottawa, Ontario",
    rating: 4,
    testimony:
      "Great experience from start to finish. The technician was knowledgeable and the repair has held up perfectly.",
  },
  {
    name: "David L.",
    location: "Hamilton, Ontario",
    rating: 5,
    testimony:
      "Called for an emergency plumbing issue late in the evening and they responded faster than expected. Excellent workmanship.",
  },
  {
    name: "Jessica M.",
    location: "London, Ontario",
    rating: 4,
    testimony:
      "Very reliable service and clear communication throughout the job. I'd definitely use them again for future plumbing needs.",
  },
];

export const reviews = [
  {
    name: "Sarah M.",
    location: "Hamilton, ON",
    review:
      "Our kitchen sink was completely blocked and water was backing up. Ontario Plumbing Pros came the same day, fixed the issue quickly, and even cleaned up after. Excellent service!",
    rating: 5,
    source: FcGoogle,
    iconColor: "",
  },
  {
    name: "James T.",
    location: "Burlington, ON",
    review:
      "Had a new water heater installed. The team was professional, on time, and explained everything clearly. Great pricing and no hidden fees. Highly recommend!",
    rating: 5,
    source: FaFacebook,
    iconColor: "text-primary",
  },
  {
    name: "Lisa R.",
    location: "Oakville, ON",
    review:
      "We had a leak behind the wall and didn't even know where it was coming from. They found it fast and fixed it without tearing up the whole place. Amazing experience!",
    rating: 5,
    source: FaCrown,
    iconColor: "text-[#F5B400]",
  },
  {
    name: "Michael B.",
    location: "Mississauga, ON",
    review:
      "Fast response, fair price, and the quality of work was top-notch. They fixed our leaking pipe and we haven't had any issues since.",
    rating: 5,
    source: FcGoogle,
    iconColor: "",
  },
  {
    name: "Priya S.",
    location: "Brampton, ON",
    review:
      "I called late at night for an emergency and they showed up within an hour. Lifesavers! Very professional team.",
    rating: 5,
    source: FaFacebook,
    iconColor: "text-primary",
  },
  {
    name: "Daniel K.",
    location: "Richmond Hill, ON",
    review:
      "Excellent service from start to finish. They replaced our old toilet and gave us helpful tips to prevent future issues.",
    rating: 5,
    source: FaCrown,
    iconColor: "text-[#F5B400]",
  },
];

export const serviceReviews = [
  {
    icon: FaFaucet,
    title: "General Plumbing",
    rating: 4.9,
    reviews: 95,
  },
  {
    icon: GiMarrowDrain,
    title: "Drain Cleaning",
    rating: 4.9,
    reviews: 88,
  },
  {
    icon: FaHotTub,
    title: "Water Heater Services",
    rating: 4.9,
    reviews: 76,
  },
  {
    icon: FaToilet,
    title: "Toilet Repair & Installation",
    rating: 4.9,
    reviews: 82,
  },
  {
    icon: FaMagnifyingGlass,
    title: "Leak Detection",
    rating: 4.9,
    reviews: 71,
  },
  {
    icon: FaPumpSoap,
    title: "Sump Pump Services",
    rating: 4.9,
    reviews: 64,
  },
];
