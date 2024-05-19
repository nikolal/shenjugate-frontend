import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultExerciseSlots } from "@screens/workout/Workout";
import { ExerciseSlot } from "types/workout";

export const getPreviousWorkout = async () => {
  try {
    const value = await AsyncStorage.getItem(`@Workout:last`);
    if (value) {
      return JSON.parse(value);
    } else {
      return defaultExerciseSlots;
    }
  } catch (e) {
    console.log(`Error getting @Workout:last`);
  }
};

export const storePreviousWorkout = async (exerciseSlots: ExerciseSlot[]) => {
  try {
    await AsyncStorage.setItem(`@Workout:last`, JSON.stringify(exerciseSlots));
    alert("Workout Saved");
  } catch (error) {
    console.log(`Error saving @Workout:last`);
  }
};
