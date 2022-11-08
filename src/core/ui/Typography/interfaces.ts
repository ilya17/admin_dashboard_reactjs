export interface TextProps {
  variant?: keyof typeof TextVariants;
  weight?: keyof typeof TextWeight;
  fontSize?: number;
  className?: string;
  value: string | number;
}

export enum TextVariants {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
}

export enum TextWeight {
  bold = "bold",
  regular = "regular",
  semibold = "semibold",
}
