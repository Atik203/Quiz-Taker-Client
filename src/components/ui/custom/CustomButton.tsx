import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  type = "button",
  className,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`rounded-md bg-primary dark:bg-primary px-3.5 py-2.5 text-sm md:text-base font-medium md:font-semibold text-white shadow-sm hover:bg-[hsl(24.6,95%,43.1%)] dark:hover:bg-[hsl(20.5,90.2%,38.2%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(24.6,95%,43.1%)] dark:focus-visible:outline-[hsl(20.5,90.2%,38.2%)] ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`.concat(className ? ` ${className}` : "")}
    >
      {children}
    </button>
  );
};

export default CustomButton;
