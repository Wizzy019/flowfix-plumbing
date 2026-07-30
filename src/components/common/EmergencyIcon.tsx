import { Phone } from "lucide-react";

export default function EmergencyIcon() {
  return (
    <div className="relative flex items-center justify-center size-20 rounded-full">
      <Phone className="size-14 text-white" />

      <div className="absolute top-5 right-3.75 text-[16px] font-bold text-white">
        247
      </div>

      <div className="absolute inset-0 rounded-full border-[5px] border-white border-l-transparent border-b-transparent" />
    </div>
  );
}
