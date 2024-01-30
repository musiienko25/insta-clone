import { Flex, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex>
        <Avatar name="As a programmer" size={"lg"} src="/profilepic.png">
          <Text fontSize={12} fontWeight={"bold"}>
            asaprogramer
          </Text>
        </Avatar>
      </Flex>
      <Link
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
}
