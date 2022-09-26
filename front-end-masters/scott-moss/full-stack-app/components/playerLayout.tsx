import { Box } from "@chakra-ui/layout";

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top={0} left={0} width="250px" border="solid">
        SideBar
      </Box>
      {/* Middle Children Content */}
      <Box ml="250px" border="solid">
        {children}
      </Box>
      {/* bottom player */}
      <Box position="absolute" bottom={0} left={0} border="solid">
        Bottom Player
      </Box>
    </Box>
  );
};
