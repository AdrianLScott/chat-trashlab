import { uuidGenerator } from "@/libs/uuid-generator";
import { MessageType } from "../types";

export const buildMessage = (text: string, sender: string): MessageType => ({
  id: uuidGenerator.generateUUID(),
  text,
  sender,
  timestamp: Date.now(),
});
