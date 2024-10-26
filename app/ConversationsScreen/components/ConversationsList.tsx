import { FlatList } from "react-native";
import { ConversationsListHeader } from "./ConversationsListHeader";
import { ThemedActivityIndicator } from "@/components/ThemedActivityIndicator";
import { ConversationListEmptyComponent } from "./ConversationListEmptyComponent";
import { ConversationPreview } from "@/app/ConversationsScreen/ConversationPreview";
import { ConversationListDivider } from "./ConversationListDivider";
import { Conversation } from "@/providers/conversations";
import { CONVERSATIONS_LIST_LOADER_TEST_ID } from "./contants";
import { router } from "expo-router";

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
          <ThemedActivityIndicator testID={CONVERSATIONS_LIST_LOADER_TEST_ID} size={"large"} />
        ) : (
          <ConversationListEmptyComponent />
        )
      }
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ConversationPreview
          onPress={() => router.navigate(`/Conversation/${item.id}`)}
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
