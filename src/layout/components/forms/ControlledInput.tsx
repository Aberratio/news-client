import { ChangeEvent, RefObject } from "react";
import { Control, Controller } from "react-hook-form";

import { BasicInput, BasicInputProps } from "./common/BasicInput";

interface InputProps extends Omit {
  control: Control;
  innerRef?: RefObject;
}

export const Input = ({
  control,
  defaultValue,
  disabled = false,
  error,
  innerRef,
  inputSize = "large",
  label,
  name,
  placeholder,
  required,
  onBlur,
  onChange,
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange: onFieldChange, value = undefined } }) => (
        <BasicInput
          defaultValue={defaultValue}
          disabled={disabled}
          error={error}
          innerRef={innerRef}
          inputSize={inputSize}
          label={label}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onBlur={onBlur}
          onChange={(e: ChangeEvent) => {
            onFieldChange(e);

            if (onChange) {
              onChange(e);
            }
          }}
        />
      )}
    />
  );
};
