import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../../Sidebar/Sidebar";

function Pagelayout({ children }) {
  return (
    <Flex>
      <Box>
        <Sidebar></Sidebar>
      </Box>
    </Flex>
  );
}

export default Pagelayout;
