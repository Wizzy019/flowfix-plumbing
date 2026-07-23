import type { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
  vatiant?: "primary" | "surface" | "transparent";
};

const Container = ({ children, vatiant, className }: ContainerProps) => {
  const variants = {
    primary: "bg-primary text-white",
    surface: "bg-surface text-primary",
    transparent: "bg-transparent",
  };

  return (
    <div
      className={`max-w-container mx-auto py-4 px-6 ${variants[vatiant ?? "transparent"]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
