import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  src?: string;
  alt?: string;
  "aria-label"?: string;
};

export default function FadeIn({
  children,
  as = "div",
  className = "",
  id,
  href,
  target,
  rel,
  src,
  alt,
  "aria-label": ariaLabel,
}: FadeInProps) {
  const MotionComponent = motion[as as keyof typeof motion];

  return (
    <MotionComponent
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={className}
      id={id}
      href={href}
      target={target}
      rel={rel}
      src={src}
      alt={alt}
      aria-label={ariaLabel}
    >
      {children}
    </MotionComponent>
  );
}
