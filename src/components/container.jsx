import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-[1680px] px-4 sm:px-6 lg:px-8 mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
