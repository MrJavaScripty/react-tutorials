import { ComponentProps } from "react";
import "./button.css";

/**
 * @param {ComponentProps<"button"> & {fullWidth: boolean}} props
 */
const Button = ({ children, fullWidth, ...props }) => {
  /** We are dynamically setting the class of the button based it's props */
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
