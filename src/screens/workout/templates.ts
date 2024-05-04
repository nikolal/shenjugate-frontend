import { WorkoutTemplate } from "types/workout";

export const strengthEasyTemplate = (
  strengthExerciseName: string,
  speedExerciseName: string,
  pullExerciseName: string,
  maxWeight: number,
): WorkoutTemplate => {
  return {
    name: "Strength easy",
    exercises: [
      {
        name: strengthExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 5,
            sets: 1,
            weight: (50 / maxWeight) * 100,
          },
          {
            percent: 60,
            repetitions: 4,
            sets: 1,
            weight: (60 / maxWeight) * 100,
          },
          {
            percent: 70,
            repetitions: 3,
            sets: 1,
            weight: (70 / maxWeight) * 100,
          },
          {
            percent: 75,
            repetitions: 3,
            sets: 4,
            weight: (75 / maxWeight) * 100,
          },
        ],
      },
      {
        name: speedExerciseName,
        data: [
          {
            percent: 45,
            repetitions: 2,
            sets: 8,
            weight: (45 / maxWeight) * 100,
          },
        ],
      },
      {
        name: pullExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 8,
            sets: 4,
            weight: (50 / maxWeight) * 100,
          },
        ],
      },
    ],
  };
};

export const strengthNormalTemplate = (
  strengthExerciseName: string,
  speedExerciseName: string,
  pullExerciseName: string,
  maxWeight: number,
): WorkoutTemplate => {
  return {
    name: "Strength normal",
    exercises: [
      {
        name: strengthExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 5,
            sets: 1,
            weight: (50 / maxWeight) * 100,
          },
          {
            percent: 60,
            repetitions: 4,
            sets: 1,
            weight: (60 / maxWeight) * 100,
          },
          {
            percent: 70,
            repetitions: 3,
            sets: 1,
            weight: (70 / maxWeight) * 100,
          },
          {
            percent: 80,
            repetitions: 3,
            sets: 4,
            weight: (80 / maxWeight) * 100,
          },
        ],
      },
      {
        name: speedExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 2,
            sets: 8,
            weight: (50 / maxWeight) * 100,
          },
        ],
      },
      {
        name: pullExerciseName,
        data: [
          {
            percent: 55,
            repetitions: 8,
            sets: 4,
            weight: (55 / maxWeight) * 100,
          },
        ],
      },
    ],
  };
};

export const strengthHardTemplate = (
  strengthExerciseName: string,
  speedExerciseName: string,
  pullExerciseName: string,
  maxWeight: number,
): WorkoutTemplate => {
  return {
    name: "Strength hard",
    exercises: [
      {
        name: strengthExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 5,
            sets: 1,
            weight: (50 / maxWeight) * 100,
          },
          {
            percent: 60,
            repetitions: 4,
            sets: 1,
            weight: (60 / maxWeight) * 100,
          },
          {
            percent: 70,
            repetitions: 3,
            sets: 1,
            weight: (70 / maxWeight) * 100,
          },
          {
            percent: 80,
            repetitions: 3,
            sets: 1,
            weight: (80 / maxWeight) * 100,
          },
          {
            percent: 85,
            repetitions: 3,
            sets: 3,
            weight: (85 / maxWeight) * 100,
          },
        ],
      },
      {
        name: speedExerciseName,
        data: [
          {
            percent: 55,
            repetitions: 2,
            sets: 8,
            weight: (55 / maxWeight) * 100,
          },
        ],
      },
      {
        name: pullExerciseName,
        data: [
          {
            percent: 60,
            repetitions: 8,
            sets: 4,
            weight: (50 / maxWeight) * 100,
          },
        ],
      },
    ],
  };
};

export const volumeEasyTemplate = (
  strengthExerciseName: string,
  speedExerciseName: string,
  pullExerciseName: string,
  maxWeight: number,
): WorkoutTemplate => {
  return {
    name: "Volume easy",
    exercises: [
      {
        name: strengthExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 4,
            sets: 1,
            weight: (50 / maxWeight) * 100,
          },
          {
            percent: 60,
            repetitions: 4,
            sets: 1,
            weight: (60 / maxWeight) * 100,
          },
          {
            percent: 70,
            repetitions: 4,
            sets: 4,
            weight: (70 / maxWeight) * 100,
          },
        ],
      },
      {
        name: speedExerciseName,
        data: [
          {
            percent: 40,
            repetitions: 3,
            sets: 6,
            weight: (40 / maxWeight) * 100,
          },
        ],
      },
      {
        name: pullExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 8,
            sets: 4,
            weight: (50 / maxWeight) * 100,
          },
        ],
      },
    ],
  };
};

export const volumeNormalTemplate = (
  strengthExerciseName: string,
  speedExerciseName: string,
  pullExerciseName: string,
  maxWeight: number,
): WorkoutTemplate => {
  return {
    name: "Volume normal",
    exercises: [
      {
        name: strengthExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 6,
            sets: 1,
            weight: (50 / maxWeight) * 100,
          },
          {
            percent: 60,
            repetitions: 6,
            sets: 1,
            weight: (60 / maxWeight) * 100,
          },
          {
            percent: 65,
            repetitions: 6,
            sets: 4,
            weight: (65 / maxWeight) * 100,
          },
        ],
      },
      {
        name: speedExerciseName,
        data: [
          {
            percent: 40,
            repetitions: 3,
            sets: 8,
            weight: (40 / maxWeight) * 100,
          },
        ],
      },
      {
        name: pullExerciseName,
        data: [
          {
            percent: 55,
            repetitions: 8,
            sets: 4,
            weight: (55 / maxWeight) * 100,
          },
        ],
      },
    ],
  };
};

export const volumeHardTemplate = (
  strengthExerciseName: string,
  speedExerciseName: string,
  pullExerciseName: string,
  maxWeight: number,
): WorkoutTemplate => {
  return {
    name: "Volume hard",
    exercises: [
      {
        name: strengthExerciseName,
        data: [
          {
            percent: 50,
            repetitions: 5,
            sets: 1,
            weight: (50 / maxWeight) * 100,
          },
          {
            percent: 60,
            repetitions: 5,
            sets: 1,
            weight: (60 / maxWeight) * 100,
          },
          {
            percent: 70,
            repetitions: 5,
            sets: 5,
            weight: (70 / maxWeight) * 100,
          },
        ],
      },
      {
        name: speedExerciseName,
        data: [
          {
            percent: 40,
            repetitions: 3,
            sets: 10,
            weight: (40 / maxWeight) * 100,
          },
        ],
      },
      {
        name: pullExerciseName,
        data: [
          {
            percent: 60,
            repetitions: 8,
            sets: 4,
            weight: (60 / maxWeight) * 100,
          },
        ],
      },
    ],
  };
};
