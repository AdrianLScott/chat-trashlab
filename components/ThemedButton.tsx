import {
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { PropsWithChildren } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

type ThemedButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const ThemedButton = ({
  children,
  style,
  onPress,
}: PropsWithChildren<ThemedButtonProps>) => {
  const buttonColor = useThemeColor({}, "button");
  const buttonHighlighted = useThemeColor({}, "buttonHighlighted");
  const buttonTextColor = useThemeColor({}, "buttonText");

  return (
    <TouchableHighlight
      underlayColor={buttonHighlighted}
      onPress={onPress}
      style={[{backgroundColor: buttonColor}, styles.button, style]}
    >
      <ThemedText type="defaultSemiBold" lightColor={buttonTextColor}>
        {children}
      </ThemedText>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 5,
    paddingVertical: 20,
    alignContent: "center",
    alignItems: "center",
  },
});
