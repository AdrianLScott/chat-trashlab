import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ThemedView } from "./ThemedView";

export const SafeAreaContainer = (props: {children: React.ReactNode}) => {
  const {top: topInset} = useSafeAreaInsets();

  return (
    <ThemedView style={{paddingTop: topInset, flex: 1}}>
      {props.children}
    </ThemedView>
  )

}