import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { MessageReaction } from "./MessageReaction";

type MessageProps = {
  text: string;
  align: "left" | "right";
  outwardMessageColor: string;
  outwardMessageTextColor: string;
  onDoubleTap?: () => void;
  hasReaction?: boolean;
};

export const Message = ({
  outwardMessageColor,
  outwardMessageTextColor,
  align,
  text,
  hasReaction,
  onDoubleTap,
}: MessageProps) => {
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => (onDoubleTap ? runOnJS(onDoubleTap)() : undefined));

  return (
    <GestureDetector gesture={doubleTapGesture}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: align === "left" ? "flex-start" : "flex-end",
          flexDirection: "row",
        }}
      >
        {hasReaction && align === "right" && (
          <MessageReaction
            style={{
              alignSelf: "center",
              marginRight: 5,
            }}
          />
        )}
        <ThemedText
          style={[
            styles.message,
            {
              textAlign: align === "left" ? "left" : "right",
              backgroundColor: outwardMessageColor,
              color: outwardMessageTextColor,
            },
          ]}
        >
          {text}
        </ThemedText>
        {hasReaction && align === "left" && (
          <MessageReaction
            style={{
              alignSelf: "center",
              marginLeft: 5,
            }}
          />
        )}
      </View>
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
