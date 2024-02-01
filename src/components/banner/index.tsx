import React, { ReactNode } from "react";

interface BannerProps {
  variant?: "info" | "congrats" | "documentation" | "danger";
  children: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ variant = "info", children }) => {
  return <aside className={variant}>{children}</aside>;
};

export default Banner;
