import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExerciseSlot from "@components/ExerciseSlot";
import { Exercise } from "types/exercise";
import { workoutExercises } from "./workoutExercises";

function Workout() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1  bg-primary">
      {workoutExercises.map((item: Exercise) => {
        return (
          <ExerciseSlot
            onPress={(): void => navigation.navigate("Exercises")}
            exercise={item}
          />
        );
      })}
    </View>
  );
}

export default Workout;
