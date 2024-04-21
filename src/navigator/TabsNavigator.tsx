import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@screens/home/Home";
import Workout from "@screens/workout/Workout";
import colors from "theme/colors";

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.white,
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tab.Screen name="Workout" component={Workout} />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
