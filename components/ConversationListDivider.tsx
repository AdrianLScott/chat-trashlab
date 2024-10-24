import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    opacity: 0.2,
  }
})

export const ConversationListDivider = () => {
  const color = useThemeColor({}, "tint");

  return <View style={[styles.divider, {backgroundColor: color}]} />;
};
