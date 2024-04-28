import { PhotoItem } from "./PhotoItem";

export interface AddItem {
  image: PhotoItem;
  link?: string;
}

export type MainAddItem = AddItem;
export type BoxAddItem = AddItem;

export interface AddsItem {
  mainAdd: MainAddItem;
  boxAdds: BoxAddItem[];
}
