import {
  type ButtonHTMLAttributes,
  type ForwardedRef,
  forwardRef,
  type ReactNode,
} from "react";

export type ButtonVariant = "clear" | "outline" | "filled";
export type ButtonColor = "normal" | "success" | "error";

export type ButtonSize = "m" | "l" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;

  color?: ButtonColor;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      square,
      disabled,
      fullWidth,
      ...otherProps
    } = props;

    return (
      <button
        type="button"
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
