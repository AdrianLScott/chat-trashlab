import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
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
  const buttonTextColor = useThemeColor({}, "buttonText");

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[{backgroundColor: buttonColor}, styles.button, style]}
    >
      <ThemedText type="defaultSemiBold" lightColor={buttonTextColor}>
        {children}
      </ThemedText>
    </TouchableOpacity>
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
