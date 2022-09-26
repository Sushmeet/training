import { Box } from "@chakra-ui/layout";

export const PlayerLayout = ({ children }) => {
  return (
    <Box ml={3} mt={3}>
      Layout Component
      {children}
    </Box>
  );
};
