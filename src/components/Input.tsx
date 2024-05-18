import React, { useEffect, useState } from "react";
import { Text, View, TextInput, KeyboardTypeOptions } from "react-native";

type InputProps = {
  onChange?: (value: string) => void;
  text: string;
  textStyle?: string;
  placeholder?: string;
  placeholderColor?: string;
  textInputStyle?: string;
  //   iconName?: keyof typeof Ionicons.glyphMap;
  //   iconColor?: string;
  keyboardType: KeyboardTypeOptions | undefined;
};

function Input({
  onChange,
  text,
  textStyle,
  placeholder,
  placeholderColor,
  textInputStyle,
  //   iconName,
  //   iconColor,
  keyboardType,
}: InputProps) {
  const [value, setValue] = useState<string>(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  const onChangeText = (text: string) => {
    setValue(text);
    onChange && onChange(text);
  };

  return (
    <View
      className={`w-min bg-input flex-row border-[0.5px] border-ternary py-1 rounded-lg items-center ${textInputStyle}`}
    >
      <TextInput
        className={`w-8/12 text-white text-center text-base leading-5 ${textStyle}`}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
      />
      <Text className="text-base color-ternary">kg</Text>
    </View>
  );
}

export default Input;
