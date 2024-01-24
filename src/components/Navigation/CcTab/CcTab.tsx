import clsx from "clsx";
import React from "react";
import { CCTabProps } from "./CcTab.types";
import {
  CcTabStyles,
  CcNotificationStyles,
  CcIconStyles,
} from "./CcTab.styles";

export const CcTab: React.FC<CCTabProps> = ({
  isActive,
  label,
  icon,
  notification,
  notificationValue,
  disabled,
  onClick,
}) => {
  return (
    <button
      data-testid="CcTab"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        CcTabStyles.default,
        isActive && !disabled && CcTabStyles.active,
        !isActive && !disabled && CcTabStyles.hover,
        disabled && CcTabStyles.disabled
      )}
    >
      {icon && (
        <i
          className={clsx(
            icon,
            CcIconStyles.default,
            disabled && CcIconStyles.disabled
          )}
        />
      )}
      <p className="cc-text-sm">{label}</p>
      {notification && (
        <p
          data-testid="CcTabNotification"
          className={clsx(
            CcNotificationStyles.default,
            isActive && CcNotificationStyles.active,
            disabled && CcNotificationStyles.disabled
          )}
        >
          {notificationValue}
        </p>
      )}
    </button>
  );
};
