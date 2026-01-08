import { Card, Container, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
const chakraLogoPath = "/static/logo.svg";
const typescriptLogoPath = "/static/typescript_logo.png";

const ImageIcon = ({ src, alt }: { src: string; alt: string }) => (
  <Icon
    filter="grayscale(1) brightness(60%) contrast(500%)"
    _dark={{
      filter: "invert(1) grayscale(1) brightness(400%) contrast(90%)",
    }}
    boxSize="2.75em"
    className="fa-fw"
  >
    <img src={src} alt={alt} />
  </Icon>
);

const SkillGallery = () => {
  //TODO: switch to proper svg icons for TS and Chakra UI

  const skills = [
    {
      name: "React",
      icon: <FontAwesomeIcon icon={faReact} size="3x" className="fa-fw" />,
    },
    {
      name: "UX/UI",
      icon: (
        <FontAwesomeIcon icon={faHandPointer} size="3x" className="fa-fw" />
      ),
    },
    {
      name: "Type Script",
      icon: <ImageIcon src={typescriptLogoPath} alt="TypeScript logo" />,
    },
    {
      name: "Java Script",
      icon: <FontAwesomeIcon icon={faJs} className="fa-fw" size="3x" />,
    },
    {
      name: "Node.js",
      icon: <FontAwesomeIcon icon={faNodeJs} className="fa-fw" size="3x" />,
    },
    {
      name: "Chakra UI (design system)",
      icon: <ImageIcon src={chakraLogoPath} alt="Chakra UI logo" />,
    },
    {
      name: "JSX",
      icon: (
        <Text
          fontFamily="mono"
          fontSize="3xl"
          fontWeight="extrabold"
          letterSpacing="tighter"
        >
          JSX
        </Text>
      ),
    },
  ];

  return (
    <Container justifySelf="center" maxW="8xl">
      <SimpleGrid columns={{ base: 3, md: 7 }} gap="4">
        {skills.map((skill) => (
          <Card.Root
            size="sm"
            cursor="default"
            key={skill.name}
            textAlign="center"
          >
            <Card.Body
              gap="3"
              alignItems="center"
              justifyContent="space-around"
              py="3"
            >
              {skill.icon}
              <Card.Description fontSize={skill.name.length > 12 ? "xs" : "sm"}>
                {skill.name}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SkillGallery;
