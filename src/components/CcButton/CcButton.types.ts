export enum CcButtonTypes {
  FILLED_PRIMARY = "filled-primary",
  FILLED_SECONDARY = "filled-secondary",
  FILLED_GREY = "filled-grey",
  FILLED_ERROR = "filled-error",
  FILLED_SUCCESS = "filled-success",
  FILLED_WARNING = "filled-warning",
  FILLED_DISABLED = "filled-disabled",

  OUTLINED_PRIMARY = "outlined-primary",
  OUTLINED_SECONDARY = "outlined-secondary",
  OUTLINED_GREY = "outlined-grey",
  OUTLINED_ERROR = "outlined-error",
  OUTLINED_SUCCESS = "outlined-success",
  OUTLINED_WARNING = "outlined-warning",
  OUTLINED_DISABLED = "outlined-disabled",

  TEXT_PRIMARY = "text-primary",
  TEXT_SECONDARY = "text-secondary",
  TEXT_GREY = "text-grey",
  TEXT_ERROR = "text-error",
  TEXT_SUCCESS = "text-success",
  TEXT_WARNING = "text-warning",
  TEXT_DISABLED = "text-disabled",
}

export enum CcButtonSizes {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

export interface CcButtonProps {
  buttonType?: `${CcButtonTypes}`;
  buttonSize?: `${CcButtonSizes}`;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}
