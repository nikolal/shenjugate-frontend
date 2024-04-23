import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";

type ExerciseSlotProps = {
  name: string;
  onPress: () => void;
};

function ExerciseSlot({ name, onPress }: ExerciseSlotProps) {
  const [weight, setWeight] = useState<string>("");
  return (
    <TouchableOpacity
      className="flex-row bg-primary border-y-2 border-ternary"
      onPress={onPress}
    >
      <View className="w-9/12 h-14 flex-row items-center pl-4">
        <Ionicons name="barbell" size={20} color={colors.accent} />
        <Text className="text-md text-white ml-2">{name}</Text>
      </View>
      <View className="w-3/12 h-14 p-2">
        <View className="h-full bg-secondary flex-row border-2 border-ternary rounded-lg items-center">
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
