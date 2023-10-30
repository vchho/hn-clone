import { Container, Heading, Text } from "@chakra-ui/react";
import { getStory } from "../api/hnService";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { mapTime } from "../utils/mapper";
// import Comments from "./comments";
import Comment from "./comment";

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
            {data.score} points by {data.by} | {mapTime(data.time)} |{" "}
            {data.descendants} comments
          </Text>

          {data.kids &&
            data.kids.map((id) => <Comment commentId={id} key={id} />)}
        </>
      )}

      {/* {id} */}
    </Container>
  );
};

export default StoryView;
