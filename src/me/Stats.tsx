import { Box, HStack, SimpleGrid, Stack, Stat } from "@chakra-ui/react";

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
    <SimpleGrid columns={{ base: 1, md: 3, lg: 3, xl: 2 }} gapY="8" gapX="8">
      {stats.map((stat, index) => (
        <Box key={index}>
          <Stat.Root key={index} maxW="fit-content" gap="2">
            <Stack>
              <Box width="100%">
                <Stat.Label
                  color={stat.color || "inherit"}
                  textAlign="left"
                  fontSize="md"
                >
                  {stat.label}
                </Stat.Label>
              </Box>
              <HStack gap="2" flexWrap="wrap">
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
              <Stat.HelpText ml="1" color="fg.subtle" textAlign="left">
                {"("}
                {stat.helperText}
                {")"}
              </Stat.HelpText>
            )}
          </Stat.Root>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Stats;
