import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View } from "react-native";

export const ConversationListDivider = () => {
  const color = useThemeColor({}, "dividerColor");

  return <View style={[styles.divider, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    opacity: 0.2,
  }
})
