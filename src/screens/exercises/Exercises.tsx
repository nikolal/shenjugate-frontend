import { useQuery } from "@tanstack/react-query";
import httpRequest from "@api/httpRequest";
import { images } from "@images/images";
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Exercise, Force, PrimaryMuscles, Workout } from "types/exercise";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  workoutAFilters,
  workoutBFilters,
  workoutCFilters,
  workoutDFilters,
} from "./filters";
import { workoutExercises } from "@screens/workout/workoutExercises";
import Button from "@components/Button";
import colors from "theme/colors";
import { ExerciseSlot } from "types/workout";

type FetchExercisesProps = {
  prevWorkout: Workout;
  slotIndex: number;
};

async function fetchExercises({
  prevWorkout,
  slotIndex,
}: FetchExercisesProps): Promise<any> {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

  const first = prevWorkout.exercises[0];
  const second = prevWorkout.exercises[1];

  const isFirstPush = first.force === Force.Push;
  const isFirstPull = first.force === Force.Pull;
  const isFirstQuadriceps = first.primary_muscles.some(
    (item) => item === PrimaryMuscles.Quadriceps,
  );
  const isFirstHamstring = first.primary_muscles.some(
    (item) => item === PrimaryMuscles.Hamstrings,
  );

  const isSecondPush = second.force === Force.Push;
  const isSecondPull = second.force === Force.Pull;

  const isSecondQuadriceps = second.primary_muscles.some(
    (item) => item === PrimaryMuscles.Quadriceps,
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
  const updateExerciseSlot = route.params.updateExerciseSlot as (
    exerciseSlot: ExerciseSlot,
  ) => void;
  const selectedExerciseSlot = route.params
    .selectedExerciseSlot as ExerciseSlot;

  const { status, data, error } = useQuery<any>({
    queryKey: [`exercises${selectedExerciseSlot.index}`],
    queryFn: () =>
      fetchExercises({
        prevWorkout: { exercises: workoutExercises },
        slotIndex: selectedExerciseSlot.index,
      }),
  });

  if (status === "pending") {
    return <Text>Loading...</Text>;
  }

  if (status === "error") {
    return <Text>Error: {error.message}</Text>;
  }

  const onExercisePress = (excercise: Exercise, index: number) => {
    updateExerciseSlot({
      exercise: excercise,
      index: index,
      data: selectedExerciseSlot.data,
      templateType: selectedExerciseSlot.templateType,
    });
    navigation.goBack();
  };

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
      <View
        key={index}
        className="flex-1 justify-between bg-primary p-2.5 m-1 mt-4 rounded-2xl border-[0.5px] border-ternary"
      >
        <Image
          resizeMode="cover"
          className="w-full h-28 rounded-lg"
          source={images[exercise.id as keyof typeof images]}
        />
        <Text className="text-white text-sm font-light my-2">
          {exercise.name}
        </Text>
        <View className="flex-row">
          <Button
            onPress={onPress}
            text={"Info"}
            iconName="information"
            iconColor={colors.accentBlue}
            buttonStyle="mr-1"
          />
          <Button
            onPress={onPress}
            text={"Add"}
            iconName="add"
            iconColor={colors.accentGreen}
            buttonStyle="ml-1"
          />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      className="bg-primary"
      data={data}
      numColumns={2}
      renderItem={({ item, index }: { item: Exercise; index: number }) => (
        <Item
          exercise={item}
          index={index}
          onPress={() => onExercisePress(item, selectedExerciseSlot.index)}
        />
      )}
      keyExtractor={(item, index) => String(index)}
    />
  );
}

export default Exercises;
