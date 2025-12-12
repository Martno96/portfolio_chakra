import { Box, Heading, Span, Stack, Stat, Text } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTranslation } from "react-i18next";

const GithubHeatmap = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <Stack gap="4" justifyContent="flex-start">
      {/* <Stat.Root>
        <Stat.Label fontSize="xl" whiteSpace="nowrap">
          {t("me.github_calendar.title")}
        </Stat.Label>
        <Stat.HelpText fontSize="xs" color="fg.subtle">
          {t("me.github_calendar.caveat")}
        </Stat.HelpText>

        <Box maxW="20vw">
          <GitHubCalendar
            blockSize={10}
            username="martno96"
            transformData={(activity) => {
              const date = new Date();
              const halfYearAgo = new Date();
              halfYearAgo.setMonth(date.getMonth() - 4);
              return activity.filter((a) => new Date(a.date) >= halfYearAgo);
            }}
            weekStart={1}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            showTotalCount={false}
          />
        </Box>
      </Stat.Root> */}
      {/* <Heading lineHeight="shorter" fontSize="xl">
        {t("me.github_calendar.title")}
      </Heading>
      <Span ml="2" color="fg.subtle" fontSize="md">
        {t("me.github_calendar.caveat")}
      </Span> */}
      {/* <Text fontSize="md">
        {t("me.github_calendar.title")}
      </Text> */}
    </Stack>
  );
};

export default GithubHeatmap;
