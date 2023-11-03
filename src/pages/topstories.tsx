import Stories from "../components/stories";

import { getTopStories } from "../api/hnService";

import { Container } from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";

const TopStories = () => {
  const { data } = useQuery({
    queryKey: ["top-stories"],
    queryFn: getTopStories,
    staleTime: 5000,
  });

  return (
    <Container maxW="container.xl">
      {data &&
        data.map((storyId) => <Stories storyId={storyId} key={storyId} />)}
    </Container>
  );
};

export default TopStories;
