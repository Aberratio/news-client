export const buildArticlePath = (articleId: string) => {
  return `/article/${articleId}`;
};

export const buildAuthorPath = (articleId: string) => {
  return `/author/${articleId}`;
};

export const buildCategoryPath = (categoryId: string) => {
  return `/category/${categoryId}`;
};

export const buildTabPath = (tabId: string) => {
  return `/tab/${tabId}`;
};

export const buildPhotoPath = (photoPath: string) => {
  return `${photoPath}`;
};

export const aboutPagePath = `/about`;
export const rulesPagePath = `/rules`;
