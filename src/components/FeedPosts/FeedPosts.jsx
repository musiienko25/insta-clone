import React, { useEffect, useState } from "react";
import {
  Container,
  VStack,
  Flex,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}></Flex>
            <SkeletonCircle size="10" />
            <VStack gap={2} alignItems={"flex-start"}></VStack>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Content wrapped</Box>
            </Skeleton>
            <Skeleton>
              <Box h={"500px"}></Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          {" "}
          <FeedPost
            img="/img1.png"
            username="asaprogramer_"
            avatar="/img1.png"
          />
          <FeedPost img="/img2.png" username="josh" avatar="/img1.png" />
          <FeedPost img="/img3.png" username="zoe" avatar="/img1.png" />
        </>
      )}
    </Container>
  );
}

export default FeedPosts;
