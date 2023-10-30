import { getStory } from "../api/hnService";

import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Story from "./story";

dayjs.extend(relativeTime);

const Stories = ({ storyId }: { storyId: number }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["top-story", storyId],
    queryFn: () => getStory(storyId),
    staleTime: 5000,
  });

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  return <>{data && <Story data={data} />}</>;
};

export default Stories;
