import { sanityClient } from "core/api/sanityClient";
import { AddsItem } from "types/AddsItem";

import { mapDataToAddsItem } from "../sanity-types/SanityAddsItem";

export const fetchAdds = async (): Promise<AddsItem | null> => {
  const adds = await sanityClient.fetch(
    "*[_type == 'adds' && !(_id in path('drafts.**'))][0]{mainAdd->{image , 'slug': post->slug, link}, boxAdds[dateTime(@->startDate + 'T00:00:00Z') < dateTime(now()) && dateTime(@->endDate + 'T00:00:00Z') > dateTime(now())]->{image , 'slug': post->slug, link} }"
  );

  if (adds === null) return null;

  return mapDataToAddsItem(adds);
};
