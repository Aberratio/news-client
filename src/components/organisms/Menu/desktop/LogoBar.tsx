import styled from "styled-components";

export const LogoBar = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <Image src="/public/icons/logo.png" alt="logo" />
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1080px;
    height: 100px;

    margin: auto;
    padding: ${theme.spaces.lg} 0 ${theme.spaces.sm} 0;
  `}
`;

const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding-bottom: ${theme.spaces.md};
  `}
`;

const Link = styled.a`
  display: flex;
  justify-content: center;

  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  cursor: pointer;
`;

const Image = styled.img`
  vertical-align: middle;
  border-style: none;
  width: 90%;
`;
