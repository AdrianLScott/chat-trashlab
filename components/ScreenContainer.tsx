import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ThemedView } from "./ThemedView";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";

type ScreenContainerProps = {
  style?: StyleProp<ViewStyle>;
}

export const ScreenContainer = ({children}: PropsWithChildren<ScreenContainerProps>) => {
  const {top: topInset} = useSafeAreaInsets();

  return (
    <ThemedView style={{paddingTop: topInset, flex: 1}}>
      {children}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})