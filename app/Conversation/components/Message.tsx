import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

type MessageProps = {
  text: string;
  align: "left" | "right";
  outwardMessageColor: string;
  outwardMessageTextColor: string;
  onDoubleTap?: () => void;
};

export const Message = ({
  outwardMessageColor,
  outwardMessageTextColor,
  align,
  text,
  onDoubleTap,
}: MessageProps) => {
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => onDoubleTap ? runOnJS(onDoubleTap)() : undefined);

  return (
    <GestureDetector gesture={doubleTapGesture}>
      <ThemedText
        style={[
          styles.message,
          {
            alignSelf: align === "left" ? "flex-start" : "flex-end",
            textAlign: align === "left" ? "left" : "right",
            backgroundColor: outwardMessageColor,
            color: outwardMessageTextColor,
          },
        ]}
      >
        {text}
      </ThemedText>
    </GestureDetector>
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
