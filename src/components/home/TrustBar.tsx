import { Badge, Clock, ShieldCheck, Van, type LucideIcon } from "lucide-react";

type TrustItemsCardProps = {
  icon: LucideIcon;
  text: string;
  className?: string;
};

const TrustItemsCard = ({
  icon: Icon,
  text,
  className,
}: TrustItemsCardProps) => {
  return (
    <div className={`flex items-center gap-4 bg-surface ${className}`}>
      <Icon className="text-primary" />
      <p className="">{text}</p>
    </div>
  );
};

const TrustBar = () => {
  const trustItems = [
    { id: 1, text: "Lisence & Insured", icon: ShieldCheck },
    { id: 2, text: "Satisfaction Guaranteed", icon: Badge },
    { id: 3, text: "24/7 Emergency Service", icon: Clock },
    { id: 4, text: "Fast & Reliable Service", icon: Van },
  ];

  return (
    <div className="hidden md:flex w-full absolute bottom-0 z-30">
      <div>
        {trustItems.map((item) => (
          <TrustItemsCard key={item.id} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
