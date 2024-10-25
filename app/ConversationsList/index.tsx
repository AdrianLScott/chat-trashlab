import { ConversationListDivider } from "@/app/ConversationsList/components/ConversationListDivider";
import { ConversationPreview } from "@/components/ConversationPreview";
import { ConversationsListHeader } from "@/app/ConversationsList/components/ConversationsListHeader";
import { SafeAreaContainer } from "@/components/SafeAreaContainer";
import { ThemedView } from "@/components/ThemedView";
import { Conversation, getConversations } from "@/providers/conversations";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

export const ConversationsList = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    // TODO: Add react query to fetch conversations
    setTimeout(() => {
      getConversations().then((conversations) => {
        setConversations(conversations);
      });
    },3000)
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
          renderItem={({ item }) => (
            <ConversationPreview
              avatar={item.avatar}
              lastMessage={item.lastMessage}
              lastMessageTime={item.lastMessageTime}
              name={item.name}
              unreadMessages={item.unreadMessages}
            />
          )}
          //ListFooterComponent={}
          ItemSeparatorComponent={ConversationListDivider}
        />
      </ThemedView>
    </SafeAreaContainer>
  );
}
