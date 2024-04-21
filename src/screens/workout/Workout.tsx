import React from "react";
import { View, Text } from "react-native";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";

function Workout() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1  bg-primary">
      <Text className="text-white">Workout</Text>
      <View className="w-28 h-8">
        <Button
          text="Press me"
          onPress={(): void => navigation.navigate("Exercises")}
        />
      </View>
    </View>
  );
}

export default Workout;
