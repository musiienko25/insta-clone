import React from "react";
import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

function PostHeader() {
  return (
    <div>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar src="/img1.png" alt="user profile" size={"sm"} />
          <Flex fontSize={12} fontWeight={"bold"} gap="2">
            asapprogramer
            <Box color={"gray.500"}>1 w</Box>
          </Flex>
        </Flex>
        <Box fontSize={"pointer"}></Box>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Flex>
    </div>
  );
}

export default PostHeader;
