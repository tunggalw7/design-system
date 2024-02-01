import { Skeleton } from "@mui/material";
import React from "react";
import Image from "next/image";
import { ARROW_UP, ARROW_DOWN } from "../../constant/common";

type ButtonProps = {
  label: string | React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger" | "outline-danger";
  size?: "large" | "medium" | "small";
  type: "button" | "dropdown";
  hover?: boolean;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// Define classes for different button variants

const buttonVariantClasses = {
  primary:
    "bg-btn-primary text-white hover:bg-btn-primary-hover focus:bg-btn-primary-selected",
  secondary:
    "bg-btn-secondary text-blue hover:bg-btn-secondary-hover focus:bg-btn-secondary-selected",
  outline:
    "bg-btn-outline text-blue hover:bg-btn-outline-hover focus:bg-btn-outline-selected",
  danger:
    "bg-btn-danger text-white hover:bg-btn-danger-hover focus:bg-btn-danger-selected",
  "outline-danger": "bg-btn-outline text-red",
};

const buttonHoverClasses = {
  primary: "bg-btn-primary-hover text-white",
  secondary: "bg-btn-secondary-hover",
  outline: "bg-btn-outline-hover",
  danger: "bg-btn-danger-hover",
  'outline-danger': "bg-btn-danger-hover",
};

const buttonSelectedClasses = {
  primary: "bg-btn-primary-selected text-white",
  secondary: "bg-btn-secondary-selected",
  outline: "bg-btn-outline-selected",
  danger: "bg-btn-danger-selected",
  'outline-danger': "bg-btn-danger-selected",
};

const buttonDisabledClasses = {
  primary: "bg-btn-disabled text-disabled",
  secondary: "bg-btn-disabled text-disabled",
  outline: "text-disabled",
  danger: "bg-btn-disabled text-disabled",
  'outline-danger': "bg-btn-disabled text-disabled",
};
// Define classes for different button size
const buttonSizeClasses = {
  large: `text-lg w-[115px] !h-[50px]`,
  medium: "text-lg w-[115px] !h-[42px]",
  small: "text-base w-[104px] !h-[32px]",
};

/**
 * ButtonAtom component
 */
const ButtonAtom: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    loading,
    label,
    className,
    disabled,
    startIcon,
    endIcon,
    variant,
    size,
    type,
    hover,
    selected,
    onClick,
  } = props;


  // Apply classes based on the specified variant and additional classes provided
  const outlineClasses = `${
    variant?.includes("outline") && "border border-[#C7CBD1]"
  }`;
  const buttonClasses = `rounded font-semibold flex justify-around items-center m-auto p-3 gap-0.5 ${
    // const buttonClasses = `rounded font-semibold flex justify-around items-center m-auto p-3 hover:bg-btn-${variant}-hover focus:bg-btn-${variant}-selected ${
    variant && hover? buttonHoverClasses[variant] : selected ? buttonSelectedClasses[variant] : disabled ? buttonDisabledClasses[variant] : buttonVariantClasses[variant]
  } ${size && buttonSizeClasses[size]} ${
    type === "dropdown" ? "w-[200px]" : ""
  } ${outlineClasses} ${className}`;
  const arrowUpIcon = (
    <Image src={disabled ? ARROW_UP.disabled : ARROW_UP[variant || "primary"]} alt="quick" />
  );
  const arrowDownIcon = type === "dropdown" && (
    <Image src={disabled ? ARROW_DOWN.disabled : ARROW_DOWN[variant || "primary"]} alt="quick" />
  );

  // Render a Skeleton component if the button is in a loading state
  if (loading) {
    return <Skeleton variant="rectangular" className={buttonClasses} />;
  }
  
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={loading || disabled}
      aria-busy={loading}
      aria-label={loading ? "Loading" : "ar-button"}
    >
      {arrowUpIcon}
      {label}
      {arrowDownIcon}
    </button>
  );
};

export default ButtonAtom;
