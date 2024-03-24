import React from "react";
import { twMerge } from "tailwind-merge";
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge(" mx-auto max-w-[980px] px-6", className)}>
      {children}
    </div>
  );
};

export default Container;
