import { useQuery } from "@tanstack/react-query";
import httpRequest, { QueryParams } from "@api/httpRequest";
import { images } from "@images/images";
import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  Equipment,
  Exercise,
  Force,
  Mechanic,
  PrimaryMuscles,
  Workout,
} from "types/exercise";
import { useNavigation } from "@react-navigation/native";

function chooseType(prevWorkout: Workout) {
  const first = prevWorkout.exercises[0];
  const second = prevWorkout.exercises[1];
  const isFirstPush = first.force === Force.Push;
  const isSecondPush = second.force === Force.Push;
  const isFirstPull = first.force === Force.Pull;
  const isSecondPull = second.force === Force.Pull;
  const isFirstQuadriceps = first.primary_muscles.some(
    (item) => item === PrimaryMuscles.Quadriceps,
  );
  const isSecondQuadriceps = second.primary_muscles.some(
    (item) => item === PrimaryMuscles.Quadriceps,
  );
  const isFirstHamstring = first.primary_muscles.some(
    (item) => item === PrimaryMuscles.Hamstrings,
  );
  const isSecondHamstring = second.primary_muscles.some(
    (item) => item === PrimaryMuscles.Hamstrings,
  );
  const isFirstChestOrShoulders =
    first.primary_muscles.some((item) => item === PrimaryMuscles.Chest) ||
    first.primary_muscles.some((item) => item === PrimaryMuscles.Shoulders);
  const isSecondChestOrShoulders =
    second.primary_muscles.some((item) => item === PrimaryMuscles.Chest) ||
    second.primary_muscles.some((item) => item === PrimaryMuscles.Shoulders);
  // const

  if (
    isFirstPush &&
    isFirstQuadriceps &&
    isSecondPush &&
    isSecondChestOrShoulders
  ) {
    console.log("A");
  } else if (
    isFirstPush &&
    isFirstChestOrShoulders &&
    isSecondPull &&
    isSecondHamstring
  ) {
    console.log("B");
  } else if (
    isFirstPull &&
    isFirstHamstring &&
    isSecondPush &&
    isSecondChestOrShoulders
  ) {
    console.log("C");
  } else if (
    isFirstPush &&
    isFirstChestOrShoulders &&
    isSecondPush &&
    isSecondQuadriceps
  ) {
    console.log("D");
  }
}

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
  const navigation = useNavigation<any>();
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

  const Item = ({
    exercise,
    onPress,
  }: {
    exercise: Exercise;
    onPress: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        key={exercise.name}
        className="flex-row justify-between bg-secondary p-3 mt-4 rounded-2xl"
      >
        <Text className="w-3/5 text-base text-white font-normal">
          {exercise.name}
        </Text>
        <View className="w-2/5 h-20">
          <ImageBackground
            resizeMode="cover"
            className="w-full h-20"
            source={images[exercise.id as keyof typeof images]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      className="bg-primary"
      data={data}
      renderItem={({ item }) => (
        <Item exercise={item} onPress={() => navigation.goBack()} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default Exercises;
