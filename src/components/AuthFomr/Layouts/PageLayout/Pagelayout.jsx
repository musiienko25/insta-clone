import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

function Pagelayout({ children }) {
  const pathname = useLocation();
  return (
    <Flex>
      {pathname !== "/auth" ? (
        <Box>
          <Sidebar></Sidebar>
        </Box>
      ) : null}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
}

export default Pagelayout;
