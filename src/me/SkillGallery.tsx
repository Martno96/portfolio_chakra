import { Box, Card, Container, HStack } from "@chakra-ui/react";
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
    {skills.map((skill) => (
      <Card.Root
        size="sm"
        cursor="default"
        key={skill.name}
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
          <Box opacity="0.5" style={{ willChange: "transform" }}>
            {skill.icon}
          </Box>
          <Card.Description
            width="min-content"
            minW="100px"
            fontSize={skill.name.length > 12 ? "sm" : "md"}
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

  // Consider investing in Motion+ to use its dedicated Ticker component here
  // For now, this solution will suffice
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
          {/* Duplicate for seamless scrolling: */}
          <SkillList skills={skills} />
        </HStack>
      </motion.div>
    </Container>
  );
};

export default SkillGallery;
