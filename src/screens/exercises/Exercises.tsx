import { useQuery } from "@tanstack/react-query";
import httpRequest, { QueryParams } from "@api/httpRequest";
import { images } from "@images/images";
import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import {
  Equipment,
  Exercise,
  Force,
  Mechanic,
  PrimaryMuscles,
} from "types/exercise";

async function fetchExercises() {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

  const queryParams: QueryParams = {
    mechanic: [Mechanic.Compound],
    force: [Force.Push],
    equipment: [Equipment.Barbell],
    primary_muscles: [PrimaryMuscles.Quadriceps],
  };

  return await httpRequest({
    url: `${baseUrl}/api/v1/exercises`,
    queryParams: queryParams,
  });
}

function Exercises() {
  const { status, data, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: fetchExercises,
  });

  if (status === "pending") {
    return <Text>Loading...</Text>;
  }

  if (status === "error") {
    return <Text>Error: {error.message}</Text>;
  }

  const Item = ({ exercise }: { exercise: Exercise }) => {
    return (
      <View key={exercise.name} className="flex-row justify-between p-1">
        <Text className="w-3/5 text-lg font-semibold">{exercise.name}</Text>
        <Image
          className="w-2/5 h-20"
          source={images[exercise.id as keyof typeof images]}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item exercise={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default Exercises;
