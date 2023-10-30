import { Story } from "../utils/consts";

const url = "https://hacker-news.firebaseio.com/v0/";

export const getTopStories = async () => {
  const response = await fetch(`${url}/topstories.json`);
  if (response.ok) {
    const data = response.json();
    const result = await data;
    return result.slice(0, 10) as Promise<number[]>;
  }
};

export const getNewStories = async () => {
  const response = await fetch(`${url}/newstories.json`);
  if (response.ok) {
    const data = response.json();
    const result = await data;

    return result as Promise<number[]>;
  }
};

export const getStory = async (storyId: number): Promise<Story | undefined> => {
  const response = await fetch(`${url}/item/${storyId}.json`);
  if (response.ok) {
    const data = response.json();
    const result = await data;
    return result;
  }
};

export const getComment = async (commentId: number) => {
  const response = await fetch(`${url}/item/${commentId}.json`);
  if (response.ok) {
    const data = response.json();
    const result = await data;
    return result;
  }
};
