import { PhoneCall } from "lucide-react";
type Prop = {
  className?: string;
};

export default function MobileEmergencyCard({ className }: Prop) {
  return (
    <div
      className={`rounded-full shadow-xl px-8 py-5 flex items-center justify-center gap-4 ${className}`}
    >
      <PhoneCall size={28} className="text-primary" />

      <div className="text-center">
        <h3 className="text-primary text-xl font-bold">(905) 123-4567</h3>

        <p className="text-sm text-muted-foreground">24/7 Emergency Service</p>
      </div>
    </div>
  );
}
