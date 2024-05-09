import { Exercise } from "./exercise";

export enum WorkoutType {
  StrengthEasy = "Strength easy",
  StrengthNormal = "Strength normal",
  StrengthHard = "Strength hard",
  VolumeEasy = "Volume easy",
  VolumeNormal = "Volume normal",
  VolumeHard = "Volume hard",
}

export type ExerciseSlot = {
  exercise: Exercise;
  data: ExerciseData[];
};

export type ExerciseData = {
  percent: number;
  repetitions: number;
  sets: number;
  weight: number;
};

export type ExerciseTemplate = {
  name: string;
  data: ExerciseData[];
};

// export type ExerciseTemplate = {
//   name: string;
//   data: ExerciseData[];
// };

// export type WorkoutTemplate = {
//   name: string;
//   exercises: ExerciseTemplate[];
// };
