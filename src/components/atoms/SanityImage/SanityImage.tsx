"use client";

import urlFor from "core/builders/sanityImageUrlFor";
import Image from "next/image";
import { PhotoItem } from "types/PhotoItem";

interface SanityImageProps {
  className?: string;
  sizes: string;
  image: PhotoItem;
}

const SanityImage = ({ className, image, sizes }: SanityImageProps) => {
  const imageUrl = urlFor(image._ref).dpr(2).quality(80).url();
  const blurUrl = urlFor(image._ref).width(20).quality(20).url();

  return (
    <Image
      className={className}
      src={imageUrl}
      alt={image.alt}
      fill
      sizes={sizes}
      placeholder="blur"
      style={{ objectFit: "cover" }}
      priority
      blurDataURL={blurUrl}
    />
  );
};

export default SanityImage;
