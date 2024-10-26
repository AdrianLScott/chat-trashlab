import { uuidGenerator } from "@/libs/uuid-generator";
import { MessageType } from "../types";

export const buildMessage = (
  text: string,
  sender: string,
  type: MessageType["type"] = "text"
): MessageType => ({
  id: uuidGenerator.generateUUID(),
  text,
  sender,
  timestamp: Date.now(),
  type,
});
