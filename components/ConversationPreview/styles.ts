import { StyleSheet } from "react-native";

const AVATAR_SIZE = 50;
const UNREAD_MESSAGE_BADGE_SIZE = 10;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },
  avatar: {
    height: AVATAR_SIZE,
    aspectRatio: 1,
    marginRight: 15,
    borderRadius: AVATAR_SIZE / 2,
  },
  messageContainer: {
    flex: 1,
  },
  messageHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageSenderName: {
    fontWeight: "bold",
  },
  lastMessageTime: {
    fontSize: 14,
  },
  messageContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastMessage: {
    fontSize: 14, flex: 1
  },
  unreadMessageBadge: {
    height: UNREAD_MESSAGE_BADGE_SIZE,
    aspectRatio: 1,
    borderRadius: UNREAD_MESSAGE_BADGE_SIZE / 2,
  }
});