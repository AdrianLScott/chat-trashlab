import { StoredConversations } from "@/helpers/message-service";
import { Conversation } from ".";
import { Contact } from "../contacts";

export const latestFirst = (a: Conversation, b: Conversation) =>
  a.lastMessageTimestamp > b.lastMessageTimestamp ? -1 : 1;

export const formatConversations = (
  storedConversations: StoredConversations,
  contacts: Contact[]
) =>
  Object.entries(storedConversations).map(([contactId, messages]) => {
    const contact = contacts.find((contact) => contact.id === contactId);
    if (!contact) {
      return null;
    }

    const lastMessage = messages[messages.length - 1];
    return {
      id: contactId,
      contactId,
      avatar: contact.avatar,
      name: contact.name,
      lastMessage: lastMessage.text,
      unreadMessages: 0,
      lastMessageTimestamp: lastMessage.timestamp,
      lastMessageType: lastMessage.type,
      lastMessageTime: formatDate(lastMessage.timestamp),
    };
  });

// TODO: this should be improved by using a library like luxon or whatever lib for date formatting
// theres ux improvements to be done here, the current format would be misleading for messages in the past year
export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();

  const isToday = date.toDateString() === now.toDateString();

  if (isToday) {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } else {
    return date.toLocaleDateString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }
};
