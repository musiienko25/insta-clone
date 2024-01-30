import React, { useState } from "react";
import PostHeader from "./PostHeader";
import {
  Box,
  Text,
  Button,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";

function PostFooter({ username }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box my={4}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={17}>
          <CommentLogo />
        </Box>
        <Text fontWeight={600} fontSize={"sm"}>
          {likes} likes
        </Text>
        <Text>
          {username}
          <Text as="span" fontWeight={400}>
            Feeling good
          </Text>
          <Text fontSize="sm" color={"gray"}></Text>
        </Text>

        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeHolder={"Add comment"}
              fontSize={14}
            ></Input>
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
}

export default PostFooter;
