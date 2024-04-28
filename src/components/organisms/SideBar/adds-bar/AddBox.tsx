import Image from "next/image";
import Link from "next/link";

import { SideBarSmallImageContainer } from "../image-containers/SideBarSmallImageContainer";

interface AddBoxProps {
  alt: string;
  link: string;
  path: string;
}

export const AddBox = ({ alt, link, path }: AddBoxProps) => {
  return (
    <Link href={link} target="_blank">
      <SideBarSmallImageContainer
        dataTestId="add"
        isWrappedByLink={link !== ""}
      >
        <Image
          src={path}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </SideBarSmallImageContainer>
    </Link>
  );
};
