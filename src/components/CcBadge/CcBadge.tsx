import React from "react";

import { CcBadgeProps } from "./CcBadge.types";

const CcBadge: React.FC<CcBadgeProps> = ({ children }) => (
  <div data-testid="CcBadge">{children}</div>
);

export default CcBadge;
