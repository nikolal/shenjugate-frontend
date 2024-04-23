import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";
import { Exercise, Mechanic } from "types/exercise";

type ExerciseSlotProps = {
  name: string;
  onPress: () => void;
  exercise: Exercise;
};

function ExerciseSlot({ name, onPress, exercise }: ExerciseSlotProps) {
  const [weight, setWeight] = useState<string>("");
  return (
    <TouchableOpacity
      key={exercise.id}
      className="flex-row bg-primary border-y-[0.5px] border-ternary mx-2"
      onPress={onPress}
    >
      <View className="w-9/12 h-16 flex-row items-center pl-4">
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
      </View>
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
    </TouchableOpacity>
  );
}

export default ExerciseSlot;
