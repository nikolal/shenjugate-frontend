import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";

type ButtonProps = {
  onPress: () => void;
  text: string;
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor: string;
};

function Button({ onPress, text, iconName, iconColor }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row 
      flex-1 h-full w-min bg-buttonBackground border-2 border-accent py-1 px-2 rounded-lg items-center justify-center "
    >
      <Ionicons name={iconName} size={20} color={iconColor} />
      <Text className="text-md text-white">{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
