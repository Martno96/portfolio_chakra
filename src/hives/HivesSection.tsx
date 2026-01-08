import {
  Bleed,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import ScreencapCarousel from "../components/ScreencapCarousel";
import Stats from "../me/Stats";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const HivesSection = () => {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  //TODO: implement langauge provider
  const lang = "en";

  return (
    <Stack gap="16" py="8">
      <Container justifySelf="center" maxW="8xl">
        <HStack
          alignItems="flex-start"
          justifyContent="space-between"
          width="full"
          flexWrap="wrap"
          rowGap="12"
          gap="12"
        >
          <Stack gap="8">
            {resolvedTheme === "light" ? (
              <Image
                maxW="200px"
                src="static/hives_dark.png"
                alt="Hives screenshot light mode"
              />
            ) : (
              <Image
                maxW="200px"
                src="static/hives_light.png"
                alt="Hives screenshot dark mode"
              />
            )}
            <Stack gap="2">
              <Text
                width="full"
                maxW={{ base: "full", lg: "600px" }}
                fontSize="md"
              >
                {t("me.projects.hives.description")}
              </Text>
              <Link href="https://hives.co" color="fg.subtle">
                {t("me.projects.hives.title")}
                <FontAwesomeIcon
                  icon={faExternalLink}
                  style={{ marginLeft: "4px", fontSize: "12px" }}
                />
              </Link>
            </Stack>
          </Stack>
          <Flex minW="250px">
            <Stats
              stats={[
                {
                  label: t("me.projects.hives.stats.team_size"),
                  value: "2",
                  unit: t("me.units.devs"),
                  helperText: t("me.projects.hives.stats.including_myself"),
                },
                {
                  label: t("me.projects.hives.stats.old_frontend"),
                  value: t("me.projects.hives.stats.old_frontend_code_count"),
                  unit: t("me.units.lines_of_code"),
                  helperText: t("me.projects.hives.stats.old_frontend_helper"),
                  //color: "yellow.500",
                },
                {
                  label: t("me.projects.hives.stats.new_frontend"),
                  value: t("me.projects.hives.stats.new_frontend_code_count"),
                  unit: t("me.units.lines_of_code"),
                  helperText: t("me.projects.hives.stats.new_frontend_helper"),
                  //color: "blue.500",
                },
              ]}
            />
          </Flex>
        </HStack>
      </Container>
      <ScreencapCarousel
        items={[
          {
            src: `static/${lang}/legacy_hives_dialog_screencap.jpg`,
            alt: "screencap of dialog in legacy hives",
            description: {
              problem: t("me.projects.hives.examples.small_refactor.problem"),
              solution: t("me.projects.hives.examples.small_refactor.solution"),
            },
          },
          {
            src: `static/${lang}/chakra_screencap.jpg`,
            alt: "screencap of chakra UI migration",
            description: {
              problem: t(
                "me.projects.hives.examples.complete_refactor.problem"
              ),
              solution: t(
                "me.projects.hives.examples.complete_refactor.solution"
              ),
            },
          },
          {
            src: `static/${lang}/tags_double_screencap.jpg`,
            alt: "screencap of tag feature improvement",
            description: {
              problem: t("me.projects.hives.examples.tags.problem"),
              solution: t("me.projects.hives.examples.tags.solution"),
            },
          },
          {
            src: `static/${lang}/translation_screencap.jpg`,
            alt: "screencap of translation improvements",
            description: {
              problem: t("me.projects.hives.examples.translations.problem"),
              solution: t("me.projects.hives.examples.translations.solution"),
            },
          },
          {
            src: `static/${lang}/import_screencap.jpg`,
            alt: "screencap of import feature",
            description: {
              problem: t("me.projects.hives.examples.importing.problem"),
              solution: t("me.projects.hives.examples.importing.solution"),
            },
          },
          {
            src: `static/${lang}/comment_screencap.jpg`,
            alt: "screencap of replies feature improvement",
            description: {
              problem: t("me.projects.hives.examples.replies.problem"),
              solution: t("me.projects.hives.examples.replies.solution"),
            },
          },
          {
            src: `static/${lang}/explainer_screencap.jpg`,
            alt: "screencap of explainer feature",
            description: {
              problem: t("me.projects.hives.examples.explainers.problem"),
              solution: t("me.projects.hives.examples.explainers.solution"),
            },
          },
        ]}
      />
    </Stack>
  );
};

export default HivesSection;
