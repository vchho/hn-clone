export interface Story {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  kids?: number[];
  url: string;
}
