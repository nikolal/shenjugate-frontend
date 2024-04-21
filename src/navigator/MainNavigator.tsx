import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "@navigator/TabsNavigator";
import Exercises from "@screens/exercises/Exercises";
import colors from "theme/colors";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen
        name="Exercises"
        component={Exercises}
        options={{
          presentation: "modal",
          headerShown: true,
          headerTitleStyle: {
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
