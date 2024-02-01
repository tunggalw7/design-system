// Define classes for different button variant
export const buttonVariantClasses = {
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

// Define classes for different button hover
export const buttonHoverClasses = {
  primary: "bg-btn-primary-hover text-white",
  secondary: "bg-btn-secondary-hover",
  outline: "bg-btn-outline-hover",
  danger: "bg-btn-danger-hover !text-white",
  "outline-danger": "bg-btn-outline-danger-hover text-btn-danger",
};

// Define classes for different button selected
export const buttonSelectedClasses = {
  primary: "bg-btn-primary-selected text-white",
  secondary: "bg-btn-secondary-selected",
  outline: "bg-btn-outline-selected",
  danger: "bg-btn-danger-selected text-white",
  "outline-danger": "bg-btn-outline-danger-selected text-btn-danger",
};

// Define classes for different button disabled
export const buttonDisabledClasses = {
  primary: "bg-btn-disabled text-disabled",
  secondary: "bg-btn-disabled text-disabled",
  outline: "text-disabled",
  danger: "bg-btn-disabled text-disabled",
  "outline-danger": "bg-btn-disabled text-disabled",
};

// Define classes for different button size
export const buttonSizeClasses = {
  large: `text-lg w-[115px] !h-[50px]`,
  medium: "text-lg w-[115px] !h-[42px]",
  small: "text-base w-[104px] !h-[32px]",
};
