import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";
import { Exercise } from "types/exercise";

type WorkoutItemProps = {
  onPress: () => void;
  exercise: Exercise;
  index: number;
};

function ExerciseTable() {
  return <View></View>;
}

function ExerciseType({ index }: { index: number }) {
  if (index === 0) {
    return (
      <View className="flex-row">
        <Ionicons name="flash" size={20} color={colors.accentBlue} />
        <Text className="ml-2 mb-2 text-sm text-textSecondary">Speed</Text>
      </View>
    );
  } else if (index === 1) {
    return (
      <View className="flex-row">
        <Ionicons name="barbell" size={20} color={colors.accentRed} />
        <Text className="ml-2 mb-2 text-sm text-textSecondary">Strength</Text>
      </View>
    );
  } else if (index === 2) {
    return (
      <View className="flex-row">
        <Ionicons name="arrow-redo" size={20} color={colors.accentGreen} />
        <Text className="ml-2 mb-2 text-sm text-textSecondary">Repetition</Text>
      </View>
    );
  } else if (index === 3) {
    return (
      <View className="flex-row">
        <Ionicons name="hammer" size={20} color={colors.accentPurple} />
        <Text className="ml-2 mb-2 text-sm text-textSecondary">Assistance</Text>
      </View>
    );
  } else if (index === 4) {
    return (
      <View className="flex-row">
        <Ionicons name="medkit" size={20} color={colors.accentPink} />
        <Text className="ml-2 mb-2 text-sm text-textSecondary">Weakness</Text>
      </View>
    );
  } else if (index === 5) {
    return (
      <View className="flex-row">
        <Ionicons name="hourglass" size={20} color={colors.accentYellow} />
        <Text className="ml-2 mb-2 text-sm text-textSecondary">Endurance</Text>
      </View>
    );
  }
}

function ExerciseData() {
  return (
    <View className="h-min bg-secondary flex-column border-[0.5px] p-1 border-ternary rounded-lg">
      <View className="w-full flex-row">
        <Text className="flex-1 text-center text-sm text-textSecondary">%</Text>
        <Text className="flex-1 text-center text-sm text-textSecondary">
          Reps
        </Text>
        <Text className="flex-1 text-center text-sm text-textSecondary">
          Sets
        </Text>
        <Text className="flex-1 text-center text-sm text-textSecondary">
          Weight
        </Text>
      </View>

      <View className="h-min flex-row border-t-[0.5px] border-ternary ">
        <Text className="flex-1 text-center text-sm text-textPrimary">50%</Text>
        <Text className="flex-1 text-center text-sm text-textPrimary">5</Text>
        <Text className="flex-1 text-center text-sm text-textPrimary">1</Text>
        <Text className="flex-1 text-center text-sm text-textPrimary">40</Text>
      </View>
    </View>
  );
}

function WorkoutItem({ onPress, exercise, index }: WorkoutItemProps) {
  const [weight, setWeight] = useState<string>("");
  return (
    <View className="flex-row bg-primary border-y-[0.5px] border-ternary mx-1 py-4">
      <TouchableOpacity className="w-5/12" onPress={onPress}>
        <ExerciseType index={index} />
        <Text className="text-base text-white font-semibold">
          {exercise.name}
        </Text>
      </TouchableOpacity>

      <View className="w-7/12 h-min justify-center items-end">
        <ExerciseData />
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
    </View>
  );
}

export default WorkoutItem;
