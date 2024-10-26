import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { MessageReaction } from "./MessageReaction";
import { PropsWithChildren } from "react";
import { MessageImageContent } from "./MessageImageContent";
import { MessageTextContent } from "./MessageTextContent";

type MessageProps = {
  text: string;
  align: "left" | "right";
  backgroundColor: string;
  textColor: string;
  onDoubleTap?: () => void;
  hasReaction?: boolean;
  type?: "text" | "image";
  style?: StyleProp<ViewStyle>;
};

export const Message = ({
  backgroundColor,
  textColor,
  align,
  text,
  onDoubleTap,
  type,
  style,
  hasReaction,
}: PropsWithChildren<MessageProps>) => {
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => (onDoubleTap ? runOnJS(onDoubleTap)() : undefined));

  return (
    <View
      style={[
        { flexDirection: "row", justifyContent: "center" },
        align === "left" ? styles.leftAlign : styles.rightAlign,
      ]}
    >
      {hasReaction && align === "right" && (
        <MessageReaction
          style={{
            alignSelf: "center",
            marginRight: 5,
          }}
        />
      )}
      <GestureDetector gesture={doubleTapGesture}>
        <View style={[styles.contentContainer, { backgroundColor }, style]}>
          {type === "image" ? (
            <MessageImageContent base64Image={text} height={300} width={300} />
          ) : (
            <MessageTextContent
              textColor={textColor}
              align={align}
              text={text}
            />
          )}
        </View>
      </GestureDetector>
      {hasReaction && align === "left" && (
        <MessageReaction
          style={{
            alignSelf: "center",
            marginLeft: 5,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  leftAlign: {
    alignSelf: "flex-start",
  },
  rightAlign: {
    alignSelf: "flex-end",
  },
  rightReaction: {
    alignSelf: "center",
    marginRight: 5,
  },
  leftReaction: {
    alignSelf: "center",
    marginLeft: 5,
  },
});
