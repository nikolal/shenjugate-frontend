import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ExerciseSlot } from "types/workout";
import { TemplateDifficulty, TemplateType } from "@screens/workout/templates";
import IconByTemplateType from "@components/IconByTemplateType";
import Button from "./Button";

type ExerciseTableProps = {
  exerciseSlot: ExerciseSlot;
};

function ExerciseTable({ exerciseSlot }: ExerciseTableProps) {
  return (
    <View className="h-min bg-secondary flex-column border-[0.5px] p-1 border-ternary rounded-lg">
      <View className="w-full flex-row">
        <Text className="flex-1 text-center text-base text-textSecondary">
          %
        </Text>
        <Text className="flex-1 text-center text-base text-textSecondary">
          Reps
        </Text>
        <Text className="flex-1 text-center text-base text-textSecondary">
          Sets
        </Text>
        <Text className="flex-1 text-center text-base text-textSecondary">
          Weight
        </Text>
      </View>
      {exerciseSlot.data.map((template, index) => {
        return (
          <View
            key={String(index)}
            className="h-min flex-row border-t-[0.5px] border-ternary"
          >
            <Text className="flex-1 text-center text-base text-textPrimary">
              {template.percent}%
            </Text>
            <Text className="flex-1 text-center text-base text-textPrimary">
              {template.repetitions}
            </Text>
            <Text className="flex-1 text-center text-base text-textPrimary">
              {template.sets}
            </Text>
            <Text className="flex-1 text-center text-base text-textPrimary">
              {template.weight}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

function selectButtonColor(
  exerciseSlot: ExerciseSlot,
  templateDifficulty: TemplateDifficulty,
) {
  if (exerciseSlot.templateDifficulty === templateDifficulty) {
    return "bg-roundButtonBackground";
  } else {
    return "bg-primary";
  }
}

type OnTemplatePressProps = {
  templateType: TemplateType;
  templateDifficulty: TemplateDifficulty;
  selectedExerciseSlot: ExerciseSlot;
};

type WorkoutItemProps = {
  onPress: () => void;
  exerciseSlot: ExerciseSlot;
  onTemplatePress: ({
    templateType,
    templateDifficulty,
    selectedExerciseSlot,
  }: OnTemplatePressProps) => void;
};

function WorkoutItem({
  onPress,
  exerciseSlot,
  onTemplatePress,
}: WorkoutItemProps) {
  const [weight, setWeight] = useState<string>("");

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row bg-primary border-y-[0.5px] border-ternary mx-1 py-3"
    >
      <View className="w-5/12">
        <View className="flex-row">
          <IconByTemplateType templateType={exerciseSlot.templateType} text />
        </View>
        <Text className="text-base text-white font-semibold mr-2">
          {exerciseSlot.exercise.name}
        </Text>
      </View>

      <View className="w-7/12 h-min justify-center items-end">
        {exerciseSlot.exercise.name !== "Select exercise" && (
          <>
            <View className="flex-row mb-2">
              <Button
                onPress={() =>
                  onTemplatePress({
                    templateDifficulty: TemplateDifficulty.Easy,
                    templateType: exerciseSlot.templateType,
                    selectedExerciseSlot: {
                      ...exerciseSlot,
                      templateDifficulty: TemplateDifficulty.Easy,
                    },
                  })
                }
                text={"Easy"}
                buttonStyle={`rounded-full ${selectButtonColor(exerciseSlot, TemplateDifficulty.Easy)} mr-1 px-4`}
              />
              <Button
                onPress={() =>
                  onTemplatePress({
                    templateDifficulty: TemplateDifficulty.Normal,
                    templateType: exerciseSlot.templateType,
                    selectedExerciseSlot: {
                      ...exerciseSlot,
                      templateDifficulty: TemplateDifficulty.Normal,
                    },
                  })
                }
                text={"Normal"}
                buttonStyle={`rounded-full ${selectButtonColor(exerciseSlot, TemplateDifficulty.Normal)} mr-1 px-4`}
              />
              <Button
                onPress={() =>
                  onTemplatePress({
                    templateDifficulty: TemplateDifficulty.Hard,
                    templateType: exerciseSlot.templateType,
                    selectedExerciseSlot: {
                      ...exerciseSlot,
                      templateDifficulty: TemplateDifficulty.Hard,
                    },
                  })
                }
                text={"Hard"}
                buttonStyle={`rounded-full ${selectButtonColor(exerciseSlot, TemplateDifficulty.Hard)} mr-1 px-4`}
              />
            </View>
            <ExerciseTable exerciseSlot={exerciseSlot} />
          </>
        )}

        {/* <View className="h-full bg-input flex-row border-[0.5px] border-ternary rounded-lg items-center">
          <TextInput
            className="w-8/12 h-full text-white text-center text-md "
            keyboardType="numeric"
            onChangeText={(text) => setWeight(text)}
            value={weight}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text className="text-md font-bold color-ternary">KG</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
}

export default WorkoutItem;
