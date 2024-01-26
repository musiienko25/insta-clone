import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";

function FeedPost() {
  return (
    <div>
      <PostHeader />
      <Box>
        {" "}
        <Image src="/img1.png" alt="user profile pic"></Image>
      </Box>

      <PostFooter />
    </div>
  );
}

export default FeedPost;
