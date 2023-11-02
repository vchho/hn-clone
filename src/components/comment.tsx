import { useState } from "react";

import Comments from "./comments";
import { timeFormatter } from "../utils/timeFormat";
import { getComment } from "../api/hnService";

import { useQuery } from "@tanstack/react-query";
import { Box, Button, Text, Flex } from "@chakra-ui/react";

const Comment = ({ commentId }: { commentId: number }) => {
  const [hidePost, setHidePost] = useState(false);

  const { data, isLoading, isPending, isFetching } = useQuery({
    queryKey: ["top-story", commentId, "detail", "comment"],
    queryFn: () => getComment(commentId),
    staleTime: 5000,
  });

  if (isLoading) {
    <Text>Loading...</Text>;
  }

  if (isFetching) {
    <Text>Fetching...</Text>;
  }

  if (isPending) {
    <Text>Pending...</Text>;
  }

  const setPostMinimize = () => {
    setHidePost(!hidePost);
  };

  return (
    data && (
      <Box bg="smoke" mt={"4"} mb="4" border={"1px"} borderRadius={"4px"} p="4">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text>
            {data.by} | {timeFormatter(data.time)}
          </Text>

          <Button onClick={setPostMinimize}>
            {hidePost ? "Unhide" : "Hide"}
          </Button>
        </Flex>
        {hidePost ? (
          <Box>
            <Text>Hidden</Text>
          </Box>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
            {data.kids && <Comments commentIds={data?.kids} />}
          </>
        )}
      </Box>
    )
  );
};

export default Comment;
