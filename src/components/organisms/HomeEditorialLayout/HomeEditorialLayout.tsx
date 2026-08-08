"use client";

import { Anchor, Image, Text } from "@mantine/core";
import { buildTabPath } from "core/builders/buildPath";
import Link from "next/link";
import styled from "styled-components";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";
import { CommentSummaryItem } from "types/CommentSummaryItem";
import { FirstSiteItem } from "types/FirstSiteItem";
import {
  HomepageSectionKey,
  PublicationSettingsItem,
} from "types/PublicationSettingsItem";
import { TabItem } from "types/TabItem";

import { ArticleCardFooter } from "components/molecules/ArticleCardFooter/ArticleCardFooter";
import ArticlesOverviewBox from "components/molecules/ArticlesOverviewBox";
import { LastCommentsContent } from "components/organisms/SideBar/last-comments/LastCommentsContent";

import PinnedArticle from "../PinnedArticle";

interface HomeEditorialLayoutProps {
  articles: ArticleSummaryItem[];
  comments: CommentSummaryItem[];
  firstSite?: FirstSiteItem;
  pinnedArticle?: ArticleSummaryItem;
  publicationSettings: PublicationSettingsItem;
  tabs: TabItem[];
}

const defaultOrder: HomepageSectionKey[] = [
  "lead",
  "latest",
  "discussed",
  "categories",
  "popular",
  "latestIssue",
];

export const HomeEditorialLayout = ({
  articles,
  comments,
  firstSite,
  pinnedArticle,
  publicationSettings,
  tabs,
}: HomeEditorialLayoutProps) => {
  const settings = publicationSettings.homepageLayout;
  const leadArticle = pinnedArticle ?? articles[0];
  const leadRailArticles = articles.slice(0, 4);
  const latestArticles = articles.slice(0, settings.latestLimit ?? 12);
  const discussedArticles = [...articles]
    .sort((first, second) => second.comments - first.comments)
    .slice(0, settings.discussedLimit ?? 4);
  const popularArticles = [...articles]
    .sort((first, second) => second.views - first.views)
    .slice(0, settings.popularLimit ?? 4);
  const sectionOrder = settings.sectionOrder?.length
    ? settings.sectionOrder
    : defaultOrder;

  const renderSection = (section: HomepageSectionKey) => {
    switch (section) {
      case "lead":
        return leadArticle ? (
          <LeadSection key={section} data-testid="homepage-lead">
            <SectionKicker>{settings.leadLabel ?? "Temat dnia"}</SectionKicker>
            <LeadGrid>
              <LeadStory>
                <PinnedArticle article={leadArticle} />
              </LeadStory>
              {leadRailArticles.length > 0 && (
                <Rail aria-label={settings.latestLabel ?? "Najnowsze"}>
                  <RailTitle>{settings.latestLabel ?? "Najnowsze"}</RailTitle>
                  <CompactList>
                    {leadRailArticles.map((article) => (
                      <ArticleCardFooter
                        key={article.id}
                        dataTestId="homepage-rail-article"
                        item={article}
                        showLead={false}
                        showShare={false}
                        variant="horizontal"
                      />
                    ))}
                  </CompactList>
                </Rail>
              )}
            </LeadGrid>
          </LeadSection>
        ) : null;
      case "latest":
        return latestArticles.length > 0 ? (
          <EditorialSection key={section}>
            <SectionHeader title={settings.latestLabel ?? "Najnowsze"} />
            <ArticlesOverviewBox
              items={latestArticles}
              dataTestId="articles-overview-box-latest"
            />
          </EditorialSection>
        ) : null;
      case "discussed":
        return settings.showDiscussedSection !== false &&
          (comments.length > 0 || discussedArticles.length > 0) ? (
          <EditorialSection key={section} data-testid="homepage-discussed">
            <SectionHeader
              title={settings.discussedLabel ?? "Dyskutowane teraz"}
            />
            <DiscussionGrid>
              {comments.length > 0 && (
                <Panel>
                  <PanelTitle>Ostatnie komentarze</PanelTitle>
                  <LastCommentsContent comments={comments} />
                </Panel>
              )}
              {discussedArticles.length > 0 && (
                <Panel>
                  <PanelTitle>Najwięcej komentarzy</PanelTitle>
                  <CompactList>
                    {discussedArticles.map((article) => (
                      <ArticleCardFooter
                        key={article.id}
                        dataTestId="homepage-discussed-article"
                        item={article}
                        showLead={false}
                        showShare={false}
                        variant="horizontal"
                      />
                    ))}
                  </CompactList>
                </Panel>
              )}
            </DiscussionGrid>
          </EditorialSection>
        ) : null;
      case "categories":
        return settings.showCategorySections !== false ? (
          <CategorySections key={section}>
            {tabs.map((tab) => {
              const tabArticles = articles
                .filter((article) => article.category.tabSlug === tab.tabSlug)
                .slice(0, settings.categorySectionArticleLimit ?? 4);

              if (tabArticles.length === 0) {
                return null;
              }

              return (
                <EditorialSection key={tab.tabSlug}>
                  <SectionHeader
                    href={buildTabPath(tab.tabSlug)}
                    title={tab.name}
                  />
                  <CategoryGrid>
                    {tabArticles.map((article) => (
                      <ArticleCardFooter
                        key={article.id}
                        dataTestId="homepage-category-article"
                        item={article}
                        variant="compact"
                      />
                    ))}
                  </CategoryGrid>
                </EditorialSection>
              );
            })}
          </CategorySections>
        ) : null;
      case "popular":
        return settings.showPopularSection !== false &&
          popularArticles.length > 0 ? (
          <EditorialSection key={section}>
            <SectionHeader
              title={settings.popularLabel ?? "Najczęściej czytane"}
            />
            <PopularGrid>
              {popularArticles.map((article) => (
                <ArticleCardFooter
                  key={article.id}
                  dataTestId="homepage-popular-article"
                  item={article}
                  showLead={false}
                  showShare={false}
                  variant="horizontal"
                />
              ))}
            </PopularGrid>
          </EditorialSection>
        ) : null;
      case "latestIssue":
        return settings.showLatestIssue !== false && firstSite ? (
          <LatestIssueSection key={section} data-testid="homepage-latest-issue">
            <LatestIssueText>
              <SectionKicker>
                {settings.latestIssueLabel ?? publicationSettings.latestIssue.title}
              </SectionKicker>
              <LatestIssueTitle>{publicationSettings.latestIssue.title}</LatestIssueTitle>
              <Text size="sm" c="dimmed">
                {publicationSettings.latestIssue.releaseDatePrefix}{" "}
                <strong>{firstSite.releaseDate}</strong>
              </Text>
            </LatestIssueText>
            <LatestIssueLink href={firstSite.image.path}>
              <Image
                src={firstSite.image.path}
                alt={publicationSettings.latestIssue.imageAlt}
                radius="sm"
              />
            </LatestIssueLink>
          </LatestIssueSection>
        ) : null;
      default:
        return null;
    }
  };

  return <HomeStack>{sectionOrder.map(renderSection)}</HomeStack>;
};

