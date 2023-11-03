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

export type HNComment = {
  by: string;
  descendants: number;
  parent: number;
  id: number;
  time: number;
  type: string;
  kids?: number[];
  text: string;
};
