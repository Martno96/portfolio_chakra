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

  return (
    <Carousel.Root slideCount={items.length} gap="2">
      <Carousel.Control justifyContent="center" gap="2" width="full">
        <Carousel.PrevTrigger
          display={{ base: "none", md: "block" }}
          zIndex="dropdown"
          asChild
        >
          <IconButton rounded="full" size="sm" variant="subtle">
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
        </Carousel.PrevTrigger>
        <Stack maxWidth="90vw">
          <Carousel.ItemGroup width="full">
            {items.map((item, index) => (
              <Carousel.Item key={index} index={index}>
                <Card.Root pb="6">
                  <Card.Body width="full">
                    <SimpleGrid
                      columns={{ base: 3, md: 5 }}
                      gap="8"
                      width="full"
                    >
                      <GridItem colSpan={3} bg="bg.muted" rounded="lg">
                        <Flex align="center" justify="center" height="100%">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            w="100%"
                            h={{ base: "30vh", md: "50vh" }}
                            objectFit="contain"
                          />
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={{ base: 3, md: 2 }}>
                        <ScrollArea.Root
                          maxHeight={{ base: "40vh", md: "50vh" }}
                          variant="always"
                        >
                          <ScrollArea.Viewport>
                            <ScrollArea.Content paddingEnd="3">
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
                          <ScrollArea.Scrollbar />
                        </ScrollArea.Root>
                      </GridItem>
                    </SimpleGrid>
                  </Card.Body>
                </Card.Root>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.IndicatorGroup mt="-6">
            {items.map((item, index) => (
              <Carousel.Indicator
                key={index}
                index={index}
                unstyled
                _current={{
                  outline: "2px solid currentColor",
                  outlineOffset: "2px",
                }}
                zIndex="dropdown"
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
        <Carousel.NextTrigger
          display={{ base: "none", md: "block" }}
          zIndex="dropdown"
          asChild
        >
          <IconButton rounded="full" size="sm" variant="subtle">
            <FontAwesomeIcon icon={faChevronRight} />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};
export default ScreencapCarousel;
