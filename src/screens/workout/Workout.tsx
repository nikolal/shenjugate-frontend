import React from "react";
import { View, Text } from "react-native";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";

function Workout() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1  bg-primary">
      <Text className="text-white">Workout</Text>
      <Button
        text="Press me"
        onPress={(): void => navigation.navigate("Exercises")}
      />
    </View>
  );
}

export default Workout;
