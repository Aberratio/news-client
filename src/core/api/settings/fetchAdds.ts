import { sanityClient } from "core/api/sanityClient";
import { mapDataToAddsItem } from "../sanity-types/SanityAddsItem";
import { AddsItem } from "types/AddsItem";

export const fetchAdds = async (): Promise<AddsItem | null> => {
  const adds = await sanityClient.fetch(
    "*[_type == 'adds'][0]{mainAdd->, boxAdds[dateTime(@->startDate + 'T00:00:00Z') < dateTime(now()) && dateTime(@->endDate + 'T00:00:00Z') > dateTime(now())]-> }"
  );

  if (adds === null) return null;

  return mapDataToAddsItem(adds);
};
