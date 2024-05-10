import { TemplateType } from "@screens/workout/templates";
import { Exercise } from "./exercise";

export type ExerciseSlot = {
  index: number;
  exercise: Exercise;
  data: ExerciseTemplate;
  templateType: TemplateType;
};

export type ExerciseTemplate = ExerciseTemplateRow[];

type ExerciseTemplateRow = {
  percent: number;
  repetitions: number;
  sets: number;
  weight: number;
};
