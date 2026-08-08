import type { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
  vatiant?: "primary" | "surface" | "transparent";
};

const Container = ({ children, vatiant, className }: ContainerProps) => {
  const variants = {
    primary: "bg-primary text-white",
    surface: "bg-surface",
    transparent: "bg-transparent",
  };

  return (
    <div
      className={`py-4 px-6 ${variants[vatiant ?? "transparent"]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
