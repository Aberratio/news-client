import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { BreadCrumbsItem } from "./BreadCrumbsItem";

export const useGenerateBreadcrumbs = () => {
  const { tabs } = useOrganizationInfo();

  const generateSimpleBreadcrumbs = (
    breadCrubmsInfo: BreadCrumbSimple
  ): BreadCrumbsItem[] => {
    return [
      {
        name: "Strona Główna",
        path: "/",
      },
      {
        name: breadCrubmsInfo.currentName,
        path: "#",
      },
    ];
  };

  const generateTabBreadcrumbs = (
    breadCrubmsInfo: BreadCrumbTab
  ): BreadCrumbsItem[] => {
    return [
      {
        name: "Strona Główna",
        path: "/",
      },
      {
        name:
          tabs.find((tab) => tab.tabId === breadCrubmsInfo.tabId)?.name ??
          "...",
        path: "#",
      },
    ];
  };

  const generateCategoryBreadcrumbs = (
    breadCrubmsInfo: BreadCrumbCategory
  ): BreadCrumbsItem[] => {
    const category = tabs
      .find((tab) =>
        tab.categories.find(
          (category) => category.id === breadCrubmsInfo.categoryId
        )
      )
      ?.categories.find(
        (category) => category.id === breadCrubmsInfo.categoryId
      );

    const tab = tabs.find((tab) =>
      tab.categories.find(
        (category) => category.id === breadCrubmsInfo.categoryId
      )
    );

    return [
      {
        name: "Strona Główna",
        path: "/",
      },
      {
        name: tab?.name ?? "...",
        path: `/tab/${tab?.tabId}`,
      },
      {
        name: category?.name ?? "...",
        path: "#",
      },
    ];
  };

  const generateArticleBreadcrumbs = (
    breadCrubmsInfo: BreadCrumbArticle
  ): BreadCrumbsItem[] => {
    return [
      {
        name: "Strona Główna",
        path: "/",
      },
      {
        name: breadCrubmsInfo.categoryName,
        path: breadCrubmsInfo.categoryPath,
      },
      {
        name: breadCrubmsInfo.currentName,
        path: "#",
      },
    ];
  };

  const generateBreadCrumbs = (breadCrubmsInfo: BreadCrumbsInfo) => {
    if (isBreadCrumbCategory(breadCrubmsInfo)) {
      return generateCategoryBreadcrumbs(breadCrubmsInfo);
    } else if (isBreadCrumbArticle(breadCrubmsInfo)) {
      return generateArticleBreadcrumbs(breadCrubmsInfo);
    } else if (isBreadCrumbTab(breadCrubmsInfo)) {
      return generateTabBreadcrumbs(breadCrubmsInfo);
    } else {
      return generateSimpleBreadcrumbs(breadCrubmsInfo);
    }
  };

  return {
    generateBreadCrumbs,
  };
};

interface BreadCrumbSimple {
  currentName: string;
}
interface BreadCrumbTab {
  tabId: number;
}
interface BreadCrumbCategory {
  categoryId: number;
}
type BreadCrumbArticle = BreadCrumbSimple & {
  categoryName: string;
  categoryPath: string;
};

export type BreadCrumbsInfo =
  | BreadCrumbSimple
  | BreadCrumbTab
  | BreadCrumbCategory
  | BreadCrumbArticle;

const isBreadCrumbCategory = (
  info: BreadCrumbsInfo
): info is BreadCrumbCategory => {
  return (info as BreadCrumbCategory).categoryId !== undefined;
};

const isBreadCrumbArticle = (
  info: BreadCrumbsInfo
): info is BreadCrumbArticle => {
  return (info as BreadCrumbArticle).categoryName !== undefined;
};

const isBreadCrumbTab = (info: BreadCrumbsInfo): info is BreadCrumbTab => {
  return (info as BreadCrumbTab).tabId !== undefined;
};
