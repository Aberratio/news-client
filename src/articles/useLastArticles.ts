import { useArticlesApi } from "core/api/useArticlesApi";
import { useState } from "react";
import { ArticleSummarizationItem } from "../types/ArticleSummarizationItem";
import { GetArticlesLastResponse } from "core/api/responses/GetArticlesLastResponse";
import {
  buildArticlePath,
  buildAuthorPath,
  buildCategoryPath,
  buildPhotoPath,
  buildTabPath,
} from "core/builders/buildPath";
import { formatDateToString } from "core/builders/buildDate";

export const useLastArticles = () => {
  const { getLastArticlesDetails } = useArticlesApi();
  const [articles, setArticles] = useState<ArticleSummarizationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadArticles = (categoryId?: number, limit?: number, page?: number) => {
    void getLastArticlesDetails(categoryId, limit, page).then((data) => {
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
        id: item.category.id,
        name: item.category.name,
        path: buildCategoryPath(item.category.id),
        tabId: item.category.tabId,
        tabName: item.category.tabName,
        tabPath: buildTabPath(item.category.tabId),
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
        views: item.views ?? 0,
      },
      title: item.title,
    };
  });
