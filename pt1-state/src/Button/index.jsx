import { ComponentProps } from "react";
import "./button.css";

/**
 * @param {ComponentProps<"button"> & {fullWidth: boolean}} props
 */
const Button = ({ children, fullWidth, ...props }) => {
  const getClassName = () => {
    let className = "btn";
    if (fullWidth) {
      className += " full-width";
    }
    return className;
  };

  return (
    <button className={getClassName()} {...props}>
      {children}
    </button>
  );
};

export default Button;
