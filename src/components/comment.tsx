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
      <Box bg="smoke" mt={"2"} mb="2" border={"1px"} borderRadius={"4px"} p="4">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text size={"14px"}>
            {data.by} | {timeFormatter(data.time)}
          </Text>

          <Button onClick={setPostMinimize} size={"sm"}>
            {hidePost ? "Unhide" : "Hide"}
          </Button>
        </Flex>
        {hidePost ? (
          <Box></Box>
        ) : (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: data.text }}
              style={{ fontSize: "14px" }}
            ></div>
            {data.kids && <Comments commentIds={data?.kids} />}
          </>
        )}
      </Box>
    )
  );
};

export default Comment;
