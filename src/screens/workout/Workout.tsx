import React, { useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "@components/WorkoutItem";
import { Equipment, Exercise, Force, Mechanic } from "types/exercise";
import { ExerciseSlot, ExerciseTemplate } from "types/workout";
import { TemplateDifficulty, TemplateType, selectTemplate } from "./templates";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import colors from "theme/colors";
import Button from "@components/Button";
import IconByTemplateType from "@components/IconByTemplateType";

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

export const defaultTemplate: ExerciseTemplate = [
  {
    percent: 0,
    repetitions: 0,
    sets: 0,
    weight: 0,
  },
];

const defaultSlots: ExerciseSlot[] = [
  {
    exercise: defaultExercise,
    data: defaultTemplate,
    index: 0,
    templateType: TemplateType.Power,
  },
  {
    exercise: defaultExercise,
    data: defaultTemplate,
    index: 1,
    templateType: TemplateType.Strength,
  },
  {
    exercise: defaultExercise,
    data: defaultTemplate,
    index: 2,
    templateType: TemplateType.Hypertrophy,
  },
  {
    exercise: defaultExercise,
    data: defaultTemplate,
    index: 3,
    templateType: TemplateType.Endurance,
  },
  {
    exercise: defaultExercise,
    data: defaultTemplate,
    index: 4,
    templateType: TemplateType.Assistance,
  },
  {
    exercise: defaultExercise,
    data: defaultTemplate,
    index: 5,
    templateType: TemplateType.Assistance,
  },
];

const templateTypes: TemplateType[] = [
  TemplateType.Strength,
  TemplateType.Power,
  TemplateType.Speed,
  TemplateType.Hypertrophy,
  TemplateType.Endurance,
  TemplateType.Assistance,
];

function Workout() {
  const navigation = useNavigation<any>();
  const [exerciseSlots, setExerciseSlots] =
    useState<ExerciseSlot[]>(defaultSlots);
  const [selectedExerciseSlot, setSelectedExerciseSlot] =
    useState<ExerciseSlot>(defaultSlots[0]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const updateExerciseSlot = (exerciseSlot: ExerciseSlot) => {
    setExerciseSlots(
      exerciseSlots.map((item) =>
        item.index === exerciseSlot.index ? exerciseSlot : item,
      ),
    );
  };

  const openBottomSheet = (exerciseSlot: ExerciseSlot) => {
    setSelectedExerciseSlot(exerciseSlot);
    bottomSheetRef.current?.expand();
  };

  type OnTemplatePressProps = {
    templateType: TemplateType;
    templateDifficulty: TemplateDifficulty;
  };

  const onTemplatePress = ({
    templateType,
    templateDifficulty,
  }: OnTemplatePressProps) => {
    const newTemplate = selectTemplate({
      templateDifficulty,
      templateType,
      exercise: selectedExerciseSlot.exercise,
    });
    updateExerciseSlot({
      exercise: selectedExerciseSlot.exercise,
      index: selectedExerciseSlot.index,
      data: newTemplate,
      templateType: selectedExerciseSlot.templateType,
    });
    bottomSheetRef.current?.close();
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
                  selectedExerciseSlot: item,
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
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1]}
        enableDynamicSizing
        enablePanDownToClose
        index={-1}
        backgroundStyle={{ backgroundColor: colors.secondary }}
        handleIndicatorStyle={{ backgroundColor: colors.ternary }}
      >
        <BottomSheetScrollView
          scrollEnabled={false}
          style={{ backgroundColor: colors.primary }}
        >
          {templateTypes
            .filter((item) => item === selectedExerciseSlot.templateType)
            .map((item, index) => {
              return (
                <View
                  key={String(index)}
                  className="border-[0.5px] border-secondary bg-primary"
                >
                  <View className="flex-row justify-between items-center p-3">
                    <View className="flex-1 flex-row items-center ">
                      <IconByTemplateType templateType={item} />
                      <Text className="color-textPrimary text-base ml-2">
                        {item}
                      </Text>
                    </View>
                    <View>
                      <View className="flex-row mb-2">
                        {/* <Button
                          onPress={() =>
                            onTemplatePress({
                              templateDifficulty: TemplateDifficulty.Easy,
                              templateType: item,
                            })
                          }
                          text={"Easy"}
                          buttonStyle="rounded-full bg-primary mr-1 px-4"
                        />
                        <Button
                          onPress={() =>
                            onTemplatePress({
                              templateDifficulty: TemplateDifficulty.Normal,
                              templateType: item,
                            })
                          }
                          text={"Normal"}
                          buttonStyle="rounded-full bg-primary mr-1 px-4"
                        />
                        <Button
                          onPress={() =>
                            onTemplatePress({
                              templateDifficulty: TemplateDifficulty.Hard,
                              templateType: item,
                            })
                          }
                          text={"Hard"}
                          buttonStyle="rounded-full bg-primary px-4"
                        /> */}
                      </View>
                      <View className="flex-row">
                        <Button
                          onPress={() =>
                            onTemplatePress({
                              templateDifficulty: TemplateDifficulty.Easy,
                              templateType: item,
                            })
                          }
                          text={"Easy"}
                          buttonStyle="rounded-full bg-primary mr-1 px-4"
                        />
                        <Button
                          onPress={() =>
                            onTemplatePress({
                              templateDifficulty: TemplateDifficulty.Normal,
                              templateType: item,
                            })
                          }
                          text={"Normal"}
                          buttonStyle="rounded-full bg-primary mr-1 px-4"
                        />
                        <Button
                          onPress={() =>
                            onTemplatePress({
                              templateDifficulty: TemplateDifficulty.Hard,
                              templateType: item,
                            })
                          }
                          text={"Hard"}
                          buttonStyle="rounded-full bg-primary px-4"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

export default Workout;
