import { getStory } from "../api/hnService";
import Comment from "./comment";
import { timeFormatter } from "../utils/timeFormat";

import { Container, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const StoryView = () => {
  const { id } = useParams() as { id: string };

  const { data, isLoading } = useQuery({
    queryKey: ["top-story", id, "detail"],
    queryFn: () => getStory(parseInt(id)),
    staleTime: 5000,
  });

  console.log("data", data);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <Container maxW="container.xl">
      {data && (
        <>
          <Heading>{data.title}</Heading>
          <Text>
            {data.score} points by {data.by} | {timeFormatter(data.time)} |{" "}
            {data.descendants} comments
          </Text>

          {data.kids &&
            data.kids.map((id) => <Comment commentId={id} key={id} />)}
        </>
      )}
    </Container>
  );
};

export default StoryView;
