import { Box } from "@chakra-ui/layout";

import { SideBar } from "./sidebar";

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" width="250px">
        <Box>
          <SideBar />
        </Box>
      </Box>
      {/* Middle Children Content */}
      <Box ml="250px" mb="100px">
        {children}
      </Box>
      {/* bottom player */}
      <Box position="absolute" bottom={0} left={0} border="solid">
        Bottom Player
      </Box>
    </Box>
  );
};
