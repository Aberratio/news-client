import styled from "styled-components";

export const LogoBar = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="#">
          <Image src="/public/icons/logo.png" alt="logo" />
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1080px;
  height: 100px;

  margin: auto;
  padding: 25px 0 10px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-bottom: 15px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  vertical-align: middle;
  border-style: none;
  width: 100%;
`;
