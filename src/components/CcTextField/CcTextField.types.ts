export interface CCTextFieldProps {
  name?: string;
  value?: string;
  onChange?: () => void;
  id?: string;
  disabled?: boolean;
  onBlur?: () => void;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  success?: boolean;
  successText?: string;
  helperText?: string;
  placeholder?: string;
}
