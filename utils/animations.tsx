import { motion } from "framer-motion";
import { FadeInProps } from "./types";

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
      // @ts-expect-error type mismatch with latest rc version
      rel={rel}
      src={src}
      alt={alt}
      aria-label={ariaLabel}
    >
      {children}
    </MotionComponent>
  );
}
