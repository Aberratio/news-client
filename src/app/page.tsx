export const dynamic = "force-dynamic";

import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";
import { fetchPinnedArticle } from "core/api/articles/fetchPinnedArticle";
import { fetchLastComments } from "core/api/comments/fetchLastComments";
import { fetchOrganization } from "core/api/settings/fetchOrganization";
import { publicationSettingsFallback } from "core/api/settings/publicationSettingsFallback";
import { isCommentsPolicyEnabled } from "core/policies/publicationPolicies";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import { HomeEditorialLayout } from "components/organisms/HomeEditorialLayout/HomeEditorialLayout";
import { HomePageTemplate } from "components/templates/HomePageTemplate/HomePageTemplate";

export const revalidate = 60;
export const fetchCache = "force-no-store";

const HomePage = async () => {
  const [articlesResult, organizationResult, pinnedArticleResult] =
    await Promise.allSettled([
      fetchArticlesLast({
        limit: 60,
        page: 1,
        ignorePinnedPost: true,
      }),
      fetchOrganization(),
      fetchPinnedArticle(),
    ]);

  const articles =
    articlesResult.status === "fulfilled" ? articlesResult.value : [];
  const organization =
    organizationResult.status === "fulfilled" ? organizationResult.value : null;
  const pinnedArticle: ArticleSummaryItem | undefined =
    pinnedArticleResult.status === "fulfilled"
      ? pinnedArticleResult.value
      : undefined;
  const publicationSettings =
    organization?.publicationSettings ?? publicationSettingsFallback;
  const recentCommentsSettings = publicationSettings.recentComments;
  const commentsEnabled =
    isCommentsPolicyEnabled(publicationSettings) &&
    recentCommentsSettings?.enabled !== false;
  const comments = commentsEnabled
    ? await fetchLastComments(recentCommentsSettings?.limit)
    : [];

  if (!articles.length && !pinnedArticle) {
    return <p>Brak artykułów</p>;
  }

  return (
    <HomePageTemplate>
      <HomeEditorialLayout
        articles={articles}
        comments={comments}
        firstSite={organization?.firstSite}
        pinnedArticle={pinnedArticle}
        publicationSettings={publicationSettings}
        tabs={organization?.tabs ?? []}
      />
    </HomePageTemplate>
  );
};

export default HomePage;
