import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"] as const;
const SIZES = ["btn--medium", "btn--large", "btn--test"] as const;

type ButtonStyle = (typeof STYLES)[number];
type ButtonSize = (typeof SIZES)[number];

interface ButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> {
  children: ReactNode;
  buttonStyle?: ButtonStyle;
  buttonSize?: ButtonSize;
  className?: string;
}

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: ButtonProps) => {
  const checkButtonStyle =
    buttonStyle && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize =
    buttonSize && SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
