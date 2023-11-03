import { getNewStories } from "../api/hnService";
import Stories from "../components/stories";

import { Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const NewStories = () => {
  const { data } = useQuery({
    queryKey: ["new-stories"],
    queryFn: getNewStories,
    staleTime: 5000,
  });

  return (
    <Container maxW="container.xl">
      {data &&
        data.map((storyId) => <Stories storyId={storyId} key={storyId} />)}
    </Container>
  );
};

export default NewStories;
