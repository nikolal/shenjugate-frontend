import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "components/WorkoutItem";
import { Equipment, Exercise, Force, Mechanic } from "types/exercise";
import { ExerciseSlot, ExerciseTemplate } from "types/workout";
import {
  TemplateDifficulty,
  TemplateType,
  // enduranceNormalTemplate,
  hypertrophyNormalTemplate,
  powerNormalTemplate,
  selectTemplate,
  strengthNormalTemplate,
} from "./templates";
import Button from "@components/Button";
import { storePreviousWorkout } from "storage/previousWorkout";

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

const defaultExerciseSlots: ExerciseSlot[] = [
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
];

function Workout() {
  const navigation = useNavigation<any>();
  const [exerciseSlots, setExerciseSlots] =
    useState<ExerciseSlot[]>(defaultExerciseSlots);

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

  const onSubmitPress = () => {
    storePreviousWorkout(exerciseSlots);
    setExerciseSlots(defaultExerciseSlots);
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

        <View className="mt-20 mb-12 mx-4">
          {exerciseSlots.every((x) => x.exercise.id !== "default_id") && (
            <Button text="Save Workout" onPress={onSubmitPress} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default Workout;
