import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const SkillTextIconWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex border="solid 1px" rounded="lg" width="3em" height="3em" alignItems="center" justifyContent="center">
      <Box textWrap="nowrap">{children}</Box>
    </Flex>
  );
};

export default SkillTextIconWrapper;
