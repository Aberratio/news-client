"use client";

import urlFor from "core/builders/sanityImageUrlFor";
import Image from "next/image";

interface SanityImageProps {
  _ref: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}

const SanityImage = ({ alt, _ref, width, height, sizes }: SanityImageProps) => {
  const imageUrl = urlFor(_ref)
    .width(width)
    .height(height)
    .dpr(2)
    .quality(80)
    .url();
  const blurUrl = urlFor(_ref).width(20).quality(20).url();

  return (
    <Image
      src={imageUrl}
      alt={alt}
      fill
      sizes={sizes}
      placeholder="blur"
      objectFit="cover"
      priority
      blurDataURL={blurUrl}
    />
  );
};

export default SanityImage;
