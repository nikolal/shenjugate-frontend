import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";
import { ExerciseSlot } from "types/workout";
import { TemplateType } from "@screens/workout/templates";
import IconByTemplateType from "@components/IconByTemplateType";

type ExerciseTypeProps = {
  templateType: TemplateType;
};

function ExerciseType({ templateType }: ExerciseTypeProps) {
  return (
    <View className="flex-row">
      <IconByTemplateType templateType={templateType} text />
    </View>
  );
}

type ExerciseTableProps = {
  exerciseSlot: ExerciseSlot;
  onPress: () => void;
};

function ExerciseTable({ exerciseSlot, onPress }: ExerciseTableProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-min bg-secondary flex-column border-[0.5px] p-1 border-ternary rounded-lg"
    >
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
    </TouchableOpacity>
  );
}

type WorkoutItemProps = {
  onPress: () => void;
  exerciseSlot: ExerciseSlot;
  openBottomSheet: (exerciseSlot: ExerciseSlot) => void;
};

function WorkoutItem({
  onPress,
  exerciseSlot,
  openBottomSheet,
}: WorkoutItemProps) {
  const [weight, setWeight] = useState<string>("");
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row bg-primary border-y-[0.5px] border-ternary mx-1 py-4"
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
          <ExerciseTable
            exerciseSlot={exerciseSlot}
            onPress={() => openBottomSheet(exerciseSlot)}
          />
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
