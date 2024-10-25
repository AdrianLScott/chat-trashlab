import { useThemeColor } from "@/hooks/useThemeColor";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

export function ThemedActivityIndicator(props: ActivityIndicatorProps) {
  const primaryColor = useThemeColor({}, "primary");

  return <ActivityIndicator color={primaryColor} {...props} />;
};
