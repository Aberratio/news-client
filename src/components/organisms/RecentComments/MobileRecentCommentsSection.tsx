"use client";

import { buildArticlePath } from "core/builders/buildPath";
import Link from "next/link";
import styled from "styled-components";
import { CommentSummaryItem } from "types/CommentSummaryItem";

interface MobileRecentCommentsSectionProps {
  comments: CommentSummaryItem[];
  title: string;
}

export const MobileRecentCommentsSection = ({
  comments,
  title,
}: MobileRecentCommentsSectionProps) => {
  if (comments.length === 0) return null;

  return (
    <Section
      data-testid="mobile-recent-comments"
      aria-labelledby="recent-comments-title"
    >
      <Header>
        <Kicker>Komentarze</Kicker>
        <Title id="recent-comments-title">{title}</Title>
      </Header>
      <List>
        {comments.map((comment) => (
          <Item key={comment.id}>
            <ArticleLink
              href={`${buildArticlePath(comment.articleSlug)}#comments`}
            >
              {comment.articleTitle}
            </ArticleLink>
            <Meta>
              <strong>{comment.author}</strong>
              <span>{comment.date}</span>
            </Meta>
            <Excerpt>{comment.text}</Excerpt>
          </Item>
        ))}
      </List>
    </Section>
  );
};

const Section = styled.section`
  ${({ theme }) => `
    display: block;
    margin: 28px 0 8px;
    padding: 18px 0 6px;
    border-top: 1px solid #e6e8eb;
    border-bottom: 1px solid #e6e8eb;

    @media screen and (min-width: ${theme.breakpoints.tabletL}) {
      display: none;
    }
  `}
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`;

const Kicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.general.primaryColor};
  font-family: ${({ theme }) => theme.customFonts.bodyM.fontFamily};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  color: #1f2933;
  font-family: ${({ theme }) => theme.customFonts.body.fontFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-align: right;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 0;
  border-top: 1px solid #eef0f2;
  list-style: none;
`;

const ArticleLink = styled(Link)`
  color: ${({ theme }) => theme.general.primaryColor};
  font-family: ${({ theme }) => theme.customFonts.body.fontFamily};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  text-decoration: none;
  overflow-wrap: anywhere;
`;

const Meta = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin: 0;
  color: #5f6872;
  font-family: ${({ theme }) => theme.customFonts.bodyM.fontFamily};
  font-size: 13px;
  line-height: 1.25;
`;

const Excerpt = styled.p`
  margin: 0;
  color: #202124;
  font-family: ${({ theme }) => theme.customFonts.bodyM.fontFamily};
  font-size: 14px;
  line-height: 1.45;
  overflow-wrap: anywhere;
`;
