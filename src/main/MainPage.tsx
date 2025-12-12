import { Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SkillGallery from "../me/SkillGallery";
import SectionHeading from "../components/SectionHeading";
import HivesSection from "../hives/HivesSection";
import Bio from "../me/Bio";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="16" alignItems="center">
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
