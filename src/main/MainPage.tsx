import { Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SkillGallery from "../me/SkillGallery";
import SectionHeading from "../components/SectionHeading";
import HivesSection from "../hives/HivesSection";
import Bio from "../me/Bio";

const MainPage = () => {
  const { t } = useTranslation();

  //TODO:
  //[_] Skills section: make auto scrolling showcase a la "Clients" logo section
  //[_] Update LinkedIn ASAP!
  //[_] make language selection a Menu (and dark/light mode a switch, if I wanna?)
  //[_] remove overflowY="auto" to make ultrawide screens get default main scrollbar
  //[_] Align ALL content with Separator width Kenny recommends
  //[_] ScreencapCarousel
  //  [_] make less tall
  //  [_] make vertical in mobile
  //  [_] (even worth it?) make second attempt at variant="always" ScrollArea
  //[_] register a custom domain!


  return (
    <Stack gap="16" alignItems="flex-start">
      <Bio />
      <Stack gap="8" width="full" alignItems="center">
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
