import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { auth } from "../../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../../Navbar/Navbar";

function Pagelayout({ children }) {
  const pathname = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";

  const checkingUserIAuth = !user && loading;
  if (checkingUserIAuth) {
    <PageLayoutSpinner />;
  }
  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {canRenderSidebar ? (
        <Box>
          <Sidebar></Sidebar>
        </Box>
      ) : null}
      {canRenderNavbar ? <Navbar /> : null}
      <Box flex={1} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
}

export default Pagelayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
