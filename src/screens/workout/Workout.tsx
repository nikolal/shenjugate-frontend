import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "@components/WorkoutItem";
import { Equipment, Exercise, Force, Mechanic } from "types/exercise";
// import { ExerciseSlot } from "types/exercise";

const excerciseSlot = {
  category: "N/A",
  equipment: Equipment.NotAssigned,
  force: Force.NotAssigned,
  id: "default_id",
  instructions: [],
  level: "N/A",
  mechanic: Mechanic.NotAssigned,
  name: "Select excercise",
  primary_muscles: [],
  secondary_muscles: [],
};

function Workout() {
  const navigation = useNavigation<any>();
  const [exerciseSlot, setExcerciseSlot] = useState([
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
  ]);
  return (
    <View className="flex-1  bg-primary">
      {exerciseSlot.map((item: Exercise, index) => {
        return (
          <WorkoutItem
            onPress={(): void =>
              navigation.navigate("Exercises", {
                exerciseIndex: index,
              })
            }
            exercise={item}
            index={index}
          />
        );
      })}
    </View>
  );
}

export default Workout;
