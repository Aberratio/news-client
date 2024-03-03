import { sanityClient } from "core/api/sanityClient";
import { buildImageUrl } from "core/builders/buildImageUrl";
import { SanityAddsItem } from "../sanity-types/SanityAddsItem";

export interface AddItem {
  image: {
    alt: string;
    path: string;
    _ref: string;
  };
}

export type MainAddItem = AddItem;
export type BoxAddItem = AddItem;

export interface AddsItem {
  mainAdd: MainAddItem;
  boxAdds: BoxAddItem[];
}

export const fetchAdds = async (): Promise<AddsItem | null> => {
  const adds = await sanityClient.fetch(
    "*[_type == 'adds'][0]{mainAdd->, boxAdds[dateTime(@->startDate + 'T00:00:00Z') < dateTime(now()) && dateTime(@->endDate + 'T00:00:00Z') > dateTime(now())]-> }"
  );

  if (adds === null) return null;

  return mapData(adds);
};

const mapData = (data: SanityAddsItem): AddsItem => {
  return {
    mainAdd: {
      image: {
        alt: data.mainAdd.image.alt,
        path: buildImageUrl(data.mainAdd.image.asset._ref),
        _ref: data.mainAdd.image.asset._ref,
      },
    },
    boxAdds: data.boxAdds.map((add) => {
      return {
        image: {
          alt: add.image.alt,
          path: buildImageUrl(add.image.asset._ref),
          _ref: data.mainAdd.image.asset._ref,
        },
      };
    }),
  };
};
