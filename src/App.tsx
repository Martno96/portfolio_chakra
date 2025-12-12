import {
  Box,
  ClientOnly,
  Container,
  HStack,
  Portal,
  Skeleton,
  Switch,
} from "@chakra-ui/react";
import { ColorModeToggle } from "./components/color-mode-toggle";
import MainPage from "./main/MainPage";
import i18n from "./i18n";
import { useState } from "react";

export default function Page() {
  const [language, setLanguage] = useState(i18n.language ?? "en");

  const handleOnSwitchLanguage = (checked: boolean) => {
    const value = checked ? "sv" : "en";
    i18n.changeLanguage(value);
    setLanguage(value);
  };

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
        <Box position="absolute" top="4" right="4">
          <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
            <HStack gap="4">
              <Switch.Root
                size="lg"
                value={language}
                onCheckedChange={(change) =>
                  handleOnSwitchLanguage(change.checked)
                }
                gap="2"
              >
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Indicator
                    fontSize="xs"
                    fallback="SV"
                    _checked={{ color: "black" }}
                  >
                    EN
                  </Switch.Indicator>
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Root>
              <ColorModeToggle />
            </HStack>
          </ClientOnly>
        </Box>
      </Portal>
    </Container>
  );
}
