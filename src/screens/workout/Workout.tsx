import React from "react";
import { View, Text } from "react-native";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import ExerciseSlot from "@components/ExerciseSlot";

function Workout() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1  bg-primary">
      <ExerciseSlot
        name="Squat"
        onPress={(): void => navigation.navigate("Exercises")}
      />
      <ExerciseSlot
        name="Bench Press"
        onPress={(): void => navigation.navigate("Exercises")}
      />
      <ExerciseSlot
        name="Seated Cable Row"
        onPress={(): void => navigation.navigate("Exercises")}
      />
      <ExerciseSlot
        name="Seated hamstring Curl"
        onPress={(): void => navigation.navigate("Exercises")}
      />
      <ExerciseSlot
        name="Abs"
        onPress={(): void => navigation.navigate("Exercises")}
      />
      <ExerciseSlot
        name="Back Extension"
        onPress={(): void => navigation.navigate("Exercises")}
      />
    </View>
  );
}

export default Workout;
