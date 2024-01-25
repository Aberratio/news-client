import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

interface BoxHeaderProps {
  name: string;
  children?: any;
}

export const BoxHeader = ({ name, children }: BoxHeaderProps) => {
  return (
    <Wrapper>
      <Typography variant="h2" isCapitalized>
        {name}
      </Typography>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 18px;
  position: relative;
  justify-content: space-between;
  max-width: min(90%, 1030px);
  margin: auto;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 6px;
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background-color: #15a752;
  }
`;
