import { ComponentProps } from "react";
import "./button.css";

/**
 * @param {ComponentProps<"button">} props
 */
const Button = ({ children, ...props }) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export default Button;
