import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  icon?: LucideIcon;
  text: string;
  className: string;
};

export const Button = ({ icon: Icon, text, className }: ButtonProps) => {
  return (
    <button
      className={`mt-4 border-2 rounded-sm flex gap-4 items-center justify-center cursor-pointer ${className}`}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};
