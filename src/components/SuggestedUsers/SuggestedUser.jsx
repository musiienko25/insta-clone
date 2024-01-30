import React, { useState } from "react";
import { Button, Flex, VStack, Avatar, Box } from "@chakra-ui/react";

export default function SuggestedUser({ followers, name, avatar }) {
  const [isFollowed, setIfFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex>
        <Avatar src={avatar} name={name} size={"md"}></Avatar>
        <VStack spacing={2} alignItems={"flex-start"}>
          {" "}
          <Box fontSize={12} fontWeight={"bold"}>
            {followers}
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={12}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIfFollowed(true)}
      >
        {isFollowed ? "unfollow" : "follow"}
      </Button>
    </Flex>
  );
}
