"use client";

import { BoxAddItem } from "types/AddsItem";

import { AddBox } from "./AddBox";

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
