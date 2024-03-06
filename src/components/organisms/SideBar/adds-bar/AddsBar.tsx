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
          path={add.image.path}
          alt={add.image.alt}
        />
      ))}
    </div>
  );
};

export default AddsBar;
