import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export interface BreadCrumbsItem {
  name: string;
  path: string;
}

interface BreadCrumbsProps {
  breadcrumbs: BreadCrumbsItem[];
}

const BreadCrumbs = ({ breadcrumbs }: BreadCrumbsProps) => {
  const length = breadcrumbs.length - 1;

  return (
    <Wrapper>
      <Container>
        <Row>
          {breadcrumbs.slice(0, length).map((item) => {
            return (
              <>
                <Path href={item.path}>
                  <Typography variant="small" isCapitalized>
                    {item.name}
                  </Typography>
                </Path>
                <Arrow direction="right" />
              </>
            );
          })}

          <Current>
            <Typography variant="small">{breadcrumbs[length]?.name}</Typography>
          </Current>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default BreadCrumbs;

const Wrapper = styled.div`
  margin: 12px auto;
  padding: 0;
  width: 100%;
  max-width: 1080px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 8px 0px;
  background-color: #fff;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  padding-right: 30px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const Current = styled.span`
  float: left;
  display: flex;
  color: rgb(184, 0, 0);
`;

const Path = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  float: left;
  display: flex;
  cursor: pointer;
`;
