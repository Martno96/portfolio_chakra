import { HStack } from "@chakra-ui/react";
import { ColorModeToggle } from "../components/ColorModeToggle";
import LanguageSelect from "../components/LanguageSelect";

const Header = () => {
  return (
    <HStack gap="4" bg="fg.inverted" pt="2" pr="4">
      <LanguageSelect />
      <ColorModeToggle />
    </HStack>
  );
};

export default Header;
