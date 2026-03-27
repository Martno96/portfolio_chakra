import { Box, Card, Container, HStack, Wrap } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { skills } from "./skills";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const SkillList = ({ skills }: { skills: Skill[] }) => (
  <HStack
    width="fit-content"
    gap="4"
    alignItems="flex-start"
    justifyContent="flex-start"
    style={{ willChange: "transform" }}
  >
    {skills.map((skill, index) => (
      <Card.Root
        size="sm"
        cursor="default"
        key={index}
        textAlign="center"
        variant="outline"
        border="none"
        bg="transparent"
        style={{ willChange: "transform" }}
      >
        <Card.Body
          gap="3"
          alignItems="center"
          justifyContent="space-around"
          py="3"
          height="full"
          style={{ willChange: "transform" }}
        >
          <Box opacity="0.5" height="60px" style={{ willChange: "transform" }}>
            {skill.icon}
          </Box>
          <Card.Description
            width="min-content"
            whiteSpace="wrap"
            minW="90px"
            lineHeight="shorter"
            wordBreak="auto-phrase"
            fontSize={
              skill.name.length > 10
                ? skill.name.length > 18
                  ? "sm"
                  : "md"
                : "lg"
            }
            color="fg.muted"
            style={{ willChange: "transform" }}
          >
            {skill.name}
          </Card.Description>
        </Card.Body>
      </Card.Root>
    ))}
  </HStack>
);

const SkillGallery = () => {
  const ref = useRef(null);
  const [galleryWidth, setGalleryWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const width = (ref.current as HTMLElement).scrollWidth;
      setGalleryWidth(width);
    }
  }, [ref]);

  //TODO: Since last I had checked, Chakra apparently already released a premade component for all this x,D
  //https://www.chakra-ui.com/docs/components/marquee
  //I should switch to it, since it has built-in pause on hover, etc.

  const loopGap = 50;
  const duration = 20;
  const multiplier = 1 - 0.025 * duration;

  return (
    <Container ref={ref} width="full" maxW="8xl" overflowX="hidden" p="0px">
      <motion.div
        initial={{ x: 0 }}
        animate={{ translateX: -(galleryWidth / 2) - loopGap * multiplier }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <HStack
          style={{ willChange: "transform" }}
          gap={`${loopGap}px`}
          alignItems="flex-start"
          p="0px"
        >
          <SkillList skills={skills} />
          <SkillList
            //Duplicate for seamless scrolling!
            skills={skills}
          />
        </HStack>
      </motion.div>
    </Container>
  );
};

export default SkillGallery;
