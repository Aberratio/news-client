import Image from "next/image";

import { SideBarSmallImageContainer } from "../image-containers/SideBarSmallImageContainer";

interface AddBoxProps {
  path: string;
  alt: string;
}

export const AddBox = ({ path, alt }: AddBoxProps) => {
  return (
    <SideBarSmallImageContainer dataTestId="add">
      <Image
        src={path}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </SideBarSmallImageContainer>
  );
};
