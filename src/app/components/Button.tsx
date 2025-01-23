import React from "react";
import clsx from "clsx";

export default function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
  ...props
}: {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  const baseStyles =
    "py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline";

  const variantStyles = {
    primary: "bg-[#00B3DD] hover:bg-[#00B3DD]/50 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
