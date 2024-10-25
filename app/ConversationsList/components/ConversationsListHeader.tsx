import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";

export const ConversationsListHeader = () => {
  const secondaryTextColor = useThemeColor({}, "secondaryText");

  return (
    <ThemedText
      style={[
        styles.text,
        {color: secondaryTextColor},
      ]}
    >
      Conversations
    </ThemedText>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 18,
    fontWeight: "bold",
  }
})