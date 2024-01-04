export interface Font {
  fontFamily: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
}

export interface CustomFonts {
  h1: Font;
  h1T: Font;
  h1M: Font;
  h2: Font;
  h2M: Font;
  h3: Font;
  h3M: Font;
  body: Font;
  bodyM: Font;
  small: Font;
  smallM: Font;
}
