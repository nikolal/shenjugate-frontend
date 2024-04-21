import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  onPress: () => void;
  text: string;
};

function Button({ onPress, text }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className="h-10 w-90 bg-blue-300">
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
