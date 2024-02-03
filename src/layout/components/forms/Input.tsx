import {
  ReactElement,
  ForwardedRef,
  SyntheticEvent,
  ReactNode,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import styled, { css } from "styled-components";

import { FormElementContainer } from "./FormElementContainer";

export interface InputProps {
  defaultValue?: string | number;
  disabled?: boolean;
  error?: ReactNode;
  hint?: ReactNode;
  Icon?: ReactNode;
  innerRef?: ForwardedRef<HTMLInputElement>;
  inputSize?: "large" | "small";
  label?: string;
  max?: string | number;
  min?: string | number;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  selectInput?: boolean;
  step?: number;
  tabIndex?: number;
  type?: string;
  value?: number | string;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  defaultValue,
  disabled,
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
  tabIndex = 0,
  type = "text",
  value = "",
  onChange,
  onBlur,
}: InputProps): ReactElement => {
  const [isError, setIsError] = useState<boolean>(false);
  const labelControl = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target === document.activeElement && selectInput) {
      target.select();
    }
  };

  useEffect(() => {
    setIsError(!!(value && value !== "" && error));
  }, [value, error]);

  return (
    <FormElementContainer
      error={isError ? error : ""}
      formElementName={name}
      hint={hint}
      isDisabled={disabled}
      label={label}
    >
      {!!Icon && <IconWrapper inputSize={inputSize}>{Icon}</IconWrapper>}
      <StyledInput
        defaultValue={defaultValue}
        disabled={disabled}
        $isError={isError}
        name={name}
        max={max}
        min={min}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={innerRef}
        required={required}
        step={step}
        tabIndex={tabIndex}
        type={type}
        value={value}
        onBlur={onBlur ?? labelControl}
        onChange={onChange}
        onFocus={labelControl}
      />
    </FormElementContainer>
  );
};

const IconWrapper = styled.div<{ inputSize: "large" | "small" }>(
  ({ theme: { spaces }, inputSize }) => css`
    position: absolute;
    top: ${inputSize === "small" ? "11.5px" : "36px"};
    right: ${inputSize === "small" ? spaces.sm : "16px"};
    cursor: pointer;

    display: block;
  `
);
interface FormElementStylesProps {
  disabled?: boolean;
  $isError?: boolean;
}

const StyledInput = styled.input<FormElementStylesProps>(
  ({ theme, $isError = false, disabled }) => `
        border-radius: ${theme.general.borderRadius};
        
        box-sizing: border-box;
        border-width: ${theme.spaces["3xs"]};
        border: 1px solid #5069A7;

        height: ${theme.spaces["3xl"]};
        width: 100%;
        font-size: ${theme.spaces.lo};
        padding: 0 ${theme.spaces.md};

        background-color: ${theme.colors.white};
        color: ${theme.colors.black};

        &::placeholder {
            color: ${theme.colors.gray};
        }

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
        }

        &:focus {
            background-color: ${theme.colors.white};
        }

        &:hover {
            ${!disabled && `border-color: ${theme.colors.gray};`}
        }

        border-color: ${
          $isError ? theme.general.errorMessageColor : `#5069A7`
        } !important;
    `
);
