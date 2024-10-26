import { ScreenContainer } from "@/components/ScreenContainer";
import { Conversation, getConversations } from "@/providers/conversations";
import { useEffect, useState } from "react";
import { ConversationsList } from "./components/ConversationsList";
import { StyleSheet } from "react-native";
import { FloatingButton } from "@/components/FloatingButton";
import { router, useNavigation } from "expo-router";
import { getContacts } from "@/providers/contacts";

export const ConversationsScreen = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // TODO: Add react query to fetch conversations
    setTimeout(() => {
      fetchData();  
    }, 3000);
    
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;

  }, []);

  const fetchData = () => {
    getContacts().then((contacts) => {
      getConversations(contacts).then((conversations) => {
        setConversations(conversations);
        setIsLoading(false);
      });
    })
  }

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
