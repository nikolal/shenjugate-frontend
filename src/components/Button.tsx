import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";

type ButtonProps = {
  onPress: () => void;
  text: string;
};

function Button({ onPress, text }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-full w-min bg-buttonBackground border-2 border-accent rounded-full flex-row items-center justify-center"
    >
      <Ionicons name="add" size={24} color={colors.accent} />
      <Text className="text-md text-white">{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
