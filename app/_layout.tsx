import 'react-native-get-random-values';
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const statusBarColor = useThemeColor({}, "background");

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
          options={{ headerTitle: "Conversation" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
