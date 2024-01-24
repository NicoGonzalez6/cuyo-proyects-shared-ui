export const CcTabStyles = {
  default: `cc-py-4 cc-px-5 cc-h-[51px] cc-min-w-[100px] cc-translate-y-[2px] cc-flex cc-justify-center cc-gap-2 cc-items-center cc-relative after:cc-content-[''] after:cc-transition-all after:cc-absolute after:cc-w-0 after:cc-bottom-0 after:cc-left-0`,
  active:
    "cc-text-primary-500 after:cc-bg-primary-400 after:cc-h-[2px] after:!cc-w-full",
  hover:
    "cc-text-neutral-700 after:cc-bg-primary-400 after:cc-h-[2px] hover:after:!cc-w-full",
  disabled:
    "cc-text-neutral-300 after:cc-bg-neutral-300 after:cc-h-[2px] after:!cc-w-full",
};

export const CcNotificationStyles = {
  default:
    "cc-min-w-6 cc-min-h-6 cc-rounded-full cc-text-sm cc-flex cc-justify-center cc-items-center cc-bg-neutral-100 cc-px-1",
  active: "cc-bg-primary-500 cc-text-white",
  disabled: "!cc-text-white !cc-bg-neutral-200",
};

export const CcIconStyles = {
  default: "cc-text-2xl cc-translate-y-[2px]",
  disabled: "cc-text-neutral-300",
};
