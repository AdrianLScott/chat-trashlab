import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";

type MessageProps = {
  text: string;
  align: "left" | "right";
  outwardMessageColor: string;
  outwardMessageTextColor: string;
};

export const Message = ({
  outwardMessageColor,
  outwardMessageTextColor,
  align,
  text,
}: MessageProps) => {
  return (
    <ThemedText
      style={[styles.message, {
        alignSelf: align === "left" ? "flex-start" : "flex-end",
        textAlign: align === "left" ? "left" : "right",
        backgroundColor: outwardMessageColor,
        color: outwardMessageTextColor,
      }]}
    >
      {text}
    </ThemedText>
  );
};

const styles = StyleSheet.create({
  message: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 2,
  },
  messageText: {
    fontSize: 16,
  },
});