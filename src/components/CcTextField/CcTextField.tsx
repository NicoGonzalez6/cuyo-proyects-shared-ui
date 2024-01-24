import React from "react";

import { CCTextFieldProps } from "./CcTextField.types";
import {
  CcTextFieldLabelStyles,
  CcTextFieldInputTextStyles,
  CcTextFieldDefaultInputStyles,
  CcTextFieldIconStyles,
  CcTextFieldHelperStyles,
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
          disabled && CcTextFieldInputTextStyles.disabled,
          error && CcTextFieldInputTextStyles.error,
          success && CcTextFieldInputTextStyles.success,
          !error && !success && !disabled && CcTextFieldInputTextStyles.default
        )}
        placeholder={placeholder}
      />
      {!disabled && (success || error) && (
        <i
          data-testid="CCTextFieldIcon"
          className={clsx(
            CcTextFieldIconStyles.default,
            success && CcTextFieldIconStyles.success,
            error && CcTextFieldIconStyles.error
          )}
        />
      )}
    </div>
    {error && !disabled && !success && (
      <p
        data-testid="CCTextFieldErrorLabel"
        className={clsx(
          CcTextFieldHelperStyles.default,
          CcTextFieldHelperStyles.error
        )}
      >
        {errorMessage}
      </p>
    )}
    {success && !disabled && !error && (
      <p
        data-testid="CCTextFieldSuccessLabel"
        className={clsx(
          CcTextFieldHelperStyles.default,
          CcTextFieldHelperStyles.succes
        )}
      >
        {successText}
      </p>
    )}
    {((!error && !success) || disabled) && helperText && (
      <p
        data-testid="CCTextFieldHelperText"
        className={clsx(
          CcTextFieldHelperStyles.default,
          CcTextFieldHelperStyles.helper
        )}
      >
        {helperText}
      </p>
    )}
  </div>
);
