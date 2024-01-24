/* LABEL STYLES */
export const CcTextFieldLabelStyles =
  "cc-text-xs cc-text-neutral-900 cc-font-medium cc-mb-1";

/* INPUT STYLES */
export const CcTextFieldDefaultInputStyles =
  "cc-w-full cc-rounded-md cc-py-2 cc-px-3";
export const CcTextFieldInputTextStyles = {
  default:
    "cc-w-full cc-rounded-md cc-py-2 cc-px-3 placeholder:cc-text-grey-400 placeholder:cc-text-sm cc-border cc-border-neutral-300 focus:cc-border-primary-100 cc-outline-none cc-text-sm",
  disabled:
    "cc-bg-neutral-100 cc-text-neutral-400 placeholder:cc-text-neutral-400 placeholder:cc-text-sm !cc-border !cc-border-neutral-300 cc-outline-none cc-text-sm",
  error:
    "placeholder:cc-text-grey-400 placeholder:cc-text-sm cc-border cc-border-error-200 cc-outline-none cc-text-sm",
  success:
    "placeholder:cc-text-grey-400 placeholder:cc-text-sm cc-border cc-border-success-200 cc-outline-none cc-text-sm",
};

/* HELPERS TEXT STYLES (ERROR/SUCCESS/HELPER) */
export const CcTextFieldHelperStyles = {
  default: "cc-text-xs cc-font-regular cc-mt-1",
  error: "cc-text-error-500",
  succes: "cc-text-success-500",
  helper: "cc-text-neutral-500",
};

/* ICON STYLES */
export const CcTextFieldIconStyles = {
  default: "cc-absolute cc-right-3 cc-text-3xl cc-top-2",
  success: "icon-check-circle cc-text-success-500",
  error: "icon-multiply-circle cc-text-error-500",
};
