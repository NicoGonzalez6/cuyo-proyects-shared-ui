export enum CcButtonVariant {
  FILLED = "filled",
  OUTLINED = "outlined",
  TEXT = "text",
}

export enum CcButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GREY = "grey",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  DISABLED = "disabled",
}

export enum CcButtonSizes {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

export interface CcButtonProps {
  buttonType?: `${CcButtonTypes}`;
  buttonVariant?: `${CcButtonVariant}`;
  buttonSize?: `${CcButtonSizes}`;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}
