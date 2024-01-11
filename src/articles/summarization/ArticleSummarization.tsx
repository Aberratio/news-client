import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { StatisticBar } from "./StatisticBar";

export const ArticleSummarization = () => {
  return (
    <Container>
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
          <StatisticBar />
        </ItemBody>
      </ItemContainer>
    </Container>
  );
};

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

const Container = styled.div`
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
