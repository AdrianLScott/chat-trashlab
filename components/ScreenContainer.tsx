import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "./ThemedView";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";

type ScreenContainerProps = {
  style?: StyleProp<ViewStyle>;
};

export const ScreenContainer = ({
  children,
  style,
}: PropsWithChildren<ScreenContainerProps>) => {
  const { top: topInset } = useSafeAreaInsets();

  return (
    <ThemedView style={[styles.container, { paddingTop: topInset }, style]}>
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
