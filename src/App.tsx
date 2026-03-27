import { Box, ClientOnly, Container, Portal, Skeleton } from "@chakra-ui/react";
import MainPage from "./main/MainPage";
import Header from "./main/Header";

export default function Page() {
  return (
    <Container
      pt="10vh"
      position="relative"
      top="0"
      width="100vw"
      height="100vh"
      overflowY="auto"
    >
      <MainPage />
      <Portal>
        <Box position="absolute" top="0" right="0">
          <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
            <Header />
          </ClientOnly>
        </Box>
      </Portal>
    </Container>
  );
}
