import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";

export const ConversationListEmptyComponent = () => {
  const primaryColor = useThemeColor({}, "primary");
  
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={styles.container}>
        <MaterialCommunityIcon
          name="message-off-outline"
          size={120}
          color={primaryColor}
        />
        <ThemedText type="subtitle" style={{ marginTop: 20 }}>
          No messages yet.
        </ThemedText>
        <ThemedText type="default" style={{ marginTop: 10 }}>
          When you start a conversation, it will appear here.
        </ThemedText>
      </View>
      <ThemedButton style={{ marginBottom: 20 }} onPress={() => {}}>
        Create a new conversation
      </ThemedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
