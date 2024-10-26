import { ScreenContainer } from "@/components/ScreenContainer";
import { Conversation, getConversations } from "@/providers/conversations";
import { useEffect, useState } from "react";
import { ConversationsList } from "./components/ConversationsList";
import { StyleSheet } from "react-native";
import { FloatingButton } from "@/components/FloatingButton";
import { router } from "expo-router";

export const ConversationsScreen = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Add react query to fetch conversations
    setTimeout(() => {
      getConversations().then((conversations) => {
        setConversations(conversations);
        setIsLoading(false);
      });
    }, 3000);
  }, []);

  return (
    <ScreenContainer style={styles.container}>
      <ConversationsList conversations={conversations} isLoading={isLoading} />
      {conversations.length > 0 && (
        <FloatingButton
          style={styles.newConversationButton}
          onPress={() => router.navigate('/Contacts')}
        />
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  newConversationButton: {
    position: "absolute",
    bottom: 20,
    right: 15,
  },
});
