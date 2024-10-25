import { FlatList } from "react-native";
import { ConversationsListHeader } from "./ConversationsListHeader";
import { ThemedActivityIndicator } from "@/components/ThemedActivityIndicator";
import { ConversationListEmptyComponent } from "./ConversationListEmptyComponent";
import { ConversationPreview } from "@/components/ConversationPreview";
import { ConversationListDivider } from "./ConversationListDivider";
import { Conversation } from "@/providers/conversations";

type ConversationsListProps = {
  conversations: Conversation[];
  isLoading: boolean;
};

export const ConversationsList = ({
  conversations,
  isLoading,
}: ConversationsListProps) => {
  return (
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
  );
};
