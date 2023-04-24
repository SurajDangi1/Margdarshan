/* eslint-disable max-lines */
import React, { FC, forwardRef } from "react";
import { IconType } from "react-icons";
import style from "./button.module.scss";
import { STANDARD_INPUT_HEIGHT } from "../constants";

export type ButtonTheme =
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "secondary"
  | "outlined";
export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "small" | "medium" | "large";

const buttonHeightMap: {
  [key in ButtonSize]: number;
} = {
  small: 28,
  medium: 36,
  large: STANDARD_INPUT_HEIGHT,
};

const hoverBgColorMap: {
  [key in ButtonTheme]: {
    [key in ButtonVariant]: string;
  };
} = {
  primary: {
    primary: "cherry-800",
    secondary: "cherry-100",
    tertiary: "cherry-100",
  },
  danger: {
    primary: "red-600",
    secondary: "red-100",
    tertiary: "red-100",
  },
  success: {
    primary: "green-500",
    secondary: "green-100",
    tertiary: "green-100",
  },
  warning: {
    primary: "yellow-700",
    secondary: "yellow-100",
    tertiary: "yellow-100",
  },
  secondary: {
    primary: "pink-500",
    secondary: "transparent",
    tertiary: "transparent",
  },
  outlined: {
    primary: "transparent",
    secondary: "transparent",
    tertiary: "transparent",
  },
};

const textColorMap: {
  [key in ButtonTheme]: {
    [key in ButtonVariant]: string;
  };
} = {
  primary: {
    primary: "white",
    secondary: "primary",
    tertiary: "primary",
  },
  danger: {
    primary: "white",
    secondary: "danger",
    tertiary: "danger",
  },
  success: {
    primary: "white",
    secondary: "success",
    tertiary: "success",
  },
  warning: {
    primary: "white",
    secondary: "warning",
    tertiary: "warning",
  },
  secondary: {
    primary: "black",
    secondary: "",
    tertiary: "",
  },
  outlined: {
    primary: "primary",
    secondary: "",
    tertiary: "",
  },
};

const borderColorMap: {
  [key in ButtonTheme]: {
    [key in ButtonVariant]: string;
  };
} = {
  primary: {
    primary: "primary",
    secondary: "primary",
    tertiary: "none",
  },
  secondary: {
    primary: "secondary",
    secondary: "transparent",
    tertiary: "none",
  },
  success: {
    primary: "success",
    secondary: "success",
    tertiary: "none",
  },
  danger: {
    primary: "danger",
    secondary: "danger",
    tertiary: "none",
  },
  warning: {
    primary: "warning",
    secondary: "warning",
    tertiary: "none",
  },
  outlined: {
    primary: "primary",
    secondary: "",
    tertiary: "grey-200",
  },
};

const yAxisPaddingMap: {
  [key in ButtonSize]: number;
} = {
  small: 1,
  medium: 2,
  large: 3,
};
const textSizeMap: {
  [key in ButtonSize]: string;
} = {
  small: "body-3",
  medium: "body-1",
  large: "body-1",
};

const iconSizeMap: {
  [key in ButtonSize]: string;
} = {
  small: "16px",
  medium: "20px",
  large: "22px",
};

const disabledBgColorMap: {
  [key in ButtonVariant]: string;
} = {
  primary: "grey-200",
  secondary: "transparent",
  tertiary: "transparent",
};

const defaultBgColorMap: {
  [key in ButtonTheme]: {
    [key in ButtonVariant]: string;
  };
} = {
  primary: {
    primary: "primary",
    secondary: "transparent",
    tertiary: "transparent",
  },
  danger: {
    primary: "danger",
    secondary: "transparent",
    tertiary: "transparent",
  },
  secondary: {
    primary: "secondary",
    secondary: "",
    tertiary: "",
  },
  success: {
    primary: "success",
    secondary: "transparent",
    tertiary: "transparent",
  },
  warning: {
    primary: "warning",
    secondary: "transparent",
    tertiary: "transparent",
  },
  outlined: {
    primary: "transparent",
    secondary: "transparent",
    tertiary: "transparent",
  },
};
/* eslint-disable-next-line */
export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size" | "ref"
> & {
  text?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  leftIcon?: IconType;
  rightIcon?: IconType;
  href?: string;
  openInNewTab?: boolean;
};
export const Button = forwardRef<any, ButtonProps>(
  (
    {
      text,
      size = "large",
      variant = "primary",
      theme = "primary",
      leftIcon,
      rightIcon,
      className,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const disabled = props.disabled;
    const LeftIcon = leftIcon ? leftIcon : null;
    const RightIcon = rightIcon ? rightIcon : null;
    const defaultBgColor = defaultBgColorMap[theme][variant];
    const hoverBgColor = hoverBgColorMap[theme][variant];
    const textColor = textColorMap[theme][variant];
    const borderColor = borderColorMap[theme][variant];
    const yAxisPadding = yAxisPaddingMap[size];
    const buttonHeight = buttonHeightMap[size];
    const textSize = textSizeMap[size];
    const boxShadow = style[theme];
    const iconSize = iconSizeMap[size];
    const disabledBgColor = disabledBgColorMap[variant];
    const computedClassName = `${
      !disabled && boxShadow
    } ${className} flex items-center gap-2 border-2 px-6 py-${yAxisPadding} rounded-${size} text-${textSize} justify-center whitespace-nowrap  ${
      !disabled
        ? `hover:bg-${hoverBgColor} bg-${defaultBgColor} text-${textColor} 
       border-${borderColor}`
        : `bg-${disabledBgColor} text-grey-400 ${
            variant === "tertiary" && "border-none"
          }`
    } `;
    const innerView = (
      <>
        {LeftIcon && <LeftIcon size={iconSize} xHeight={20} />}
        {text}
        {RightIcon && <RightIcon size={iconSize} xHeight={20} />}
      </>
    );

    const computedStyle = {
      height: `${buttonHeight}px`,
      ...props.style,
    };
    if (href) {
      return (
        <a
          aria-label={props["aria-label"]}
          className={computedClassName}
          href={href}
          style={computedStyle}
          ref={ref}
          target={props.openInNewTab ? "_blank" : undefined}
          rel={props.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {innerView}
        </a>
      );
    }
    return (
      <button
        {...props}
        className={computedClassName}
        ref={ref}
        style={computedStyle}
        onClick={onClick}
      >
        {innerView}
      </button>
    );
  }
);

Button.displayName = "Button";
