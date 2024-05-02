import { useQuery } from "@tanstack/react-query";
import httpRequest from "@api/httpRequest";
import { images } from "@images/images";
import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Exercise, Force, PrimaryMuscles, Workout } from "types/exercise";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  workoutAFilters,
  workoutBFilters,
  workoutCFilters,
  workoutDFilters,
} from "./filters";
import { workoutExercises } from "@screens/workout/workoutExercises";

async function fetchExercises(
  prevWorkout: Workout,
  slotIndex: number,
): Promise<any> {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

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

  if (
    isFirstPush &&
    isFirstQuadriceps &&
    isSecondPush &&
    isSecondChestOrShoulders
  ) {
    console.log("A");
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutBFilters[slotIndex],
    });
  } else if (
    isFirstPush &&
    isFirstChestOrShoulders &&
    isSecondPull &&
    isSecondHamstring
  ) {
    console.log("B");
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutCFilters[slotIndex],
    });
  } else if (
    isFirstPull &&
    isFirstHamstring &&
    isSecondPush &&
    isSecondChestOrShoulders
  ) {
    console.log("C");
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutDFilters[slotIndex],
    });
  } else if (
    isFirstPush &&
    isFirstChestOrShoulders &&
    isSecondPush &&
    isSecondQuadriceps
  ) {
    console.log("D");
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutAFilters[slotIndex],
    });
  } else {
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutAFilters[slotIndex],
    });
  }
}

function Exercises() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const exerciseIndex = route.params.exerciseIndex;

  const { status, data, error } = useQuery<any>({
    queryKey: [`exercises${exerciseIndex}`],
    queryFn: () =>
      fetchExercises({ exercises: workoutExercises }, exerciseIndex),
  });

  if (status === "pending") {
    return <Text>Loading...</Text>;
  }

  if (status === "error") {
    return <Text>Error: {error.message}</Text>;
  }

  const Item = ({
    exercise,
    index,
    onPress,
  }: {
    exercise: Exercise;
    index: number;
    onPress: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        key={index}
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
      renderItem={({ item, index }) => (
        <Item
          exercise={item}
          index={index}
          onPress={() => navigation.goBack()}
        />
      )}
      keyExtractor={(item, index) => String(index)}
    />
  );
}

export default Exercises;
