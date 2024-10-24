import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ThemedView } from "./ThemedView";

export const SafeAreaContainer = (props: {children: React.ReactNode}) => {
  const {top: topInset} = useSafeAreaInsets();

  return (
    <ThemedView style={{marginTop: topInset, flex: 1}}>
      {props.children}
    </ThemedView>
  )

}