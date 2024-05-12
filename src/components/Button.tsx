import React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "theme/colors";

type ButtonProps = {
  onPress: () => void;
  text: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  buttonStyle?: string;
  textStyle?: string;
};

function Button({
  onPress,
  text,
  iconName,
  iconColor,
  buttonStyle,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row bg-squareButtonBackground border-[0.5px] border-ternary py-2 px-2 rounded-lg items-center justify-center ${buttonStyle}`}
    >
      {iconName && (
        <View className="mr-2">
          <Ionicons name={iconName} size={20} color={iconColor} />
        </View>
      )}
      <Text className={`text-md text-textPrimary ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
