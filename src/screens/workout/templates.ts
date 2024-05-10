import { Exercise } from "types/exercise";
import { ExerciseTemplate } from "types/workout";

export enum TemplateDifficulty {
  Easy = "Easy",
  Normal = "Normal",
  Hard = "Hard",
}

export enum TemplateType {
  Strength = "Strength",
  Power = "Power",
  Speed = "Speed",
  Hypertrophy = "Hypertrophy",
  Endurance = "Endurance",
  Assistance = "Assistance",
}

export type WorkoutTemplate = {
  templateType: TemplateType;
  templateDifficulty: TemplateDifficulty;
};

type SelectTemplateProps = {
  templateDifficulty: TemplateDifficulty;
  templateType: TemplateType;
  exercise: Exercise;
};

export function selectTemplate({
  templateDifficulty,
  templateType,
  exercise,
}: SelectTemplateProps): ExerciseTemplate {
  if (templateType === TemplateType.Strength) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return strengthEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return strengthNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return strengthHardTemplate(exercise);
    }
  } else if (templateType === TemplateType.Hypertrophy) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return volumeEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return volumeNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return volumeHardTemplate(exercise);
    }
  } else if (templateType === TemplateType.Power) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return powerEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return powerNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return powerHardTemplate(exercise);
    }
  } else if (templateType === TemplateType.Speed) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return speedEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return speedNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return speedHardTemplate(exercise);
    }
  } else if (templateType === TemplateType.Endurance) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return enduranceEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return enduranceNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return enduranceHardTemplate(exercise);
    }
  }
  return volumeNormalTemplate(exercise);
}

export const strengthEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 5,
      sets: 1,
      weight: 0.5 * exercise.weight,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6 * exercise.weight,
    },
    {
      percent: 70,
      repetitions: 3,
      sets: 1,
      weight: 0.7 * exercise.weight,
    },
    {
      percent: 75,
      repetitions: 3,
      sets: 4,
      weight: 0.75 * exercise.weight,
    },
  ];
};

export const strengthNormalTemplate = (
  exercise: Exercise,
): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 5,
      sets: 1,
      weight: 0.5 * exercise.weight,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6 * exercise.weight,
    },
    {
      percent: 70,
      repetitions: 3,
      sets: 1,
      weight: 0.7 * exercise.weight,
    },
    {
      percent: 80,
      repetitions: 3,
      sets: 4,
      weight: 0.8 * exercise.weight,
    },
  ];
};

export const strengthHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 5,
      sets: 1,
      weight: 0.5 * exercise.weight,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6 * exercise.weight,
    },
    {
      percent: 70,
      repetitions: 3,
      sets: 1,
      weight: 0.7 * exercise.weight,
    },
    {
      percent: 80,
      repetitions: 3,
      sets: 1,
      weight: 0.8 * exercise.weight,
    },
    {
      percent: 85,
      repetitions: 3,
      sets: 3,
      weight: 0.85 * exercise.weight,
    },
  ];
};

export const volumeEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 4,
      sets: 1,
      weight: 0.5 * exercise.weight,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6 * exercise.weight,
    },
    {
      percent: 70,
      repetitions: 4,
      sets: 4,
      weight: 0.7 * exercise.weight,
    },
  ];
};

export const volumeNormalTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 6,
      sets: 1,
      weight: 0.5 * exercise.weight,
    },
    {
      percent: 60,
      repetitions: 6,
      sets: 1,
      weight: 0.6 * exercise.weight,
    },
    {
      percent: 65,
      repetitions: 6,
      sets: 4,
      weight: 0.65 * exercise.weight,
    },
  ];
};

export const volumeHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 5,
      sets: 1,
      weight: 0.5 * exercise.weight,
    },
    {
      percent: 60,
      repetitions: 5,
      sets: 1,
      weight: 0.6 * exercise.weight,
    },
    {
      percent: 70,
      repetitions: 5,
      sets: 5,
      weight: 0.7 * exercise.weight,
    },
  ];
};

export const powerEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 3,
      sets: 8,
      weight: 0.5 * exercise.weight,
    },
  ];
};

export const powerNormalTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 55,
      repetitions: 3,
      sets: 8,
      weight: 0.55 * exercise.weight,
    },
  ];
};

export const powerHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 60,
      repetitions: 3,
      sets: 8,
      weight: 0.6 * exercise.weight,
    },
  ];
};

export const speedEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 30,
      repetitions: 3,
      sets: 8,
      weight: 0.3 * exercise.weight,
    },
  ];
};

export const speedNormalTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 40,
      repetitions: 3,
      sets: 8,
      weight: 0.4 * exercise.weight,
    },
  ];
};

export const speedHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 3,
      sets: 8,
      weight: 0.5 * exercise.weight,
    },
  ];
};

export const enduranceEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 10,
      sets: 4,
      weight: 0.5 * exercise.weight,
    },
  ];
};

export const enduranceNormalTemplate = (
  exercise: Exercise,
): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 10,
      sets: 4,
      weight: 0.5 * exercise.weight,
    },
  ];
};

export const enduranceHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 10,
      sets: 4,
      weight: 0.5 * exercise.weight,
    },
  ];
};
