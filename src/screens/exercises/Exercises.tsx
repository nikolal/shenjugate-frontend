import { useQuery } from "@tanstack/react-query";
import httpRequest from "@api/httpRequest";
import { images } from "@images/images";
import React from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
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
import { getPreviousWorkout } from "storage/previousWorkout";

type FetchExercisesProps = {
  prevWorkout: ExerciseSlot[];
  slotIndex: number;
};

async function fetchExercises({
  prevWorkout,
  slotIndex,
}: FetchExercisesProps): Promise<any> {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

  const first = prevWorkout[0].exercise;
  const second = prevWorkout[1].exercise;

  // console.log("first", first);
  // console.log("second", second);

  const isFirstPush = first.force === Force.Push.toLowerCase();
  const isFirstPull = first.force === Force.Pull.toLowerCase();
  const isFirstQuadriceps = first.primary_muscles.some(
    (item) => item === PrimaryMuscles.Quadriceps,
  );
  const isFirstHamstring = first.primary_muscles.some(
    (item) => item === PrimaryMuscles.Hamstrings,
  );

  const isSecondPush = second.force === Force.Push.toLowerCase();
  const isSecondPull = second.force === Force.Pull.toLowerCase();

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
    isFirstPull &&
    isFirstHamstring &&
    isSecondPush &&
    isSecondChestOrShoulders
  ) {
    // console.log("A");
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutAFilters[slotIndex],
    });
  } else if (
    isFirstPush &&
    isFirstQuadriceps &&
    isSecondPush &&
    isSecondChestOrShoulders
  ) {
    // console.log("B");
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
    // console.log("C");
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutCFilters[slotIndex],
    });
  } else if (
    isFirstPush &&
    isFirstChestOrShoulders &&
    isSecondPush &&
    isSecondQuadriceps
  ) {
    // console.log("D");
    return await httpRequest({
      url: `${baseUrl}/api/v1/exercises`,
      queryParams: workoutDFilters[slotIndex],
    });
  } else {
    // console.log("E");
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
    queryFn: async () => {
      let previousWorkout: ExerciseSlot[] = await getPreviousWorkout();
      return fetchExercises({
        prevWorkout: previousWorkout,
        slotIndex: selectedExerciseSlot.index,
      });
    },
  });

  if (status === "pending") {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ActivityIndicator size="large" color={colors.ternary} />
      </View>
    );
  }

  if (status === "error") {
    return <Text>Error: {error.message}</Text>;
  }

  const onExercisePress = (excercise: Exercise) => {
    updateExerciseSlot({
      exercise: excercise,
      index: selectedExerciseSlot.index,
      data: selectedExerciseSlot.data,
      templateType: selectedExerciseSlot.templateType,
      templateDifficulty: selectedExerciseSlot.templateDifficulty,
    });
    navigation.goBack();
  };

  const Item = ({
    exercise,
    onPress,
  }: {
    exercise: Exercise;
    onPress: () => void;
  }) => {
    return (
      <View
        key={exercise.id}
        className="flex-1 justify-between bg-primary p-2.5 m-1 mt-4 rounded-2xl border-[0.5px] border-ternary"
      >
        <Image
          resizeMode="cover"
          className="w-full h-40 rounded-lg"
          source={images[exercise.id as keyof typeof images]}
        />
        <Text className="text-white text-sm font-light my-2">
          {exercise.name}
        </Text>
        <View className="flex-row justify-around">
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
      renderItem={({ item }: { item: Exercise }) => (
        <Item exercise={item} onPress={() => onExercisePress(item)} />
      )}
      keyExtractor={(_, index) => String(index)}
    />
  );
}

export default Exercises;
