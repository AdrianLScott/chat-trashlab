import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const statusBarColor = useThemeColor({}, 'background');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={statusBarColor} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
