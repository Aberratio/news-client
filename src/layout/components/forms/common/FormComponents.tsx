import styled from "styled-components";

export const InputGroup = styled.div`
  ${({ theme }) => `
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: ${theme.spaces.sm};

  input,
  select,
  textarea {
    transition: all 0.3s ease;

    + label > p {
        transition: all 0.3s ease;
        color: ${theme.colors.black};
    }

    &:focus {
        border: ${theme.spaces["3xs"]} solid ${theme.colors.black};
        
        + label > p {
            color: ${theme.colors.black};
        }
    }

    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &::-ms-input-placeholder {
        color: ${theme.colors.black};
    }
  }
  `}
`;
