"use client";

import { BoxAddItem } from "types/AddsItem";

import { AddBox } from "./AddBox";

interface AddsBarProps {
  boxAdds: BoxAddItem[];
}

const AddsBar = ({ boxAdds }: AddsBarProps) => {
  if (boxAdds.length === 0) return null;

  return (
    <div data-testid="adds">
      {boxAdds.map((add: BoxAddItem) => (
        <AddBox
          key={add.image._ref}
          alt={add.image.alt}
          link={add.link || "#"}
          path={add.image.path}
        />
      ))}
    </div>
  );
};

export default AddsBar;
