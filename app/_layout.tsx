import "react-native-get-random-values";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const statusBarColor = useThemeColor({}, "background");
  //storage.clear()

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style="dark" backgroundColor={statusBarColor} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="Contacts/index"
            options={{ presentation: "modal", headerTitle: "Contacts" }}
          />
          <Stack.Screen
            name="Conversation/[contactId]"
            options={({ route }) => ({
              // TODO: Check how to type this with expo
              // @ts-ignore
              headerTitle: route.params?.contactName,
            })}
          />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
