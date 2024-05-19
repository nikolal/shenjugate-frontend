import { Exercise, PrimaryMuscles } from "types/exercise";
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
  if (
    templateType === TemplateType.Strength &&
    (exercise.primary_muscles.includes(PrimaryMuscles.Quadriceps) ||
      exercise.primary_muscles.includes(PrimaryMuscles.Hamstrings) ||
      exercise.primary_muscles.includes(PrimaryMuscles.Glutes))
  ) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return strengthEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return strengthNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return strengthHardTemplate(exercise);
    }
  } else if (
    templateType === TemplateType.Strength &&
    (exercise.primary_muscles.includes(PrimaryMuscles.Chest) ||
      exercise.primary_muscles.includes(PrimaryMuscles.Shoulders))
  ) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return volumeEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return volumeNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return volumeHardTemplate(exercise);
    }
  } else if (templateType === TemplateType.Hypertrophy) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return hypertrophyEasyTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Normal) {
      return hypertrophyNormalTemplate(exercise);
    } else if (templateDifficulty === TemplateDifficulty.Hard) {
      return hypertrophyHardTemplate(exercise);
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
  } else if (
    templateType === TemplateType.Endurance ||
    templateType === TemplateType.Assistance
  ) {
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
      weight: 0.5,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6,
    },
    {
      percent: 70,
      repetitions: 3,
      sets: 1,
      weight: 0.7,
    },
    {
      percent: 75,
      repetitions: 3,
      sets: 4,
      weight: 0.75,
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
      weight: 0.5,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6,
    },
    {
      percent: 70,
      repetitions: 3,
      sets: 1,
      weight: 0.7,
    },
    {
      percent: 80,
      repetitions: 3,
      sets: 4,
      weight: 0.8,
    },
  ];
};

export const strengthHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 5,
      sets: 1,
      weight: 0.5,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6,
    },
    {
      percent: 70,
      repetitions: 3,
      sets: 1,
      weight: 0.7,
    },
    {
      percent: 80,
      repetitions: 3,
      sets: 1,
      weight: 0.8,
    },
    {
      percent: 85,
      repetitions: 3,
      sets: 3,
      weight: 0.85,
    },
  ];
};

export const volumeEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 4,
      sets: 1,
      weight: 0.5,
    },
    {
      percent: 60,
      repetitions: 4,
      sets: 1,
      weight: 0.6,
    },
    {
      percent: 70,
      repetitions: 4,
      sets: 4,
      weight: 0.7,
    },
  ];
};

export const volumeNormalTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 6,
      sets: 1,
      weight: 0.5,
    },
    {
      percent: 60,
      repetitions: 6,
      sets: 1,
      weight: 0.6,
    },
    {
      percent: 65,
      repetitions: 6,
      sets: 4,
      weight: 0.65,
    },
  ];
};

export const volumeHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 5,
      sets: 1,
      weight: 0.5,
    },
    {
      percent: 60,
      repetitions: 5,
      sets: 1,
      weight: 0.6,
    },
    {
      percent: 70,
      repetitions: 5,
      sets: 5,
      weight: 0.7,
    },
  ];
};

export const hypertrophyEasyTemplate = (
  exercise: Exercise,
): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 12,
      sets: 4,
      weight: 0.55,
    },
  ];
};

export const hypertrophyNormalTemplate = (
  exercise: Exercise,
): ExerciseTemplate => {
  return [
    {
      percent: 55,
      repetitions: 10,
      sets: 4,
      weight: 0.6,
    },
  ];
};

export const hypertrophyHardTemplate = (
  exercise: Exercise,
): ExerciseTemplate => {
  return [
    {
      percent: 60,
      repetitions: 8,
      sets: 4,
      weight: 0.65,
    },
  ];
};

export const powerEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 3,
      sets: 8,
      weight: 0.5,
    },
  ];
};

export const powerNormalTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 55,
      repetitions: 3,
      sets: 8,
      weight: 0.55,
    },
  ];
};

export const powerHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 60,
      repetitions: 3,
      sets: 8,
      weight: 0.6,
    },
  ];
};

export const speedEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 30,
      repetitions: 3,
      sets: 8,
      weight: 0.3,
    },
  ];
};

export const speedNormalTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 40,
      repetitions: 3,
      sets: 8,
      weight: 0.4,
    },
  ];
};

export const speedHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 3,
      sets: 8,
      weight: 0.5,
    },
  ];
};

export const enduranceEasyTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 12,
      sets: 4,
      weight: 0.5,
    },
  ];
};

export const enduranceNormalTemplate = (
  exercise: Exercise,
): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 12,
      sets: 4,
      weight: 0.5,
    },
  ];
};

export const enduranceHardTemplate = (exercise: Exercise): ExerciseTemplate => {
  return [
    {
      percent: 50,
      repetitions: 12,
      sets: 4,
      weight: 0.5,
    },
  ];
};
