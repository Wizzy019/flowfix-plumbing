import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  icon?: LucideIcon;
  text: string;
  className: string;
};

export const Button = ({ icon: Icon, text, className }: ButtonProps) => {
  return (
    <button
      className={`flex gap-4 items-center justify-center mt-4 border-2 border-primary rounded-sm ${className}`}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};
