import React from "react";

import { CCTextFieldProps } from "./CcTextField.types";
import {
  CcTextFieldLabelStyles,
  CcTextFieldHelperTextStyles,
  CcTextFieldInputTextStyles,
  CcTextFieldErrorTextStyles,
  CcTextFieldSuccessTextStyles,
  CcTextFieldDefaultInputStyles,
  CcTextFieldHelperDefaultSyles,
} from "./CcTextField.styles";
import clsx from "clsx";

export const CcTextField: React.FC<CCTextFieldProps> = ({
  disabled,
  error,
  errorMessage,
  id,
  label,
  name,
  onBlur,
  onChange,
  success,
  successText,
  value,
  helperText,
  placeholder,
}) => (
  <div data-testid="CCTextField">
    {label && (
      <label className={CcTextFieldLabelStyles} data-testid="CCTextFieldLabel">
        {label}
      </label>
    )}
    <div className="cc-relative">
      <input
        data-testid="CCTextFieldInput"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        value={value}
        disabled={disabled}
        className={clsx(
          CcTextFieldDefaultInputStyles,
          disabled && CcTextFieldInputTextStyles.disabledStyles,
          error && CcTextFieldInputTextStyles.errorStyles,
          success && CcTextFieldInputTextStyles.successStyles,
          !error &&
            !success &&
            !disabled &&
            CcTextFieldInputTextStyles.defaultStyles
        )}
        placeholder={placeholder}
      />
      {!disabled && (success || error) && (
        <i
          data-testid="CCTextFieldIcon"
          className={clsx(
            "cc-absolute cc-right-[16px] cc-text-3xl cc-top-2",
            { "icon-check-circle cc-text-success-500": success },
            { "icon-multiply-circle cc-text-error-500": error }
          )}
        />
      )}
    </div>
    {error && !disabled && !success && (
      <p
        data-testid="CCTextFieldErrorLabel"
        className={clsx(
          CcTextFieldHelperDefaultSyles,
          CcTextFieldErrorTextStyles
        )}
      >
        {errorMessage}
      </p>
    )}
    {success && !disabled && !error && (
      <p
        data-testid="CCTextFieldSuccessLabel"
        className={clsx(
          CcTextFieldHelperDefaultSyles,
          CcTextFieldSuccessTextStyles
        )}
      >
        {successText}
      </p>
    )}
    {((!error && !success) || disabled) && helperText && (
      <p
        data-testid="CCTextFieldHelperText"
        className={clsx(
          CcTextFieldHelperDefaultSyles,
          CcTextFieldHelperTextStyles
        )}
      >
        {helperText}
      </p>
    )}
  </div>
);
