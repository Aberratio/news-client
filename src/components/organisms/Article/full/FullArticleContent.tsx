"use client";

import { MouseEvent, Suspense } from "react";
import { Skeleton } from "@nextui-org/react";
import {
  IconBrandFacebook,
  IconLink,
  IconMessageCircle,
} from "@tabler/icons-react";
import { canCommentOnPost } from "core/policies/publicationPolicies";
import { Font } from "core/styles/types/CustomFonts";
import Link from "next/link";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import styled from "styled-components";
import { ArticleItem } from "types/ArticleItem";

import Typography from "components/atoms/Typography";
import MetadataBar from "components/molecules/MetadataBar";
import { PortableText } from "components/molecules/PortableText/PortableText";

import Slider from "../../../molecules/Slider";
import { StatisticArticleBar } from "../StatisticArticleBar";

interface FullArticleProps {
  article: ArticleItem;
  children: React.ReactNode;
}

export const FullArticleContent = ({ article, children }: FullArticleProps) => {
  const { publicationSettings } = useOrganizationInfo();
  const commentsEnabled = canCommentOnPost(article, publicationSettings);
  const categoryColor =
    article.category.color || publicationSettings?.brandColors?.primary;

  return (
    <Wrapper data-testid={`full-article`}>
      <Container>
        <KickerWrapper>
          <CategoryLink
            href={article.category.path}
            $categoryColor={categoryColor}
          >
            {article.category.name}
          </CategoryLink>
          {article.category.tabName && (
            <SectionLabel>{article.category.tabName}</SectionLabel>
          )}
        </KickerWrapper>
        <Title>{article.title}</Title>
        <InfoWrapper>
          <MetaColumn>
            <Suspense fallback={<Skeleton />}>
              <MetadataBar name={article.author.name} date={article.createdOn} />
            </Suspense>
            <Suspense fallback={<Skeleton />}>
              <StatisticArticleBar
                articleId={article._id}
                commentsDisabled={article.commentsDisabled}
                reactionsDisabled={article.reactionsDisabled}
                statistics={{
                  comments: article.comments,
                  dislikes: article.dislikes,
                  likes: article.likes,
                  views: article.views,
                }}
              />
            </Suspense>
          </MetaColumn>
          <ArticleActions
            commentsEnabled={commentsEnabled}
            title={article.title}
          />
        </InfoWrapper>
        <MobileActionBar>
          <ArticleActions
            commentsEnabled={commentsEnabled}
            isMobile
            title={article.title}
          />
        </MobileActionBar>
        <LeadWrapper>
          <Typography variant="article" dataTestId="lead">
            {article.lead}
          </Typography>
        </LeadWrapper>
        <Suspense fallback={<Skeleton />}>
          <Slider images={article.photos} />
        </Suspense>
        <BodyWrapper data-testid="body">
          <Suspense fallback={<Skeleton />}>
            <PortableText value={article.body} variant="article" />
          </Suspense>
        </BodyWrapper>
      </Container>
      {children}
    </Wrapper>
  );
};

interface ArticleActionsProps {
  commentsEnabled: boolean;
  isMobile?: boolean;
  title: string;
}

const ArticleActions = ({
  commentsEnabled,
  isMobile = false,
  title,
}: ArticleActionsProps) => {
  const shareOnFacebook = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Actions $isMobile={isMobile} aria-label="Akcje artykułu">
      {commentsEnabled && (
        <ActionLink href="#comments" aria-label="Przejdź do komentarzy">
          <IconMessageCircle size={18} stroke={1.7} />
          <ActionLabel>Komentarze</ActionLabel>
        </ActionLink>
      )}
      <ActionLink
        href="#"
        aria-label={`Udostępnij na Facebooku: ${title}`}
        onClick={shareOnFacebook}
      >
        <IconBrandFacebook size={18} stroke={1.7} />
        <ActionLabel>Udostępnij</ActionLabel>
      </ActionLink>
      <ActionButton type="button" aria-label="Kopiuj link" onClick={copyLink}>
        <IconLink size={18} stroke={1.7} />
        <ActionLabel>Kopiuj link</ActionLabel>
      </ActionButton>
    </Actions>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 1px;
  padding: 0 12px;
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin: 0 auto;
`;

const KickerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 4px 0 12px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 18px 0 0;
  padding: 16px 0 18px;
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.customTheme.general.primaryColor} 18%, transparent);
  border-bottom: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.customTheme.general.primaryColor} 18%, transparent);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const LeadWrapper = styled.div`
  max-width: 700px;
  margin: 30px 0 34px;
  display: flex;
  flex-direction: column;

  p {
    color: #303030;
    font-weight: 300;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    margin: 38px 0 42px;
  }
`;

const BodyWrapper = styled.div`
  max-width: 700px;
  margin: 42px auto 56px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const fontStyles = ({ fontFamily, fontSize, fontWeight, lineHeight }: Font) => `
  font-family: ${fontFamily};
  ${fontSize ? `font-size: ${fontSize};` : ""}
  ${fontWeight ? `font-weight: ${fontWeight};` : ""}
  ${lineHeight ? `line-height: ${lineHeight};` : ""}
`;

const Title = styled.h1`
  ${({ theme }) => fontStyles(theme.customFonts.titleM)};
  max-width: 760px;
  margin: 0;
  color: #111;
  line-height: 1.16;
  overflow-wrap: anywhere;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    ${({ theme }) => fontStyles(theme.customFonts.title)};
    line-height: 1.12;
  }
`;

const CategoryLink = styled(Link)<{ $categoryColor?: string }>`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  max-width: 100%;
  padding: 6px 10px;
  border: 1px solid
    color-mix(in srgb, ${({ $categoryColor }) => $categoryColor ?? "var(--publication-primary)"} 44%, transparent);
  border-radius: 999px;
  color: ${({ $categoryColor }) => $categoryColor ?? "var(--publication-primary)"};
  font-family: Spectral, sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const SectionLabel = styled.span`
  color: #6f6f6f;
  font-family: Spectral, sans-serif;
  font-size: 0.82rem;
  line-height: 1.2;
`;

const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

const Actions = styled.nav<{ $isMobile: boolean }>`
  display: ${({ $isMobile }) => ($isMobile ? "flex" : "none")};
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    display: ${({ $isMobile }) => ($isMobile ? "none" : "flex")};
  }
`;

const actionStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 38px;
  max-width: 100%;
  padding: 8px 10px;
  border: 1px solid color-mix(in srgb, var(--publication-primary) 22%, transparent);
  border-radius: 999px;
  background: #fff;
  color: #1f1f1f;
  font-family: Spectral, sans-serif;
  font-size: 0.86rem;
  line-height: 1.1;
  cursor: pointer;
  transition:
    border-color 160ms ease,
    color 160ms ease,
    background-color 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: var(--publication-primary);
    color: var(--publication-primary);
  }
`;

const ActionLink = styled(Link)`
  ${actionStyles}
`;

const ActionButton = styled.button`
  ${actionStyles}
`;

const ActionLabel = styled.span`
  overflow-wrap: anywhere;
`;

const MobileActionBar = styled.div`
  position: sticky;
  right: 0;
  bottom: 12px;
  left: 0;
  z-index: 8;
  display: flex;
  justify-content: center;
  width: min(100%, 520px);
  margin: 0 auto;
  padding: 8px;
  border: 1px solid color-mix(in srgb, var(--publication-primary) 20%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, #fff 94%, transparent);
  box-shadow: 0 12px 34px rgb(0 0 0 / 14%);
  backdrop-filter: blur(10px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    display: none;
  }
`;
