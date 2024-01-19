import { CcButtonSizes, CcButtonTypes } from "./CcButton.types";

export const defaultStyles = "cc-rounded-md cc-shadow-sm cc-flex cc-gap-3";

export const getButtonSize = (size: `${CcButtonSizes}`) => {
  switch (size) {
    case CcButtonSizes.SM:
      return "cc-px-4 cc-py-2 cc-max-h-[36px] cc-flex cc-items-center cc-text-white cc-text-sm";
    case CcButtonSizes.MD:
      return "cc-px-5 cc-py-3 cc-text-base";
    case CcButtonSizes.LG:
      return "cc-px-6 cc-py-4 cc-text-lg";
  }
};

export const getButtonStyles = (buttonType: `${CcButtonTypes}`): string => {
  switch (buttonType) {
    case CcButtonTypes.FILLED_PRIMARY:
      return `cc-bg-primary-500 cc-text-white hover:cc-bg-primary-400`;
    case CcButtonTypes.FILLED_SECONDARY:
      return `cc-bg-secondary-500 cc-text-white hover:cc-bg-secondary-400`;
    case CcButtonTypes.FILLED_ERROR:
      return `cc-bg-error-500 cc-text-white hover:cc-bg-error-400`;
    case CcButtonTypes.FILLED_WARNING:
      return `cc-bg-warning-500 cc-text-white hover:cc-bg-warning-400`;
    case CcButtonTypes.FILLED_GREY:
      return `cc-bg-neutral-500 cc-text-white hover:cc-bg-neutral-400`;
    case CcButtonTypes.FILLED_SUCCESS:
      return `cc-bg-success-500 cc-text-white hover:cc-bg-success-400`;
    case CcButtonTypes.FILLED_DISABLED:
      return `cc-bg-neutral-300 cc-text-white`;

    case CcButtonTypes.OUTLINED_PRIMARY:
      return `cc-bg-white  !cc-text-primary-600 cc-border cc-border-primary-600  hover:cc-bg-primary-50`;
    case CcButtonTypes.OUTLINED_SECONDARY:
      return `cc-bg-white !cc-text-secondary-600 cc-border cc-border-secondary-600  hover:cc-bg-secondary-50`;
    case CcButtonTypes.OUTLINED_ERROR:
      return `cc-bg-white !cc-text-error-600 cc-border cc-border-error-600  hover:cc-bg-error-50`;
    case CcButtonTypes.OUTLINED_GREY:
      return `cc-bg-white !cc-text-neutral-600 cc-border cc-border-neutral-600  hover:cc-bg-neutral-50`;
    case CcButtonTypes.OUTLINED_WARNING:
      return `cc-bg-white !cc-text-warning-600 cc-border cc-border-warning-600  hover:cc-bg-warning-50`;
    case CcButtonTypes.OUTLINED_SUCCESS:
      return `cc-bg-white !cc-text-success-600 cc-border cc-border-success-600  hover:cc-bg-success-50`;
    case CcButtonTypes.OUTLINED_DISABLED:
      return `cc-bg-white !cc-text-neutral-400 cc-border cc-border-neutral-100`;

    case CcButtonTypes.TEXT_PRIMARY:
      return `cc-bg-transparent !cc-text-primary-500 hover:!cc-text-primary-600 !cc-shadow-[none]`;
    case CcButtonTypes.TEXT_SECONDARY:
      return `cc-bg-transparent !cc-text-secondary-500 hover:!cc-text-secondary-600 !cc-shadow-[none]`;
    case CcButtonTypes.TEXT_ERROR:
      return `cc-bg-transparent !cc-text-error-500 hover:!cc-text-error-600 !cc-shadow-[none]`;
    case CcButtonTypes.TEXT_GREY:
      return `cc-bg-transparent !cc-text-neutral-500 hover:!cc-text-neutral-600 !cc-shadow-[none]`;
    case CcButtonTypes.TEXT_WARNING:
      return `cc-bg-transparent !cc-text-warning-500 hover:!cc-text-warning-600 !cc-shadow-[none]`;
    case CcButtonTypes.TEXT_SUCCESS:
      return `cc-bg-transparent !cc-text-success-500 hover:!cc-text-success-600 !cc-shadow-[none]`;
    case CcButtonTypes.TEXT_DISABLED:
      return `cc-bg-transparent !cc-text-neutral-300 !cc-shadow-[none]`;
  }
};
