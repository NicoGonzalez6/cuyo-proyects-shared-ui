import React from "react";
import {
  getButtonSize,
  defaultStyles,
  getButtonStyles,
} from "./CcButton.styles";

import { CcButtonProps } from "./CcButton.types";
import clsx from "clsx";

export const CcButton: React.FC<CcButtonProps> = ({
  children,
  buttonSize = "sm",
  disabled = false,
  onClick,
  buttonType = "filled-primary",
  fullWidth = false,
}) => {
  return (
    <button
      data-testid="CcButton"
      onClick={onClick}
      className={clsx(
        getButtonSize(buttonSize),
        defaultStyles,
        getButtonStyles(buttonType),
        { "cc-w-full cc-justify-center": fullWidth }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
