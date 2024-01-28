import { ChangeEvent, RefObject } from "react";
import { Control, Controller } from "react-hook-form";

import { InputProps, Input } from "./Input";

interface ControlledInputProps extends Omit<InputProps, "value" | "ref"> {
  control: Control<any>;
  innerRef?: RefObject<HTMLInputElement>;
}

export const ControlledInput = ({
  control,
  defaultValue,
  disabled = false,
  error,
  hint,
  Icon,
  innerRef,
  inputSize = "large",
  label,
  max,
  min,
  name,
  placeholder,
  readOnly = false,
  required,
  selectInput,
  step,
  type = "text",
  onBlur,
  onChange,
}: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange: onFieldChange, value = undefined } }) => (
        <Input
          defaultValue={defaultValue}
          disabled={disabled}
          error={error}
          hint={hint}
          Icon={Icon}
          innerRef={innerRef}
          inputSize={inputSize}
          label={label}
          max={max}
          min={min}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          selectInput={selectInput}
          step={step}
          type={type}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          value={value}
          onBlur={onBlur}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onFieldChange(e);
            onChange && onChange(e);
          }}
        />
      )}
    />
  );
};
