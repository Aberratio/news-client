import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";
import { GetArticleResponse } from "core/api/responses/GetArticleResponse";
import { formatDateToString } from "core/builders/buildDate";
import {
  buildAuthorPath,
  buildCategoryPath,
  buildTabPath,
  buildArticlePath,
  buildPhotoPath,
} from "core/builders/buildPath";
import { FullArticleItem } from "types/FullArticleItem";
import { fetchArticle } from "./actions";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = mapData(await fetchArticle(Number(params.id)));

  const breadcrumbs: BreadCrumbsItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: article.category.name,
      path: article.category.path,
    },
    {
      name: article.title,
      path: "/article",
    },
  ];

  return (
    <SimplePageTemplate breadcrumbs={breadcrumbs}>
      <FullArticle article={article} />
    </SimplePageTemplate>
  );
};

export default ArticlePage;

const mapData = (data: GetArticleResponse): FullArticleItem => {
  return {
    author: {
      id: data.author.id,
      name: data.author.name,
      path: buildAuthorPath(data.author.id),
    },
    body: data.body,
    category: {
      id: data.category.id,
      name: data.category.name,
      path: buildCategoryPath(data.category.id),
      tabId: data.category.tabId,
      tabName: data.category.tabName,
      tabPath: buildTabPath(data.category.tabId),
    },
    createdOn: formatDateToString(data.createdOn),
    id: data.id,
    isArchived: data.isArchived,
    isPublished: data.isPublished,
    lead: data.lead,
    path: buildArticlePath(data.id),
    photos: data.photos.map((photo) => {
      return {
        description: photo.description,
        path: buildPhotoPath(photo.path),
      };
    }),
    statistics: {
      comments: data.comments?.length ?? 0,
      dislikes: 0,
      likes: 0,
      views: data.views ?? 0,
    },
    title: data.title,
  };
};
