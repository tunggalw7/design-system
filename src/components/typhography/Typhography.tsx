import React from "react";
import { typhographyVariantClasses } from "./Typhography.class.module";

type TypographyProps = {
  text: string | React.ReactNode;
  className?: string;
  children?: string;
  type?: string;
  variant?:
    | "display1"
    | "display2"
    | "display3"
    | "h1"
    | "h2"
    | "h3"
    | "label1-regular"
    | "label1-semibold"
    | "label1-underline"
    | "label2-regular"
    | "label2-semibold"
    | "label2-underline"
    | "label3-regular"
    | "label3-semibold"
    | "label3-underline"
    | "body-regular"
    | "body-semibold"
    | "body-underline"
    | "body-superscript-regular"
    | "body-superscript-semibold"
    | "paragraph-regular"
    | "paragraph-semibold"
    | "paragraph-underline"
    | "caption-regular"
    | "caption-underline";
};

/**
 * Typhography component
 */
const Typhography: React.FC<TypographyProps> = (props: TypographyProps) => {
  const { text, className, variant, children } = props;
  const customClasses = `${variant && typhographyVariantClasses[variant]} ${
    className && className
  }`;

  return <div className={customClasses}>{text || children}</div>;
};

export default Typhography;
