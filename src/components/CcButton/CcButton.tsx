import React from "react";
import { CcButtonSize, defaultStyles, CcButtonStyles } from "./CcButton.styles";

import { CcButtonProps } from "./CcButton.types";
import clsx from "clsx";

export const CcButton: React.FC<CcButtonProps> = ({
  children,
  buttonSize = "sm",
  disabled = false,
  onClick,
  buttonType = "primary",
  fullWidth = false,
  buttonVariant = "filled",
}) => {
  return (
    <button
      data-testid="CcButton"
      onClick={onClick}
      className={clsx(
        CcButtonSize[buttonSize],
        defaultStyles,
        CcButtonStyles[buttonType][buttonVariant],
        { "cc-w-full cc-justify-center": fullWidth }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
