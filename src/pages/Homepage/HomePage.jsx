import React from "react";
import Pagelayout from "../../components/AuthFomr/Layouts/PageLayout/Pagelayout";

import { Container, Box, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

function HomePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <Pagelayout />
        </Box>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
      </Flex>
    </Container>
  );
}

export default HomePage;
