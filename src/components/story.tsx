import { Box, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { mapTime } from "../utils/mapper";
import { Story } from "../utils/consts";

import { Link as RRLink } from "react-router-dom";

const Story = ({ data }: { data: Story }) => {
  console.log("data in each story", data);

  return (
    <>
      <Box
        bg="tomato"
        w="100%"
        p={4}
        color="white"
        marginBottom={4}
        border="4px"
      >
        <Link fontSize={"lg"} href={data?.url} isExternal size={"32px"}>
          {data.title} <ExternalLinkIcon mx="2px" />
        </Link>
        <Box display={"flex"}>
          <Text>
            By: {data?.by} | Score: {data?.score} | Time: {mapTime(data?.time)}
          </Text>
        </Box>
        <Box display={"flex"}>
          {data.descendants ? (
            <RRLink to={`/top-stories/${data.id}`}>
              <Text>Comments: {data?.descendants}</Text>
            </RRLink>
          ) : (
            <Text>No comments</Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Story;
