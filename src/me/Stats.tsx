import { HStack, SimpleGrid, Stack, Stat } from "@chakra-ui/react";

const Stats = ({
  stats,
}: {
  stats: {
    label: string;
    value: string | number;
    unit: string;
    icon?: React.ReactNode;
    helperText?: string;
    color?: string;
  }[];
}) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
      {stats.map((stat) => (
        <Stat.Root
          key={stat.label}
          maxW="fit-content"
          gap="2"
        >
          <Stack>
            <Stat.Label color={stat.color || "inherit"} textAlign="center" fontSize="md" whiteSpace="nowrap">
              {stat.label}
            </Stat.Label>
            <HStack gap="2">
              {stat.icon}
              <Stat.ValueText fontSize="4xl" fontWeight="bold" ml="1">
                {stat.value}
              </Stat.ValueText>
              <Stat.ValueUnit
                fontSize="sm"
                alignSelf="flex-end"
                maxW="10ch"
                wordBreak="break-word"
                lineClamp={2}
              >
                {stat.unit}
              </Stat.ValueUnit>
            </HStack>
          </Stack>
          {stat.helperText && (
            <Stat.HelpText ml="1" color="fg.subtle" textAlign="left">{"("}{stat.helperText}{")"}</Stat.HelpText>
          )}
        </Stat.Root>
      ))}
    </SimpleGrid>
  );
};

export default Stats;
