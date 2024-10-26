export type MessageType = {
  id: string;
  text: string;
  sender: string;
  reaction?: string;
  timestamp: number;
  type: 'text' | 'image';
};