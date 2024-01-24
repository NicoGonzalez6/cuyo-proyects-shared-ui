export enum CcBadgeVariant {
  FILLED = "filled",
  OUTLINED = "outlined",
  ACCENT = "accent",
}

export enum CcBadgeTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GREY = "grey",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
}

export enum CcBadgeSizes {
  MD = "md",
  SM = "sm",
}

export interface CcBadgeProps {
  badgeType?: `${CcBadgeTypes}`;
  badgeVariant?: `${CcBadgeVariant}`;
  badgeSize?: `${CcBadgeSizes}`;
  children?: React.ReactNode;
  onClick?: () => void;
}
