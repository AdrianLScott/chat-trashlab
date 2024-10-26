import { ScreenContainer } from "@/components/ScreenContainer";
import { SectionList } from "react-native";
import { useContactsSectionList } from "./hooks/useContactsSectionList";
import { ContactPreview } from "./components/ContactPreview";
import { SectionListHeader } from "./components/SectionListHeader";
import { router } from "expo-router";

const Contacts = () => {
  const { sections } = useContactsSectionList();

  return (
    <ScreenContainer>
      <SectionList
        sections={sections}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <ContactPreview {...item} onPress={() => router.replace(`/Conversation/${item.id}`)} />
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section: { title } }) => (
          <SectionListHeader title={title} />
        )}
      ></SectionList>
    </ScreenContainer>
  );
};

export default Contacts;
