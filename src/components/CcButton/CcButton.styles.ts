import {
  CcButtonSizes,
  CcButtonTypes,
  CcButtonVariant,
} from "./CcButton.types";

export const CcButtonDefaultStyles =
  "cc-rounded-md cc-shadow-sm cc-flex cc-gap-3";

export const CcButtonSize = {
  [CcButtonSizes.SM]:
    "cc-px-4 cc-py-2 cc-max-h-[36px] cc-flex cc-items-center cc-text-white cc-text-sm",
  [CcButtonSizes.MD]: "cc-p-3 cc-text-base",
  [CcButtonSizes.LG]: "cc-py-4 cc-px-6 cc-text-lg",
};

export const CcButtonStyles = {
  [CcButtonTypes.PRIMARY]: {
    [CcButtonVariant.FILLED]:
      "cc-bg-primary-500 cc-text-white hover:cc-bg-primary-400",
    [CcButtonVariant.OUTLINED]: `cc-bg-transparent !cc-text-primary-600 cc-border cc-border-primary-600 hover:cc-bg-primary-50`,
    [CcButtonVariant.TEXT]: `cc-bg-transparent !cc-text-primary-500 hover:!cc-text-primary-600 !cc-shadow-[none]`,
  },
  [CcButtonTypes.SECONDARY]: {
    [CcButtonVariant.FILLED]: `cc-bg-secondary-500 cc-text-white hover:cc-bg-secondary-400`,
    [CcButtonVariant.OUTLINED]: `cc-bg-transparent !cc-text-secondary-600 cc-border cc-border-secondary-600  hover:cc-bg-secondary-50`,
    [CcButtonVariant.TEXT]: `cc-bg-transparent !cc-text-secondary-500 hover:!cc-text-secondary-600 !cc-shadow-[none]`,
  },
  [CcButtonTypes.ERROR]: {
    [CcButtonVariant.FILLED]: `cc-bg-error-500 cc-text-white hover:cc-bg-error-400`,
    [CcButtonVariant.OUTLINED]: `cc-bg-transparent !cc-text-error-600 cc-border cc-border-error-600  hover:cc-bg-error-50`,
    [CcButtonVariant.TEXT]: `cc-bg-transparent !cc-text-error-500 hover:!cc-text-error-600 !cc-shadow-[none]`,
  },
  [CcButtonTypes.WARNING]: {
    [CcButtonVariant.FILLED]: `cc-bg-warning-500 cc-text-white hover:cc-bg-warning-400`,
    [CcButtonVariant.OUTLINED]: `cc-bg-transparent !cc-text-warning-600 cc-border cc-border-warning-600  hover:cc-bg-warning-50`,
    [CcButtonVariant.TEXT]: `cc-bg-transparent !cc-text-warning-500 hover:!cc-text-warning-600 !cc-shadow-[none]`,
  },
  [CcButtonTypes.BROWN]: {
    [CcButtonVariant.FILLED]: `cc-bg-brown-500 cc-text-white hover:cc-bg-brown-400`,
    [CcButtonVariant.OUTLINED]: `cc-bg-transparent !cc-text-brown-600 cc-border cc-border-brown-600  hover:cc-bg-brown-50`,
    [CcButtonVariant.TEXT]: `cc-bg-transparent !cc-text-brown-500 hover:!cc-text-brown-600 !cc-shadow-[none]`,
  },

  [CcButtonTypes.SUCCESS]: {
    [CcButtonVariant.FILLED]: `cc-bg-success-500 cc-text-white hover:cc-bg-success-400`,
    [CcButtonVariant.OUTLINED]: `cc-bg-transparent !cc-text-success-600 cc-border cc-border-success-600  hover:cc-bg-success-50`,
    [CcButtonVariant.TEXT]: `cc-bg-transparent !cc-text-success-500 hover:!cc-text-success-600 !cc-shadow-[none]`,
  },

  [CcButtonTypes.DISABLED]: {
    [CcButtonVariant.FILLED]: `cc-bg-neutral-300 cc-text-white`,
    [CcButtonVariant.OUTLINED]: `cc-bg-transparent !cc-text-neutral-400 cc-border cc-border-neutral-100`,
    [CcButtonVariant.TEXT]: `cc-bg-transparent !cc-text-neutral-300 !cc-shadow-[none]`,
  },
};
