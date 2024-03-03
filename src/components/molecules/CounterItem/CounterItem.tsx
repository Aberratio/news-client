"use client";

import styled from "styled-components";
import Link from "next/link";
import { Comments } from "components/molecules/Icons/Comments";
import Typography from "components/atoms/Typography";
import { Eye } from "components/molecules/Icons/Eye";
import { Thumb } from "components/molecules/Icons/Thumb";

export type CounterItemType = "views" | "comments" | "likes" | "dislikes";

interface CounterItemProps {
  isActive?: boolean;
  count?: number;
  href?: string;
  type: CounterItemType;
  onClick?: () => void;
}

export const CounterItem = ({
  isActive,
  count = 0,
  href,
  type,
  onClick,
}: CounterItemProps) => {
  const getIcon = (type: CounterItemType) => {
    switch (type) {
      case "views":
        return <Eye />;
      case "comments":
        return <Comments />;
      case "likes":
        return <ThumbUp isActive={isActive} />;
      case "dislikes":
        return <ThumbDown isActive={isActive} direction="right" />;
    }
  };

  if (type === "comments" && !!href) {
    return (
      <LinkItem href={href ?? "#"}>
        {getIcon(type)}
        <Counter>
          <Typography variant="small">{count}</Typography>
        </Counter>
      </LinkItem>
    );
  }

  return (
    <Item $isClickable={!!onClick} onClick={onClick}>
      {getIcon(type)}
      <Counter>
        <Typography variant="small">{count}</Typography>
      </Counter>
    </Item>
  );
};

const ThumbDown = styled(Thumb)`
  margin-top: 4px;
`;

const ThumbUp = styled(Thumb)`
  margin-bottom: 4px;
`;
const Counter = styled.div``;

const LinkItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 0 8px 0 0;
  cursor: pointer;
`;

const Item = styled.div<{ $isClickable?: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 0 8px 0 0;

  ${({ $isClickable }) =>
    $isClickable &&
    `
    cursor: pointer;
  `}
`;
