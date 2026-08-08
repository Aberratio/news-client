# Article recommendations

Article pages expose one `ArticleSummaryItem[]` to the existing
`Recommendations` UI. The list is resolved server-side in `fetchArticle`.

## Fallback algorithm

1. Fetch the current article and manual Sanity `recommendations`.
2. Resolve publication settings from `publicationSettings.articleRecommendations`.
3. If the module is disabled, return no recommendations.
4. If the manual list has at least `minimumManualItems`, keep manual
   recommendations as the complete output, capped to `limit`.
5. If the manual list is below `minimumManualItems`, fetch automatic candidates.
6. Automatic candidates always exclude the current article, drafts, ads,
   future posts, and already selected manual recommendations.
7. Automatic candidates are ranked in groups:
   - same category first,
   - same tab/section second,
   - then the configured broad fallback: recent, popular, or commented.
8. Duplicate articles are removed by Sanity document id, falling back to slug.
9. If `mixManualAndAutomatic` is enabled, manual recommendations stay first and
   automatic candidates fill the remaining slots. If it is disabled, automatic
   candidates replace a manual list that is below the minimum.

## Sanity settings

The `publicationSettings` document has an `articleRecommendations` object in
the template group:

- `enabled`: shows or hides article recommendations.
- `title`: heading used by the article recommendation UI.
- `limit`: maximum number of recommendations to render.
- `minimumManualItems`: minimum manual recommendations required before the
  automatic fallback is skipped.
- `fallbackStrategy`: chooses the broad fallback after same category and same
  tab candidates. Supported values are `categoryTabRecent`,
  `categoryTabPopular`, and `categoryTabCommented`.
- `mixManualAndAutomatic`: keeps manual recommendations first and fills with
  automatic candidates when the manual list is too short.
