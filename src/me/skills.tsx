import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
const chakraLogoPath = "/static/logo.svg";
const typescriptLogoPath = "/static/typescript_logo.png";
const tanstackLogoPath = "/static/tanstack_logo_black.svg";
const hookFormLogoPath = "/static/react_hook_form_logo.svg";
const motionLogoPath = "/static/motion_logo.svg";
import ImageIcon from "../components/ImageIcon";
import SkillTextIconWrapper from "./SkillTextIconWrapper";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

export const skills: Skill[] = [
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} size="3x" className="fa-fw" />,
  },
  {
    name: "UX/UI",
    icon: <FontAwesomeIcon icon={faHandPointer} size="3x" className="fa-fw" />,
  },
  {
    name: "Java Script",
    icon: <FontAwesomeIcon icon={faJs} className="fa-fw" size="3x" />,
  },
  {
    name: "Type Script",
    icon: <ImageIcon src={typescriptLogoPath} alt="TypeScript logo" />,
  },
  {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} className="fa-fw" size="3x" />,
  },
  {
    name: "React Hook Form",
    icon: (
      <Box
        style={{
          filter: "invert(1)",
        }}
      >
        <ImageIcon
          src={hookFormLogoPath}
          alt="React Hook Form logo"
          boxSize="3.5em"
          margin="-0em auto auto auto"
        />
      </Box>
    ),
  },
  {
    name: "Tanstack Query",
    icon: (
      <ImageIcon src={tanstackLogoPath} alt="Tanstack logo" boxSize="3em" />
    ),
  },
  {
    name: "Tanstack Router",
    icon: (
      <ImageIcon src={tanstackLogoPath} alt="Tanstack logo" boxSize="3em" />
    ),
  },
  {
    name: "Tanstack Table",
    icon: (
      <ImageIcon src={tanstackLogoPath} alt="Tanstack logo" boxSize="3em" />
    ),
  },
  {
    name: "Chakra UI (design system)",
    icon: <ImageIcon src={chakraLogoPath} alt="Chakra UI logo" />,
  },
  {
    name: "(charting library)",
    icon: (
      <Text
        fontSize="md"
        fontWeight="extrabold"
        whiteSpace="nowrap"
        pt="2"
        pb="4"
        transform="scale(1, 1.25)"
      >
        {`< Recharts />`}
      </Text>
    ),
  },
  {
    name: "Motion.js (formerly Framer Motion)",
    icon: (
      <ImageIcon
        src={motionLogoPath}
        alt="Motion.js (formerly Framer Motion) logo"
        boxSize="1em"
        margin="0.9em"
        scale={1.5}
      />
    ),
  },
  {
    name: "",
    icon: (
      <SkillTextIconWrapper>
        <Text
          fontFamily="mono"
          fontSize="lg"
          fontWeight="bold"
          bg="fg.inverted"
        >
          {`JSX/TSX`}
        </Text>
      </SkillTextIconWrapper>
    ),
  },
  {
    name: "",
    icon: (
      <SkillTextIconWrapper>
        <Text
          fontFamily="mono"
          fontSize="lg"
          fontWeight="bold"
          fontStretch="expanded"
          bg="fg.inverted"
        >
          {`<HTML>`}
        </Text>
      </SkillTextIconWrapper>
    ),
  },
  {
    name: "",
    icon: (
      <SkillTextIconWrapper>
        <Text
          fontFamily="mono"
          fontSize="xl"
          fontWeight="bold"
          bg="fg.inverted"
        >
          {`{CSS}`}
        </Text>
      </SkillTextIconWrapper>
    ),
  },
];
