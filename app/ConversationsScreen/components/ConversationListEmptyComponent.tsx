import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export const ConversationListEmptyComponent = () => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <MaterialCommunityIcon
          name="message-off-outline"
          size={120}
          color={primaryColor}
        />
        <ThemedText type="subtitle" style={styles.title}>
          No messages yet.
        </ThemedText>
        <ThemedText type="default" style={styles.description}>
          When you start a conversation, it will appear here.
        </ThemedText>
      </View>
      <ThemedButton style={styles.button} onPress={() => router.push('/Contacts')}>
        Create a new conversation
      </ThemedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 20,
  },
  description: {
    marginTop: 10,
  },
  button: {
    marginBottom: 20,
  },
});
