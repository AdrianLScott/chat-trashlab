import { ConversationListDivider } from "@/app/ConversationsScreen/components/ConversationListDivider";
import { ConversationPreview } from "@/components/ConversationPreview";
import { ConversationsListHeader } from "@/app/ConversationsScreen/components/ConversationsListHeader";
import { SafeAreaContainer } from "@/components/SafeAreaContainer";
import { ThemedView } from "@/components/ThemedView";
import { Conversation, getConversations } from "@/providers/conversations";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ThemedActivityIndicator } from "@/components/ThemedActivityIndicator";
import { ConversationListEmptyComponent } from "./components/ConversationListEmptyComponent";

export const ConversationsList = () => {
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
    <SafeAreaContainer>
      <ThemedView
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <FlatList
          data={conversations}
          ListHeaderComponent={ConversationsListHeader}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={
            isLoading ? (
              <ThemedActivityIndicator size={"large"} />
            ) : (
              <ConversationListEmptyComponent />
            )
          }
          renderItem={({ item }) => (
            <ConversationPreview
              avatar={item.avatar}
              lastMessage={item.lastMessage}
              lastMessageTime={item.lastMessageTime}
              name={item.name}
              unreadMessages={item.unreadMessages}
            />
          )}
          ItemSeparatorComponent={ConversationListDivider}
        />
      </ThemedView>
    </SafeAreaContainer>
  );
};
