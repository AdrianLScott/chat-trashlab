import { ScreenContainer } from "@/components/ScreenContainer";
import { Conversation, getConversations } from "@/providers/conversations";
import { useEffect, useState } from "react";
import { ConversationsList } from "./components/ConversationsList";
import { StyleSheet } from "react-native";

export const ConversationsScreen = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Add react query to fetch conversations
    setTimeout(() => {
      getConversations().then((conversations) => {
        //setConversations(conversations);
        setIsLoading(false);
      });
    }, 3000);
  }, []);

  return (
    <ScreenContainer style={styles.container}>
      <ConversationsList conversations={conversations} isLoading={isLoading} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