interface SectionHeaderProps {
  href?: string;
  title: string;
}

const SectionHeader = ({ href, title }: SectionHeaderProps) => (
  <HeaderRow>
    <SectionTitle>{title}</SectionTitle>
    {href && (
      <Anchor component={Link} href={href} size="sm">
        Zobacz dział
      </Anchor>
    )}
  </HeaderRow>
);

const HomeStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding-bottom: 32px;
`;

const LeadSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionKicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.general.primaryColor};
  font-family: ${({ theme }) => theme.customFonts.bodyM.fontFamily};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
`;

const LeadGrid = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;

    @media screen and (min-width: ${theme.breakpoints.tabletL}) {
      grid-template-columns: minmax(0, 2fr) minmax(280px, 0.85fr);
      align-items: stretch;
    }
  `}
`;

const LeadStory = styled.div`
  min-width: 0;
`;

const Rail = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 2px;
`;

const RailTitle = styled.h2`
  margin: 0;
  color: #1f2933;
  font-family: ${({ theme }) => theme.customFonts.body.fontFamily};
  font-size: 22px;
  line-height: 1.15;
`;

const CompactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EditorialSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid
    ${({ theme }) => theme.customTheme.publicationVisual.sectionHeaderBorderColor};
  padding-bottom: 8px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: #111827;
  font-family: ${({ theme }) => theme.customFonts.body.fontFamily};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.15;
`;

const DiscussionGrid = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media screen and (min-width: ${theme.breakpoints.tabletL}) {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }
  `}
`;

const Panel = styled.div`
  min-width: 0;
  border-top: 2px solid ${({ theme }) => theme.general.primaryColor};
`;

const PanelTitle = styled.h3`
  margin: 12px 0 0;
  color: #1f2933;
  font-family: ${({ theme }) => theme.customFonts.body.fontFamily};
  font-size: 18px;
  line-height: 1.2;
`;

const CategorySections = styled.div`
  display: contents;
`;

const CategoryGrid = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px 20px;

    @media screen and (min-width: ${theme.breakpoints.tabletS}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (min-width: ${theme.breakpoints.desktopS}) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  `}
`;

const PopularGrid = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    gap: 0 24px;

    @media screen and (min-width: ${theme.breakpoints.tabletS}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `}
`;

const LatestIssueSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 96px;
  gap: 16px;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid #e6e8eb;
  border-bottom: 1px solid #e6e8eb;
`;

const LatestIssueText = styled.div`
  min-width: 0;
`;

const LatestIssueTitle = styled.h2`
  margin: 4px 0;
  color: #111827;
  font-family: ${({ theme }) => theme.customFonts.body.fontFamily};
  font-size: 22px;
  line-height: 1.15;
`;

const LatestIssueLink = styled.a`
  display: block;
  min-width: 0;
`;
