import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "@components/WorkoutItem";
import { Equipment, Exercise, Force, Mechanic } from "types/exercise";
import { ExerciseSlot, ExerciseTemplate } from "types/workout";
import {
  TemplateDifficulty,
  TemplateType,
  enduranceNormalTemplate,
  hypertrophyNormalTemplate,
  powerNormalTemplate,
  selectTemplate,
  strengthNormalTemplate,
} from "./templates";

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

const defaultWorkoutA: ExerciseSlot[] = [
  // {
  //   exercise: defaultExercise,
  //   data: defaultTemplate,
  //   index: 0,
  //   templateType: TemplateType.Speed,
  // },
  {
    exercise: defaultExercise,
    data: powerNormalTemplate(defaultExercise),
    index: 0,
    templateType: TemplateType.Power,
    templateDifficulty: TemplateDifficulty.Normal,
  },
  {
    exercise: defaultExercise,
    data: strengthNormalTemplate(defaultExercise),
    index: 1,
    templateType: TemplateType.Strength,
    templateDifficulty: TemplateDifficulty.Normal,
  },
  {
    exercise: defaultExercise,
    data: hypertrophyNormalTemplate(defaultExercise),
    index: 2,
    templateType: TemplateType.Hypertrophy,
    templateDifficulty: TemplateDifficulty.Normal,
  },
  {
    exercise: defaultExercise,
    data: enduranceNormalTemplate(defaultExercise),
    index: 3,
    templateType: TemplateType.Endurance,
    templateDifficulty: TemplateDifficulty.Normal,
  },
  // {
  //   exercise: defaultExercise,
  //   data: enduranceNormalTemplate(defaultExercise),
  //   index: 4,
  //   templateType: TemplateType.Assistance,
  //   templateDifficulty: TemplateDifficulty.Normal,
  // },
  // {
  //   exercise: defaultExercise,
  //   data: enduranceNormalTemplate(defaultExercise),
  //   index: 5,
  //   templateType: TemplateType.Assistance,
  //   templateDifficulty: TemplateDifficulty.Normal,
  // },
  // {
  //   exercise: defaultExercise,
  //   data: enduranceNormalTemplate(defaultExercise),
  //   index: 6,
  //   templateType: TemplateType.Assistance,
  //   templateDifficulty: TemplateDifficulty.Normal,
  // },
  // {
  //   exercise: defaultExercise,
  //   data: enduranceNormalTemplate(defaultExercise),
  //   index: 7,
  //   templateType: TemplateType.Assistance,
  //   templateDifficulty: TemplateDifficulty.Normal,
  // },
  // {
  //   exercise: defaultExercise,
  //   data: enduranceNormalTemplate(defaultExercise),
  //   index: 8,
  //   templateType: TemplateType.Assistance,
  //   templateDifficulty: TemplateDifficulty.Normal,
  // },
];

function Workout() {
  const navigation = useNavigation<any>();
  const [exerciseSlots, setExerciseSlots] =
    useState<ExerciseSlot[]>(defaultWorkoutA);

  const updateExerciseSlot = (exerciseSlot: ExerciseSlot) => {
    setExerciseSlots(
      exerciseSlots.map((item) =>
        item.index === exerciseSlot.index ? exerciseSlot : item,
      ),
    );
  };

  type OnTemplatePressProps = {
    templateType: TemplateType;
    templateDifficulty: TemplateDifficulty;
    selectedExerciseSlot: ExerciseSlot;
  };

  const onTemplatePress = ({
    templateType,
    templateDifficulty,
    selectedExerciseSlot,
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
      templateDifficulty: selectedExerciseSlot.templateDifficulty,
    });
  };

  return (
    <View className="flex-1  bg-primary">
      <ScrollView className="flex-1">
        {exerciseSlots.map((item, index) => {
          return (
            <WorkoutItem
              key={String(index)}
              onPress={(): void =>
                navigation.navigate("Exercises", {
                  selectedExerciseSlot: item,
                  updateExerciseSlot: updateExerciseSlot,
                })
              }
              exerciseSlot={item}
              onTemplatePress={onTemplatePress}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Workout;
