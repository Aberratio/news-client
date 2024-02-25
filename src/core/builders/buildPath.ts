export const buildArticlePath = (articleSlug: string) => {
  return `/article/${articleSlug}`;
};

export const buildAuthorPath = (articleSlug: string) => {
  return `/author/${articleSlug}`;
};

export const buildCategoryPath = (categorySlug: string) => {
  return `/category/${categorySlug}`;
};

export const buildTabPath = (tabSlug: string) => {
  return `/tab/${tabSlug}`;
};

export const buildPhotoPath = (photoPath: string) => {
  return `${photoPath}`;
};

export const aboutPagePath = `/about`;
export const rulesPagePath = `/rules`;
