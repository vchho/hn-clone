import { Box } from "@chakra-ui/react";
import Comment from "./comment";

const Comments = ({ commentIds }: { commentIds: number[] }) => {
  return (
    <Box>
      {commentIds.map((commentId) => (
        <Comment commentId={commentId} key={commentId} />
      ))}
    </Box>
  );
};

export default Comments;
