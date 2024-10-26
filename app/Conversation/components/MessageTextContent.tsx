import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";

type MessageTextContent = {
  text: string;
  align: "left" | "right";
  textColor: string;
};

export const MessageTextContent = ({
  textColor,
  align,
  text,
}: MessageTextContent) => (
  <ThemedText
    style={[
      styles.message,
      {
        textAlign: align === "left" ? "left" : "right",
        color: textColor,
      },
    ]}
  >
    {text}
  </ThemedText>
);

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
