/**
 * This file is used to provide the conversations data to the components.
 * It should be used to get the conversations from wherever they are stored.
 */
import {
  conversationsStore,
} from "@/helpers/conversations-store";
import { Contact } from "../contacts";
import { formatConversations, latestFirst } from "./utils";

export type Conversation = {
  id: string;
  contactId: string;
  avatar: string;
  name: string;
  lastMessage: string;
  unreadMessages: number;
  lastMessageTime: string;
  lastMessageTimestamp: number;
};

export const getConversations = async (contacts: Contact[]): Promise<Conversation[]> => {
  const storedConversations = await conversationsStore.getConversations();

  if (!storedConversations) {
    return [];
  }

  const formattedConversations = formatConversations(
    storedConversations,
    contacts
  );

  const filteredConversations = formattedConversations.filter(conversation => conversation !== null)

  return filteredConversations.sort(latestFirst);
};
