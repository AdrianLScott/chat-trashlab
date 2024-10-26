import { useThemeColor } from "@/hooks/useThemeColor";

export const useConversationColors = () => {
  const buttonColor = useThemeColor({}, "button");
  const inputBorder = useThemeColor({}, "inputBorder");
  const outwardMessageColor = useThemeColor({}, "outwardMessage");
  const outwardMessageTextColor = useThemeColor({}, "outwardMessageText");
  const inwardMessageColor = useThemeColor({}, "inwardMessage");
  const inwardMessageTextColor = useThemeColor({}, "inwardMessageText");
  const highlightedButtonColor = useThemeColor({}, "buttonHighlighted");

  return {
    buttonColor,
    inputBorder,
    outwardMessageColor,
    outwardMessageTextColor,
    inwardMessageColor,
    inwardMessageTextColor,
    highlightedButtonColor,
  }
}