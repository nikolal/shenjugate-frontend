import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "@components/WorkoutItem";
import { Equipment, Exercise, Force, Mechanic } from "types/exercise";
import { ExerciseTemplate, WorkoutTemplate } from "types/workout";
import {
  TemplateDifficulty,
  TemplateType,
  selectTemplate,
  volumeNormalTemplate,
} from "./templates";
import SegmentedControlPicker from "@components/SegmentedControlPicker";

const defaultExercise: Exercise = {
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
    defaultExercise,
    defaultExercise,
    defaultExercise,
    defaultExercise,
    defaultExercise,
    defaultExercise,
  ]);
  const [template, setTemplate] = useState<WorkoutTemplate>(
    volumeNormalTemplate(exerciseSlots),
  );
  const [templateType, setTemplateType] = useState<TemplateType>(
    TemplateType.Volume,
  );
  const [templateDifficulty, setTemplateDifficulty] =
    useState<TemplateDifficulty>(TemplateDifficulty.Normal);

  useEffect(() => {
    setTemplate(
      selectTemplate({
        templateDifficulty: templateDifficulty,
        templateType: templateType,
        exercises: exerciseSlots,
      }),
    );
  }, [templateDifficulty, templateType, exerciseSlots]);

  const updateExerciseSlot = (excercise: Exercise, slotIndex: number) => {
    setExcerciseSlots(
      exerciseSlots.map((item, index) =>
        index === slotIndex ? excercise : item,
      ),
    );
  };

  return (
    <View className="flex-1  bg-primary">
      <ScrollView className="flex-1">
        <Text className="text-sm text-textSecondary my-1">Difficulty</Text>
        <SegmentedControlPicker
          values={[
            TemplateDifficulty.Easy,
            TemplateDifficulty.Normal,
            TemplateDifficulty.Hard,
          ]}
          onValueChange={(value: string) =>
            setTemplateDifficulty(value as TemplateDifficulty)
          }
        />

        <Text className="text-sm text-textSecondary my-2">Type</Text>

        <SegmentedControlPicker
          values={[TemplateType.Strength, TemplateType.Volume]}
          onValueChange={(value: string) =>
            setTemplateType(value as TemplateType)
          }
        />

        <Text className="text-sm text-textSecondary my-2">Exercises</Text>

        {template.exercises.map((item: ExerciseTemplate, index) => {
          return (
            <WorkoutItem
              onPress={(): void =>
                navigation.navigate("Exercises", {
                  exerciseIndex: index,
                  updateExerciseSlot: updateExerciseSlot,
                })
              }
              exerciseTemplate={item}
              key={String(index)}
              exerciseTemplateIndex={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Workout;

// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// // ref
// const bottomSheetRef = useRef<BottomSheet>(null);

// // callbacks
// const handleSheetChanges = useCallback((index: number) => {
//   console.log("handleSheetChanges", index);
// }, []);

//  <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
//       <Text className="color-white">OPEN ME</Text>
//     </TouchableOpacity>

/* <BottomSheet
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
      <TouchableOpacity key={item}>
        <Text>{item}</Text>
      </TouchableOpacity>
    ))}
  </BottomSheetView>
</BottomSheet>; */
