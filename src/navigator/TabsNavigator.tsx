import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Workout from "@screens/workout/Workout";
import colors from "theme/colors";
import { Ionicons } from "@expo/vector-icons";
import Home from "@screens/home/Home";

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
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderColor: colors.ternary,
          borderTopWidth: 0.5,
          borderTopColor: colors.ternary,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.ternary,
      }}
    >
      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="barbell"
              size={24}
              color={focused ? colors.white : colors.ternary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? colors.white : colors.ternary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
