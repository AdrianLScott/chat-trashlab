import { Image, StyleSheet, View } from "react-native";

import { memo } from "react";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "../ThemedText";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

type ConversationPreviewProps = {
  avatar: string;
  name: string;
  lastMessage: string;
  unreadMessages: number;
  lastMessageTime: string;
};

export const ConversationPreview = memo(
  ({
    avatar,
    lastMessage,
    lastMessageTime,
    name,
    unreadMessages,
  }: ConversationPreviewProps) => {
    const primaryColor = useThemeColor({}, "primary");

    return (
      <View style={styles.container}>
        <Avatar uri={avatar} size="large" style={styles.avatar} />
        <View style={styles.messageContainer}>
          <View style={styles.messageHeaderContainer}>
            <ThemedText style={styles.messageSenderName}>{name}</ThemedText>
            <ThemedText
              lightColor={Colors.light.secondaryText}
              style={styles.lastMessageTime}
            >
              {lastMessageTime}
            </ThemedText>
          </View>
          <View style={styles.messageContentContainer}>
            <ThemedText
              numberOfLines={1}
              style={styles.lastMessage}
              lightColor={Colors.light.secondaryText}
            >
              {lastMessage}
            </ThemedText>
            {unreadMessages > 0 && (
              <View
                style={[styles.unreadMessageBadge, { backgroundColor: primaryColor }]}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
);
