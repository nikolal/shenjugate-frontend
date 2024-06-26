import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainNavigator from "@navigator/MainNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <StatusBar style="auto" />
            <MainNavigator />
          </QueryClientProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
