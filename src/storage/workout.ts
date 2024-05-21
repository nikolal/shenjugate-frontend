import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultExerciseSlots } from "@screens/workout/Workout";
import { ExerciseSlot } from "types/workout";

export const getLastWorkout = async () => {
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

export const storeLastWorkout = async (exerciseSlots: ExerciseSlot[]) => {
  try {
    await AsyncStorage.setItem(`@Workout:last`, JSON.stringify(exerciseSlots));
    alert("Workout Saved");
  } catch (error) {
    console.log(`Error saving @Workout:last`);
  }
};

export const getNextWorkout = async () => {
  try {
    const value = await AsyncStorage.getItem(`@Workout:next`);
    if (value) {
      return JSON.parse(value);
    } else {
      return defaultExerciseSlots;
    }
  } catch (e) {
    console.log(`Error getting @Workout:next`);
  }
};

export const storeNextWorkout = async (exerciseSlots: ExerciseSlot[]) => {
  try {
    await AsyncStorage.setItem(`@Workout:next`, JSON.stringify(exerciseSlots));
  } catch (error) {
    console.log(`Error saving @Workout:next`);
  }
};
