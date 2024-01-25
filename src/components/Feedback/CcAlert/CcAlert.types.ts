export enum CcAlertType {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  INFORMATION = "information",
}

export interface CcAlertProps {
  type: `${CcAlertType}`;
  onConfirm?: () => void;
  onClose?: () => void;
  title: string;
  text: string;
}
