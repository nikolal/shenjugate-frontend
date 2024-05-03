import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";
import { Exercise, Force, Mechanic, PrimaryMuscles } from "types/exercise";

type WorkoutItemProps = {
  onPress: () => void;
  exercise: Exercise;
};

function WorkoutItem({ onPress, exercise }: WorkoutItemProps) {
  const [weight, setWeight] = useState<string>("");
  return (
    <View className="flex-row bg-primary border-y-[0.5px] border-ternary mx-2">
      <TouchableOpacity
        className="w-9/12 h-16 flex-row items-center pl-4"
        onPress={onPress}
      >
        <Ionicons
          name="barbell"
          size={20}
          color={
            exercise.mechanic === Mechanic.Compound.toLowerCase()
              ? colors.accent
              : colors.accentSecondary
          }
        />
        <Text className="text-md text-white ml-2">{exercise.name}</Text>
      </TouchableOpacity>
      <View className="w-3/12 h-16 px-2 py-3">
        <View className="h-full bg-secondary flex-row border-[0.5px] border-ternary rounded-lg items-center">
          <TextInput
            className="w-8/12 h-full text-white text-center text-md "
            keyboardType="numeric"
            onChangeText={(text) => setWeight(text)}
            value={weight}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text className="text-md font-bold color-ternary">KG</Text>
          {/* <Ionicons name="bag-outline" size={20} color={colors.ternary} /> */}
        </View>
      </View>
    </View>
  );
}

export default WorkoutItem;
