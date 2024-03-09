"use client";

import { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";

import Typography from "components/atoms/Typography";
import { Arrow } from "components/molecules/Icons/Arrow";

import { BreadCrumbsItem } from "./BreadCrumbsItem";

interface BreadCrumbsProps {
  breadcrumbs: BreadCrumbsItem[];
}

export const BreadCrumbsContent = ({ breadcrumbs }: BreadCrumbsProps) => {
  if (breadcrumbs.length === 0) return null;
  const length = breadcrumbs.length - 1;

  return (
    <Wrapper data-testid="breadcrumbs">
      <Container>
        <Row>
          {breadcrumbs.slice(0, length).map((item, index) => {
            return (
              <Fragment key={item.name}>
                <Path href={item.path}>
                  <Typography
                    dataTestId={`breadcrumb-${index}`}
                    isCapitalized
                    variant="small"
                  >
                    {item.name}
                  </Typography>
                </Path>
                <Arrow direction="right" />
              </Fragment>
            );
          })}

          <Current>
            <Typography dataTestId="breadcrumb-current" variant="small">
              {breadcrumbs[length]?.name}
            </Typography>
          </Current>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 12px auto;
  padding: 0;
  width: 100%;
  max-width: 1080px;
  margin-left: 12px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin: auto;
    padding-left: 12px;
    margin-top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 8px 0px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const Path = styled(Link)`
  display: flex;

  float: left;
  cursor: pointer;

  background-color: transparent;

  text-decoration: none;
  touch-action: manipulation;
`;
