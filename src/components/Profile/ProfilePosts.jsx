import { Grid, VStack, Box, Skeleton } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

export default function ProfilePosts() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Grid templateColumns={{ sm: "repeat(1, 1fr" }} gap={1} columnGap={1}>
      {isloading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => {
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w="full">
              <Box h="300px">content wrapped</Box>
            </Skeleton>
          </VStack>;
        })}

      {!isloading && (
        <>
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img2.png" />
          <ProfilePost img="/img3.png" />
          <ProfilePost img="/img4.png" />
          <ProfilePost img="/img1.png" />
        </>
      )}
    </Grid>
  );
}
