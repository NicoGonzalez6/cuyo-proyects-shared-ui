import { CcAlertType } from "./CcAlert.types";

export const CcAlertStyles = {
  default:
    "cc-inline-flex cc-w-full cc-min-h-[66px] sm:cc-w-auto sm:cc-min-w-[500px] cc-px-6 cc-py-5 cc-border cc-border-neutral-200 cc-rounded-md cc-relative after:cc-left-0 after:cc-content-[''] after:cc-h-full after:cc-absolute after:cc-top-0 after:cc-rounded-tl-md after:cc-rounded-bl-md after:cc-h-full after:cc-w-[6px]",
  [CcAlertType.INFORMATION]: `after:cc-bg-secondary-500`,
  [CcAlertType.ERROR]: `after:cc-bg-error-500`,
  [CcAlertType.WARNING]: `after:cc-bg-warning-500`,
  [CcAlertType.SUCCESS]: `after:cc-bg-success-500`,
};

export const CcAlertContainerStyles = {
  mainContainer: "cc-flex cc-w-full cc-gap-3",
  iconSection: {
    mainContainer: "cc-w-[40px]",
    iconWrapperDefault:
      "cc-flex cc-justify-center cc-items-center cc-w-[32px] cc-h-[32px]",
    iconDefault: "cc-text-2xl cc-translate-y-[2px]",
    [CcAlertType.INFORMATION]: {
      iconWrapper:
        "cc-bg-secondary-50 cc-rounded-md cc-border cc-border-secondary-75 ",
      icon: "icon-question-circle cc-text-secondary-500 ",
    },
    [CcAlertType.WARNING]: {
      iconWrapper:
        "cc-bg-warning-50 cc-rounded-md cc-border cc-border-warning-75 ",
      icon: "icon-info-triangle cc-text-warning-500 ",
    },
    [CcAlertType.ERROR]: {
      iconWrapper: "cc-bg-error-50 cc-rounded-md  cc-border-error-75 ",
      icon: "icon-info-circle cc-text-error-500 ",
    },
    [CcAlertType.SUCCESS]: {
      iconWrapper: "cc-bg-success-50 cc-rounded-md  cc-border-success-75 ",
      icon: "icon-check-circle cc-text-success-500 ",
    },
  },
};

export const CcAlertTextStyles = {
  mainContainer: "cc-w-full cc-flex cc-flex-col cc-gap-3",
  textSection: {
    mainContainer: "cc-w-full cc-flex cc-flex-col cc-gap-1",
    title:
      "cc-max-w-[371px] cc-text-sm sm:cc-text-base cc-text-neutral-900 cc-font-bold sm:cc-max-w-[421px]",
    text: "cc-max-w-[371px] cc-text-sm sm:cc-text-base cc-text-neutral-600 sm:cc-max-w-[421px]",
  },
};

export const CcAlertCtaStyles = {
  mainContainer: "cc-flex cc-gap-3",
};

export const CcAlertCloseStyles = {
  mainContainer: "cc-w-[38px] cc-flex cc-justify-center cc-items-start",
  icon: "icon-multiply cc-text-neutral-900 cc-cursor-pointer cc-text-2xl",
};
