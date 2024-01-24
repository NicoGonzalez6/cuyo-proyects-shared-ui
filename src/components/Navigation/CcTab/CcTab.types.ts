export interface CCTabProps {
  isActive?: boolean;
  label: string;
  icon?: string;
  notification?: boolean;
  notificationValue?: number;
  disabled?: boolean;
  onClick?: () => void;
}
