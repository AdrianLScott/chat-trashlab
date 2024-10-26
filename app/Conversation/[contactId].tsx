import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";

const Conversation = () => {
  const { contactId } = useLocalSearchParams();

  return <ThemedText>This is conversation screen {contactId}</ThemedText>;
};

export default Conversation;