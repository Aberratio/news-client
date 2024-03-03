"use client";

import { BoxAddItem } from "core/api/settings/fetchAdds";
import Image from "next/image";

import { ImageContainer } from "../first-site/FirstSite";

interface AddsBarProps {
  boxAdds: BoxAddItem[];
}

const AddsBar = ({ boxAdds }: AddsBarProps) => {
  return (
    <>
      {boxAdds.map((add: BoxAddItem) => (
        <AddBox path={add.image.path} alt={add.image.alt} />
      ))}
    </>
  );
};

export default AddsBar;

interface AddBoxProps {
  path: string;
  alt: string;
}

const AddBox = ({ path, alt }: AddBoxProps) => {
  return (
    <ImageContainer>
      <Image
        src={path}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </ImageContainer>
  );
};
