import { Heading, HStack, Separator } from "@chakra-ui/react";
import React from "react";

const SectionHeading = ({ children }: { children: string }) => {
  return (
    <HStack gap="8" width="full">
      <Separator flexGrow="1" />
      <Heading fontSize="xl">{children}</Heading>
      <Separator flexGrow="1" />
    </HStack>
  );
};

export default SectionHeading;
