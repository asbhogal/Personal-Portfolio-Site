import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const FadeIn = ({
  children,
  as = "div",
  className = "",
}: FadeInProps) => {
  const MotionComponent = motion[as as keyof typeof motion];

  return (
    <MotionComponent
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
