import { useState } from "react";
import i18n from "../i18n";
import {
  HStack,
  IconButton,
  Portal,
  Select,
  createListCollection,
  useSelectContext,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const SelectTrigger = () => {
  const select = useSelectContext();
  const items = select.selectedItems as LanguageOption[];
  return (
    <IconButton
      px="2"
      variant="outline"
      size="sm"
      {...select.getTriggerProps()}
    >
      {select.hasSelectedItems ? (
        <>
          <FontAwesomeIcon icon={faLanguage} size="2xl" />
          {items[0].value.toUpperCase()}
        </>
      ) : (
        <FontAwesomeIcon icon={faLanguage} size="2xl" />
      )}
    </IconButton>
  );
};

const LanguageSelect = () => {
  const [language, setLanguage] = useState<string[]>(
    i18n.language ? [i18n.language] : ["en"],
  );

  const handleOnChangeLanguage = (language: string[]) => {
    i18n.changeLanguage(language[0]);
    setLanguage(language);
  };

  return (
    <Select.Root
      positioning={{ sameWidth: false }}
      collection={languageOptions}
      size="sm"
      value={language}
      onValueChange={(e) => handleOnChangeLanguage(e.value)}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <SelectTrigger />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="32">
            {languageOptions.items.map((languageOption) => (
              <Select.Item item={languageOption} key={languageOption.value}>
                <HStack>{languageOption.label}</HStack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

const languageOptions = createListCollection({
  items: [
    { label: "English", value: "en" },
    { label: "Swedish", value: "sv" },
  ],
});

type LanguageOption = {
  label: string;
  value: string;
};

export default LanguageSelect;
