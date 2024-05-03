import React, { useCallback, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "@components/WorkoutItem";
import { Equipment, Exercise, Force, Mechanic } from "types/exercise";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { WorkoutType } from "types/workout";

const excerciseSlot: Exercise = {
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
  weight: 0,
};

function Workout() {
  const navigation = useNavigation<any>();
  const [exerciseSlots, setExcerciseSlots] = useState([
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
    excerciseSlot,
  ]);

  function updateExerciseSlot(excercise: Exercise, slotIndex: number) {
    setExcerciseSlots(
      exerciseSlots.map((item, index) =>
        index === slotIndex ? excercise : item,
      ),
    );
  }

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View className="flex-1  bg-primary">
      <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
        <Text className="color-white">OPEN ME</Text>
      </TouchableOpacity>
      {exerciseSlots.map((item: Exercise, index) => {
        return (
          <WorkoutItem
            onPress={(): void =>
              navigation.navigate("Exercises", {
                exerciseIndex: index,
                updateExerciseSlot: updateExerciseSlot,
              })
            }
            exercise={item}
            key={index}
          />
        );
      })}
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["50%"]}
        enablePanDownToClose
        index={-1}
      >
        <BottomSheetView className="bg-white flex-1">
          {[
            WorkoutType.StrengthEasy,
            WorkoutType.StrengthNormal,
            WorkoutType.StrengthHard,
            WorkoutType.VolumeEasy,
            WorkoutType.VolumeNormal,
            WorkoutType.VolumeHard,
          ].map((item) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

export default Workout;
