import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
} from "react-native";

type FloatingButtonProps = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const FloatingButton = ({ onPress, style }: FloatingButtonProps) => {
  const buttonColor = useThemeColor({}, "button");
  const buttonHighlighted = useThemeColor({}, "buttonHighlighted");

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={buttonHighlighted}
      style={[styles.buttonContainer, { backgroundColor: buttonColor }, style]}
    >
      <MaterialCommunityIcons name="message-text" size={35} color={"white"} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
