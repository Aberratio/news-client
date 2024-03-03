export interface AddItem {
  image: {
    alt: string;
    path: string;
    _ref: string;
  };
}

export type MainAddItem = AddItem;
export type BoxAddItem = AddItem;

export interface AddsItem {
  mainAdd: MainAddItem;
  boxAdds: BoxAddItem[];
}
