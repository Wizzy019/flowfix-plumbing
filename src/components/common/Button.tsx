import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type ButtonProps = {
  icon?: LucideIcon;
  text: string;
  className: string;
};

export const Button = ({ icon: Icon, text, className }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ y: -0, scale: 1.04 }}
      transition={{ duration: 0.5 }}
      className={`mt-4 border-2 rounded-sm flex gap-4 items-center justify-center cursor-pointer ${className}`}
    >
      {Icon && <Icon />}
      {text}
    </motion.button>
  );
};
