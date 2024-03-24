import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  varient?: "default" | "outline";
  className?: string;
};
const Button = ({
  children,
  size = "medium",
  className,
  varient = "default",
}: Props) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-5",
  };
  const varients = {
    outline: "bg-transparent outline outline-white text-white ",
    default: " bg-white text-textBlack  ",
  };
  return (
    <button
      className={twMerge(
        "rounded-full ",
        sizeClassNames[size],
        varients[varient],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
