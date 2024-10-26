/**
 * This file is used to provide the conversations data to the components.
 * It should be used to get the conversations from wherever they are stored.
 */
import {
  messageService,
} from "@/helpers/message-service";
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
  lastMessageType: 'text' | 'image';
  lastMessageTimestamp: number;
};

export const getConversations = async (contacts: Contact[]): Promise<Conversation[]> => {
  const storedConversations = await messageService.getConversations();

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
