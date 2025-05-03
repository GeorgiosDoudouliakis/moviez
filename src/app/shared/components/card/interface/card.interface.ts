export interface Card {
  id: number;
  title: string;
  imageSrc: string | null;
  topRightContent: string | null;
  details: string[];
  path: string;
}
