import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export const Box = () => {
  return (
    <Wrapper>
      <Header>
        <Typography variant="h3">Aktualności</Typography>
        <SeeMore href="/publications/category.php?ID_category=1&ID_page=1">
          <Typography>Zobacz wszystkie</Typography>
          <Arrow direction="right" />
        </SeeMore>
      </Header>
      <Container>
        <Item>
          <ItemContainer>
            <ImageWrapper href="/publications/publication.php?ID_publication=594">
              <Image src="/images/article/barycz.jpg" />
            </ImageWrapper>
            <ItemBody>
              <TitleWrapper>
                <Typography> Sytuacja na rzece Barycz jest stabilna</Typography>
              </TitleWrapper>
              <MetadataWrapper>
                <AuthorWrapper href="#">
                  <Typography>Agnieszka Kaczmarek</Typography>
                </AuthorWrapper>
                <Typography>- 2024-01-04</Typography>
              </MetadataWrapper>
              <StatisticsWrapper></StatisticsWrapper>
            </ItemBody>
          </ItemContainer>
        </Item>
      </Container>
    </Wrapper>
  );
};

const StatisticsWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AuthorWrapper = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  color: #888;
  font-family: Roboto-Bold;
  font-size: 12px;
  line-height: 1.7;
`;

const MetadataWrapper = styled.div`
  padding-bottom: 8px;
  color: #888;
`;

const TitleWrapper = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  color: #222;
  font-family: Roboto-Regular;
  font-size: 20px;
  line-height: 1.25;
`;

const ItemBody = styled.div`
  padding-top: 16px;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 25px;
`;

const ItemContainer = styled.div`
  margin-bottom: 45px;
`;

const ImageWrapper = styled.a`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  display: block;
`;

const Image = styled.img`
  vertical-align: middle;
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  height: 180px;
  width: 100%;
`;

const Wrapper = styled.div`
  padding-bottom: 25px;
`;

const Container = styled.div`
  padding-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid #e6e6e6;
  padding: 0 18px;
  position: relative;
  justify-content: space-between;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background-color: #15a752;
  }
`;

const SeeMore = styled.a`
  display: flex;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  padding-left: 10px;
  white-space: nowrap;
  color: #999;
`;
