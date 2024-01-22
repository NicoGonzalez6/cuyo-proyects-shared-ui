import { CcBadgeTypes, CcBadgeVariant, CcBadgeSizes } from "./CcBadge.types";

export const CcBadgeDefaultStyles = "cc-rounded-xl";

export const CcBadgeSize = {
  [CcBadgeSizes.SM]: "cc-px-2 cc-py-0 cc-text-xs",
  [CcBadgeSizes.MD]: "cc-px-3 cc-py-[2px] cc-text-sm",
  [CcBadgeSizes.LG]: "cc-px-3 cc-py-1 cc-text-sm",
};

export const CcBadgeStyles = {
  [CcBadgeTypes.PRIMARY]: {
    [CcBadgeVariant.FILLED]: "cc-bg-primary-500 cc-text-white",
    [CcBadgeVariant.OUTLINED]: `cc-bg-transparent !cc-text-primary-600 cc-border cc-border-primary-600`,
    [CcBadgeVariant.ACCENT]: `cc-bg-primary-50 !cc-text-primary-700`,
  },
  [CcBadgeTypes.SECONDARY]: {
    [CcBadgeVariant.FILLED]: "cc-bg-secondary-500 cc-text-white",
    [CcBadgeVariant.OUTLINED]: `cc-bg-transparent !cc-text-secondary-600 cc-border cc-border-secondary-600`,
    [CcBadgeVariant.ACCENT]: `cc-bg-secondary-50 !cc-text-secondary-700`,
  },
  [CcBadgeTypes.ERROR]: {
    [CcBadgeVariant.FILLED]: "cc-bg-error-500 cc-text-white",
    [CcBadgeVariant.OUTLINED]: `cc-bg-transparent !cc-text-error-600 cc-border cc-border-error-600`,
    [CcBadgeVariant.ACCENT]: `cc-bg-error-50 !cc-text-error-700`,
  },
  [CcBadgeTypes.GREY]: {
    [CcBadgeVariant.FILLED]: "cc-bg-neutral-500 cc-text-white",
    [CcBadgeVariant.OUTLINED]: `cc-bg-transparent !cc-text-neutral-600 cc-border cc-border-neutral-600`,
    [CcBadgeVariant.ACCENT]: `cc-bg-neutral-50 !cc-text-neutral-700`,
  },
  [CcBadgeTypes.SUCCESS]: {
    [CcBadgeVariant.FILLED]: "cc-bg-success-500 cc-text-white",
    [CcBadgeVariant.OUTLINED]: `cc-bg-transparent !cc-text-success-600 cc-border cc-border-success-600`,
    [CcBadgeVariant.ACCENT]: `cc-bg-success-50 !cc-text-success-700`,
  },
  [CcBadgeTypes.WARNING]: {
    [CcBadgeVariant.FILLED]: "cc-bg-warning-500 cc-text-white",
    [CcBadgeVariant.OUTLINED]: `cc-bg-transparent !cc-text-warning-600 cc-border cc-border-warning-600`,
    [CcBadgeVariant.ACCENT]: `cc-bg-warning-50 !cc-text-warning-700`,
  },
};
