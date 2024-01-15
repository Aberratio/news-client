import { useArticlesApi } from "common/api/useArticlesApi";
import { useState } from "react";
import { GetArticleResponse } from "common/api/responses/GetArticleResponse";
import { FullArticleItem } from "./items/FullArticleItem";
import { formatDateToString } from "common/builders/buildDate";
import {
  buildAuthorPath,
  buildCategoryPath,
  buildArticlePath,
  buildPhotoPath,
} from "common/builders/buildPath";
import { CategoryEnum } from "./items/CategoryItem";

export const useArticle = () => {
  const { getArticleDetails } = useArticlesApi();
  const [article, setArticle] = useState<FullArticleItem>(
    {} as FullArticleItem,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadArticle = (articleId: number) => {
    getArticleDetails(articleId).then((data) => {
      setArticle(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    article,
    isLoading,
    loadArticle,
  };
};

const mapData = (data: GetArticleResponse): FullArticleItem => {
  return {
    author: {
      id: data.author.id,
      name: data.author.name,
      path: buildAuthorPath(data.author.id),
    },
    body: data.body,
    category: {
      id: data.category,
      name: CategoryEnum[data.category],
      path: buildCategoryPath(data.category),
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
      comments: data.comments?.length || 0,
      dislikes: 0,
      likes: 0,
      views: data.views || 0,
    },
    title: data.title,
  };
};
