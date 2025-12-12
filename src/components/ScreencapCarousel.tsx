import {
  Bleed,
  Card,
  Carousel,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

type Step = {
  src: string;
  alt: string;
  description: {
    problem: string;
    solution: string;
  };
};

const ScreencapCarousel = ({ items }: { items: Step[] }) => {
  const { t } = useTranslation();
  //Chakra carousel with short text under the images or a tooltip
  return (
    <Carousel.Root
      slideCount={items.length}
      gap="2"
      // mx={{ base: "auto", sm: "-12" }}
    >
      <Carousel.Control justifyContent="center" gap="4" width="full">
        <Carousel.PrevTrigger zIndex="dropdown" asChild>
          <IconButton rounded="full" size="sm" variant="subtle">
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
        </Carousel.PrevTrigger>

        <Stack>
          <Carousel.ItemGroup width="full">
            {items.map((item, index) => (
              <Carousel.Item key={index} index={index}>
                <Card.Root>
                  <Card.Body>
                    <SimpleGrid
                      columns={{ base: 1, md: 3 }}
                      gap="8"
                      width="full"
                    >
                      <GridItem
                        colSpan={2}
                        height="full"
                        bg="bg.emphasized"
                        rounded="lg"
                      >
                        <Flex
                          align="center"
                          justify="center"
                          height="100%"
                          p="4"
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            w="100%"
                            h="60vh"
                            objectFit="contain"
                          />
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <ScrollArea.Root
                          height="70vh"
                          variant="always"
                        >
                          <ScrollArea.Viewport>
                            <ScrollArea.Content
                              paddingEnd="3"
                              overflowY="scroll"
                            >
                              <Stack gap="4">
                                <Stack gap="2">
                                  <Heading fontSize="md" color="fg.subtle">
                                    {t("me.projects.problem")}
                                  </Heading>
                                  <Text fontSize="sm">
                                    {item.description.problem}
                                  </Text>
                                </Stack>
                                <Stack gap="2">
                                  <Heading fontSize="md" color="fg.subtle">
                                    {t("me.projects.solution")}
                                  </Heading>
                                  <Text fontSize="sm">
                                    {item.description.solution}
                                  </Text>
                                </Stack>
                              </Stack>
                            </ScrollArea.Content>
                          </ScrollArea.Viewport>
                        </ScrollArea.Root>
                      </GridItem>
                    </SimpleGrid>
                  </Card.Body>
                </Card.Root>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.IndicatorGroup>
            {items.map((item, index) => (
              <Carousel.Indicator
                key={index}
                index={index}
                unstyled
                _current={{
                  outline: "2px solid currentColor",
                  outlineOffset: "2px",
                }}
              >
                <Image
                  w="20"
                  aspectRatio="16/9"
                  src={item.src}
                  alt={item.alt}
                  objectFit="cover"
                />
              </Carousel.Indicator>
            ))}
          </Carousel.IndicatorGroup>
        </Stack>

        <Carousel.NextTrigger zIndex="dropdown" asChild>
          <IconButton rounded="full" size="sm" variant="subtle">
            <FontAwesomeIcon icon={faChevronRight} />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};
export default ScreencapCarousel;
