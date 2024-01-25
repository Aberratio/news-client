import { useArticlesApi } from "common/api/useArticlesApi";
import { useState } from "react";
import { ArticleSummarizationItem } from "../types/ArticleSummarizationItem";
import { GetArticlesLastResponse } from "common/api/responses/GetArticlesLastResponse";
import {
  buildArticlePath,
  buildAuthorPath,
  buildCategoryPath,
  buildPhotoPath,
} from "common/builders/buildPath";
import { formatDateToString } from "common/builders/buildDate";
import { CategoryEnum } from "../types/CategoryItem";

export const useLastArticles = () => {
  const { getLastArticlesDetails } = useArticlesApi();
  const [articles, setArticles] = useState<ArticleSummarizationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadArticles = (categoryId?: number) => {
    getLastArticlesDetails(categoryId).then((data) => {
      setArticles(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    articles,
    isLoading,
    loadArticles,
  };
};

const mapData = (data: GetArticlesLastResponse[]): ArticleSummarizationItem[] =>
  data.map((item: GetArticlesLastResponse) => {
    return {
      author: {
        id: item.author.id,
        name: item.author.name,
        path: buildAuthorPath(item.author.id),
      },
      category: {
        id: item.category,
        name: CategoryEnum[item.category],
        path: buildCategoryPath(item.category),
      },
      createdOn: formatDateToString(item.createdOn),
      id: item.id,
      path: buildArticlePath(item.id),
      photo: {
        description: item.photo.description,
        path: buildPhotoPath(item.photo.path),
      },
      statistics: {
        comments: 0,
        dislikes: 0,
        likes: 0,
        views: item.views || 0,
      },
      title: item.title,
    };
  });
