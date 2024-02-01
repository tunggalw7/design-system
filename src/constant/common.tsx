import arrowWhiteUp from "@/assets/icons/arrow-up-white.svg";
import arrowWhiteUpMedium from "@/assets/icons/arrow-up-white-medium.svg";
import arrowDisabledUp from "@/assets/icons/arrow-up-disabled.svg";
import arrowDisabledUpMedium from "@/assets/icons/arrow-up-disabled-medium.svg";

import arrowWhiteDown from "@/assets/icons/arrow-down-white.svg";
import arrowWhiteDownMedium from "@/assets/icons/arrow-down-white-medium.svg";

import arrowDisabledDown from "@/assets/icons/arrow-down-disabled.svg";
import arrowDisabledDownMedium from "@/assets/icons/arrow-down-disabled-medium.svg";

import arrowBlueUp from "@/assets/icons/arrow-up-blue.svg";
import arrowBlueUpMedium from "@/assets/icons/arrow-up-blue-medium.svg";
import arrowBlueDown from "@/assets/icons/arrow-down-blue.svg";
import arrowBlueDownMedium from "@/assets/icons/arrow-down-blue-medium.svg";

import arrowRedUp from "@/assets/icons/arrow-up-red.svg";
import arrowRedUpMedium from "@/assets/icons/arrow-up-red-medium.svg";

export enum ARROW_UP {
  primary = arrowWhiteUp,
  secondary = arrowBlueUp,
  outline = arrowBlueUp,
  danger = arrowWhiteUp,
  "outline-danger" = arrowRedUp,
  disabled = arrowDisabledUp
}

export enum ARROW_DOWN {
  primary = arrowWhiteDown,
  secondary = arrowBlueDown,
  outline = arrowBlueDown,
  danger = arrowWhiteDown,
  disabled = arrowDisabledDown
}