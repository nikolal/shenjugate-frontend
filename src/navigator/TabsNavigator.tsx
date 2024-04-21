import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@screens/home/Home";
import Exercises from "@screens/exercises/Exercises";
import Workout from "@screens/workout/Workout";

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Exercises" component={Exercises} />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
