import {
  Avatar,
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  Span,
  Stack,
  Stat,
  Text,
  Wrap,
} from "@chakra-ui/react";

import Stats from "./Stats";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import GithubHeatmap from "./GithubHeatmap";

const Bio = () => {
  const { t } = useTranslation();
  return (
    <Container justifySelf="center" maxW="8xl">
      <HStack alignItems="flex-start" gap="8" maxW="full">
        <Avatar.Root
          boxSize={{ base: "35vw", md: "20vw", lg: "12vw" }}
          maxW="200px"
          maxH="200px"
        >
          <Avatar.Image
            src="static/martin_danielsson.jpeg"
            alt="Martin Danielsson"
            borderRadius="full"
          />
        </Avatar.Root>
        <Stack alignItems="flex-start" justifyContent="space-evenly" gap="4">
          <Stack gap="0" alignItems="flex-start">
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="extrabold"
              lineHeight="normal"
              background="linear-gradient(45deg, #2bbe68ff, #02c4ffff)"
              backgroundClip="text"
              color="transparent"
              _dark={{
                background: "-webkit-linear-gradient(45deg, #f3ec78, #af4261)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Martin Danielsson
            </Heading>
          </Stack>
          <HStack gap="8" alignItems="flex-start">
            <Stack gap="8" justifyContent="space-between">
              <Stat.Root>
                <Stat.Label fontSize="xl" whiteSpace="nowrap">
                  {t("me.role")}
                </Stat.Label>
                <HStack gap="2">
                  <Stat.ValueText fontSize="4xl" fontWeight="bold" ml="1">
                    {4}
                  </Stat.ValueText>
                  <Stat.ValueUnit fontSize="md">
                    {t("me.units.years")}
                  </Stat.ValueUnit>
                </HStack>
              </Stat.Root>

              <Stack>
                <HStack gap="2" pl="1">
                  <Text fontSize="md" color="fg.subtle">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </Text>
                  <Text fontSize="md" color="fg.muted" whiteSpace="nowrap">
                    {t("me.location")}
                  </Text>
                </HStack>
                <Contact />
              </Stack>
            </Stack>

            <GithubHeatmap />
          </HStack>
        </Stack>
      </HStack>
    </Container>
  );
};

export default Bio;
