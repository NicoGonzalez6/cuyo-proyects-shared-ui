import React from "react";

import { CcAlertProps, CcAlertType } from "./CcAlert.types";
import {
  CcAlertStyles,
  CcAlertTextStyles,
  CcAlertContainerStyles,
  CcAlertCtaStyles,
  CcAlertCloseStyles,
} from "./CcAlert.styles";
import clsx from "clsx";
import { CcButton } from "../../Buttons/CcButton";

export const CcAlert: React.FC<CcAlertProps> = ({
  type = "information",
  onClose,
  onConfirm,
  text,
  title,
}) => {
  const getButtonVariant = (type: `${CcAlertType}`) => {
    switch (type) {
      case CcAlertType.INFORMATION:
        return "secondary";
      case CcAlertType.ERROR:
        return "error";
      case CcAlertType.SUCCESS:
        return "success";
      case CcAlertType.WARNING:
        return "warning";
    }
  };

  return (
    <div
      data-testid="CcAlert"
      className={clsx(CcAlertStyles.default, CcAlertStyles[type])}
    >
      <div className={CcAlertContainerStyles.mainContainer}>
        <div className={CcAlertContainerStyles.iconSection.mainContainer}>
          <div
            className={clsx(
              CcAlertContainerStyles.iconSection.iconWrapperDefault,
              CcAlertContainerStyles.iconSection[type].iconWrapper
            )}
          >
            <i
              className={clsx(
                CcAlertContainerStyles.iconSection.iconDefault,
                CcAlertContainerStyles.iconSection[type].icon
              )}
            />
          </div>
        </div>
        <div className={CcAlertTextStyles.mainContainer}>
          <div className={CcAlertTextStyles.textSection.mainContainer}>
            <p className={CcAlertTextStyles.textSection.title}>{title}</p>
            <p className={CcAlertTextStyles.textSection.text}>{text}</p>
          </div>

          <div className={CcAlertCtaStyles.mainContainer}>
            <CcButton
              buttonSize="sm"
              buttonType={getButtonVariant(type)}
              buttonVariant="filled"
              onClick={onConfirm}
            >
              Primary Cta
            </CcButton>
          </div>
        </div>
        <div className={CcAlertCloseStyles.mainContainer}>
          <button onClick={onClose} data-testid="CcAlertClose">
            <i className={CcAlertCloseStyles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};
