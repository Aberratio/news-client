export interface Font {
  fontFamily: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
}

export interface CustomFonts {
  title: Font;
  titleM: Font;
  h1: Font;
  h1M: Font;
  h2: Font;
  h2M: Font;
  h3: Font;
  h3M: Font;
  body: Font;
  bodyM: Font;
  small: Font;
  smallM: Font;
  article: Font;
  articleM: Font;
}
