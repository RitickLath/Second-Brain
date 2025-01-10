import { ReactElement } from "react";

interface ButtonProp {
  variant: "Primary" | "Secondary";
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  text: string;
  onClick?: () => void;
}

const variantStyle = {
  Primary: "bg-[#5045e6] text-white",
  Secondary: "bg-[#dddddd] text-[#7c74cd]",
};

const sizeStyle = {
  sm: "px-2 py-2 font-normal",
  md: "px-4 py-2 text-md font-medium",
  lg: "px-6 py-2 text-lg font-medium",
};

const defaultStyle = "text-white rounded-md";

const Button = (props: ButtonProp) => {
  return (
    <button
      className={`${variantStyle[props.variant]} ${
        sizeStyle[props.size]
      } ${defaultStyle}`}
      onClick={props.onClick}
    >
      <div className="flex items-center">
        {props.startIcon && <span>{props.startIcon}</span>}
        <span>{props.text}</span>
        {props.endIcon && <span>{props.endIcon}</span>}
      </div>
    </button>
  );
};

export default Button;
