import React, { useCallback, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "@components/WorkoutItem";
import { Equipment, Exercise, Force, Mechanic } from "types/exercise";
import { ExerciseData, ExerciseSlot, ExerciseTemplate } from "types/workout";
import {
  TemplateDifficulty,
  TemplateType,
  selectTemplate,
  strengthEasyTemplate,
  // volumeNormalTemplate,
} from "./templates";
import SegmentedControlPicker from "@components/SegmentedControlPicker";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import colors from "theme/colors";
import { Ionicons } from "@expo/vector-icons";

const defaultExercise: Exercise = {
  category: "N/A",
  equipment: Equipment.NotAssigned,
  force: Force.NotAssigned,
  id: "default_id",
  instructions: [],
  level: "N/A",
  mechanic: Mechanic.NotAssigned,
  name: "Select exercise",
  primary_muscles: [],
  secondary_muscles: [],
  weight: 0,
};

const defaultData: ExerciseData[] = [
  {
    percent: 0,
    repetitions: 0,
    sets: 0,
    weight: 0,
  },
];

const defaultSlots: ExerciseSlot[] = [
  { exercise: defaultExercise, data: defaultData },
  { exercise: defaultExercise, data: defaultData },
  { exercise: defaultExercise, data: defaultData },
];

function Workout() {
  const navigation = useNavigation<any>();
  const [exerciseSlots, setExerciseSlots] =
    useState<ExerciseSlot[]>(defaultSlots);
  // const [template, setTemplate] = useState<ExerciseTemplate>(
  //   volumeNormalTemplate(exerciseSlots),
  // );
  const [templateType, setTemplateType] = useState<TemplateType>(
    TemplateType.Volume,
  );
  const [templateDifficulty, setTemplateDifficulty] =
    useState<TemplateDifficulty>(TemplateDifficulty.Normal);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // useEffect(() => {
  //   setTemplate(
  //     selectTemplate({
  //       templateDifficulty: templateDifficulty,
  //       templateType: templateType,
  //       exercises: exerciseSlots,
  //     }),
  //   );
  // }, [templateDifficulty, templateType, exerciseSlots]);

  const updateExerciseSlot = (exercise: Exercise, slotIndex: number) => {
    const template = selectTemplate({
      templateDifficulty,
      templateType,
      exercise,
    });
    const slot = { exercise: exercise, data: template };
    setExerciseSlots(
      exerciseSlots.map((item, index) => (index === slotIndex ? slot : item)),
    );
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View className="flex-1  bg-primary">
      <ScrollView className="flex-1">
        <Text className="text-sm text-textSecondary my-2">Exercises</Text>

        {exerciseSlots.map((item, index) => {
          return (
            <WorkoutItem
              onPress={(): void =>
                navigation.navigate("Exercises", {
                  exerciseIndex: index,
                  updateExerciseSlot: updateExerciseSlot,
                })
              }
              exerciseSlot={item}
              key={String(index)}
              exerciseTemplateIndex={index}
              openBottomSheet={openBottomSheet}
            />
          );
        })}

        {/* {template.exercises.map((item: ExerciseTemplate, index) => {
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
        })} */}
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["50%"]}
        enablePanDownToClose
        index={-1}
        backgroundStyle={{ backgroundColor: colors.secondary }}
        // handleStyle={{ borderTopWidth: 0.5, borderColor: "red" }}
        handleIndicatorStyle={{ backgroundColor: colors.ternary }}
      >
        <View className="flex-1 flex-row flex-wrap justify-around content-around bg-primary">
          {[
            {
              templateType: TemplateType.Strength,
              templateDifficulty: TemplateDifficulty.Easy,
            },
            {
              templateType: TemplateType.Strength,
              templateDifficulty: TemplateDifficulty.Normal,
            },
            {
              templateType: TemplateType.Strength,
              templateDifficulty: TemplateDifficulty.Hard,
            },
            {
              templateType: TemplateType.Volume,
              templateDifficulty: TemplateDifficulty.Easy,
            },
            {
              templateType: TemplateType.Volume,
              templateDifficulty: TemplateDifficulty.Normal,
            },
            {
              templateType: TemplateType.Volume,
              templateDifficulty: TemplateDifficulty.Hard,
            },
          ].map((item, index) => {
            return (
              <TouchableOpacity
                key={String(index)}
                className=" justify-around bg-secondary w-24 h-24 border-[0.5px] border-ternary rounded-lg"
              >
                <View className="flex-row items-center p-1">
                  <View className="mr-2">
                    <Ionicons
                      name={"barbell"}
                      size={18}
                      color={colors.accentBlue}
                    />
                  </View>
                  <Text className="color-textSecondary text-sm">
                    {item.templateType}
                  </Text>
                </View>
                <View className="flex-row items-center p-1">
                  <View className="mr-2">
                    <Ionicons
                      name={"fitness"}
                      size={18}
                      color={colors.accentRed}
                    />
                  </View>
                  <Text className="color-textSecondary text-sm">
                    {item.templateDifficulty}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}

          {/* <Text className="text-sm text-textSecondary my-1">Difficulty</Text> */}
          {/* <SegmentedControlPicker
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
          /> */}
        </View>
      </BottomSheet>
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
