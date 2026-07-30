import { motion } from "motion/react";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
};

export default function FadeUp({ children }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
