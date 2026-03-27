import { Switch } from "@chakra-ui/react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = (checked: boolean) => {
    if (checked) {
      setTheme("light");
    } else {
      setTheme("dark")
    }
  };

  useEffect(() => {
    if (theme) {
      setTheme(theme)
    }
  }, [])
  
  return (
    <Switch.Root
      size="lg"
      value={theme}
      onCheckedChange={(change) => toggleColorMode(change.checked)}
      gap="2"
      aria-label="toggle color mode"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator
          fontSize="xs"
          fallback={<FontAwesomeIcon icon={faMoon} />}
          color="white"
        >
          <FontAwesomeIcon icon={faSun} />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
}
