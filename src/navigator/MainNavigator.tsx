import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "@navigator/TabsNavigator";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabsNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
