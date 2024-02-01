import { Skeleton } from "@mui/material";
import React from "react";
import Image from "next/image";
import {
  buttonVariantClasses,
  buttonHoverClasses,
  buttonSelectedClasses,
  buttonDisabledClasses,
  buttonSizeClasses,
} from "./Button.class.module";
import { ARROW_UP, ARROW_DOWN } from "../../constant/common";
import PropTypes from 'prop-types';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'outline-danger';

type ButtonProps = {
  label: string | React.ReactNode;
  className?: string;
  children?: string;
  loading?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant: ButtonVariant;
  size?: "large" | "medium" | "small";
  type: "button" | "dropdown";
  hover?: boolean;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * Button component
 */
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    loading,
    label,
    children,
    className,
    disabled,
    variant,
    size,
    type,
    hover,
    selected,
    onClick,
  } = props;
  const validVariants: ButtonVariant[] = ['primary', 'secondary', 'danger', 'outline', 'outline-danger'];

  if (!validVariants.includes(variant)) {
    console.error(`Invalid variant: ${variant}`);
    throw new Error(`Invalid variant: ${variant}`);
  }
  // Apply classes based on the specified variant and additional classes provided
  const outlineClasses = `${
    variant?.includes("outline") && "border border-[#C7CBD1]"
  }`;
  const buttonClasses = `rounded font-semibold flex justify-around items-center m-auto p-3 gap-0.5 ${
    variant && hover
      ? buttonHoverClasses[variant]
      : selected
      ? buttonSelectedClasses[variant]
      : disabled
      ? buttonDisabledClasses[variant]
      : buttonVariantClasses[variant]
  } ${size && buttonSizeClasses[size]} ${
    type === "dropdown" ? "w-[147px]" : ""
  } ${outlineClasses} ${className}`;
  const arrowUpIcon = (
    <Image src={disabled ? ARROW_UP.disabled : ARROW_UP[variant]} alt="quick" />
  );
  const arrowDownIcon = type === "dropdown" && (
    <Image
      src={disabled ? ARROW_DOWN.disabled : ARROW_DOWN[variant]}
      alt="quick"
    />
  );

  // Render a Skeleton component if the button is in a loading state
  if (loading) {
    return (
      <Skeleton
        variant="rectangular"
        className={`${buttonClasses} bg-disabled hover:bg-disabled`}
      />
    );
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
      {label || children}
      {arrowDownIcon}
    </button>
  );
};

export default Button;
