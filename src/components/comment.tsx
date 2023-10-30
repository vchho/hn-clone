import { useQuery } from "@tanstack/react-query";
import { getComment } from "../api/hnService";
import { Box, Text } from "@chakra-ui/react";
import { mapTime } from "../utils/mapper";

const Comment = ({ commentId }: { commentId: number }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["top-story", commentId, "detail", "comment"],
    queryFn: () => getComment(commentId),
    staleTime: 5000,
  });
  console.log("commment", data?.kids);

  if (isLoading) {
    <Text>Loading...</Text>;
  }

  return (
    data && (
      <Box bg="smoke" mt={"4"} mb="4" border={"1px"} borderRadius={"4px"} p="4">
        {" "}
        <Text>
          {data.by} | {mapTime(data.time)}
        </Text>
        {/* @ts-ignore */}
        <div dangerouslySetInnerHTML={{ __html: data?.text }}></div>
        {/* {data.kids && <Comment />} */}
      </Box>
    )
  );
};

export default Comment;
