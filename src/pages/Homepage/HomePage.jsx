import React from "react";
import Pagelayout from "../../components/AuthFomr/Layouts/PageLayout/Pagelayout";

import { Container, Box, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

function HomePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
}

export default HomePage;
