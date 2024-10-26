/**
 * This would be the message-service, for now it only get and set values from storage but is replaceble.
 */
import { storage, StorageType } from "@/libs/storage";

export type StoredConversation = {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
};

export type StoredConversations = { [key: string]: StoredConversation[] };

/**
 * Get all conversations from local storage
 */
const getConversations = async (): Promise<StoredConversations> => {
  const storedConversationsString = await storage.getItem(
    StorageType.conversations
  );
  if (!storedConversationsString) {
    return {};
  }

  const storedConversations = (await JSON.parse(storedConversationsString)) as {
    [key: string]: StoredConversation[];
  };
  return storedConversations;
};

/**
 * Set conversation in local storage
 */
const sendMessage = async (
  contactId: string,
  newMessage: StoredConversation
) => {
  // This would be highly inefficient in a real-world scenario
  const prevConversations = await getConversations();
  const prevConversation = await getConversation(contactId);

  const conversations = prevConversations || {};
  const messages = prevConversation ? [...prevConversation, newMessage] : [newMessage];
  
  conversations[contactId] = messages;
  await storage.setItem(StorageType.conversations, conversations);
};

/**
 * Get conversation from local storage
 */
const getConversation = async (
  contactId: string
): Promise<StoredConversation[] | null> => {
  const storedConversationsString = await storage.getItem(
    StorageType.conversations
  );
  if (!storedConversationsString) {
    return null;
  }

  const storedConversations = (await JSON.parse(storedConversationsString)) as {
    [key: string]: StoredConversation[];
  };
  return storedConversations[contactId] || null;
};

export const messageService = {
  sendMessage,
  getConversation,
  getConversations,
};
