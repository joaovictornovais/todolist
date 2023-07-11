import React, { FunctionComponent } from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 rounded-sm font-bold text-neutral-900 border-2 border-blue-600 hover:bg-neutral-900 hover:text-blue-600 transition-all duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
