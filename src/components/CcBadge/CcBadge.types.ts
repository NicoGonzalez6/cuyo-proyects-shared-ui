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
  DISABLED = "disabled",
}

export interface CcBadgeProps {
  badgeType?: `${CcBadgeTypes}`;
  badgeVariant?: `${CcBadgeVariant}`;
  children?: React.ReactNode;
  onClick?: () => void;
}
