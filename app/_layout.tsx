import "react-native-get-random-values";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const statusBarColor = useThemeColor({}, "background");
  //storage.clear()

  return (
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
          // TODO: Check how to type this with expo 
          // @ts-ignore
          options={({ route }) => ({ headerTitle: route.params?.contactName })}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
