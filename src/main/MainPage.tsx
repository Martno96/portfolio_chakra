import { Container, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SkillGallery from "../me/SkillGallery";
import SectionHeading from "../components/SectionHeading";
import HivesSection from "../hives/HivesSection";
import Bio from "../me/Bio";

const MainPage = () => {
  const { t } = useTranslation();

  //TODO:
  //--- NOW ---
  //> Properly implement language provider for carousel
  //> Make language selection a Menu and dark/light mode a switch
  //
  //--- LATER ---
  //> Have SkillGallery switch to Chakra's own Marquee https://www.chakra-ui.com/docs/components/marquee
  //> Find and use proper svg icons for TS and Chakra UI
  //> Remove overflowY="auto" to make ultrawide screens get default main scrollbar
  //> Align ALL content with Separator width, Kenny recommends
  //> Register a custom domain!

  return (
    <Stack gap="16" alignItems="flex-start">
      <Bio />
      <Stack gap="8" width="full" alignItems="flex-start">
        <SectionHeading>{t("me.skills.title")}</SectionHeading>
        <SkillGallery />
      </Stack>
      <Stack gap="8" width="full" alignItems="flex-start">
        <SectionHeading>{t("me.projects.title")}</SectionHeading>
        <HivesSection />
      </Stack>
    </Stack>
  );
};

export default MainPage;
