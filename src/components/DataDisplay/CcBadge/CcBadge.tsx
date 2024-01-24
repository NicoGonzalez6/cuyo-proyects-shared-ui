import React from "react";

import { CcBadgeProps } from "./CcBadge.types";
import {
  CcBadgeSize,
  CcBadgeStyles,
  CcBadgeDefaultStyles,
} from "./CcBadge.styles";
import clsx from "clsx";

export const CcBadge: React.FC<CcBadgeProps> = ({
  children,
  badgeSize = "sm",
  badgeType = "primary",
  badgeVariant = "filled",
  onClick,
}) => (
  <button
    data-testid="CcBadge"
    className={clsx(
      CcBadgeSize[badgeSize],
      CcBadgeStyles[badgeType][badgeVariant],
      CcBadgeDefaultStyles
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
