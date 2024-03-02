"use client";

import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "core/api/sanityClient";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (_ref: string) => {
  return builder.image({ _ref });
};

export default urlFor;
