import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type MessageReactionProps = {
  style?: StyleProp<ViewStyle>;
};

export const MessageReaction = ({style}: MessageReactionProps) => {
  const reactionBackground = useThemeColor({}, "reactionBackground");

  return (
    <View style={[styles.container, { backgroundColor: reactionBackground }, style]}>
      <MaterialCommunityIcons name="heart" size={20} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 4,
    marginLeft: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});
