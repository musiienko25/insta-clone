import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader></SuggestedHeader>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>
      <SuggestedUser
        name="Dan"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Dan"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        2023 Built By
        <Link href="youtube.com" target="_blank" color="blue" fontSize={14}>
          As a programmer
        </Link>
      </Box>
    </VStack>
  );
}
