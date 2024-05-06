import { Exercise } from "types/exercise";
import { ExerciseTemplate } from "types/workout";

export enum TemplateDifficulty {
  Easy = "Easy",
  Normal = "Normal",
  Hard = "Hard",
}

export enum TemplateType {
  Strength = "Strength",
  Volume = "Volume",
}

type SelectTemplateProps = {
  templateDifficulty: TemplateDifficulty;
  templateType: TemplateType;
  exercises: Exercise[];
};

export function selectTemplate({
  templateDifficulty,
  templateType,
  exercises,
}: SelectTemplateProps): ExerciseTemplate {
  if (templateType === TemplateType.Strength) {
    if (templateDifficulty === TemplateDifficulty.Easy) {
      return strengthEasyTemplate(exercises);
    }
    // else if (templateDifficulty === TemplateDifficulty.Normal) {
    //   return strengthNormalTemplate(exercises);
    // } else if (templateDifficulty === TemplateDifficulty.Hard) {
    //   return strengthHardTemplate(exercises);
    // }
  }
  // else if (templateType === TemplateType.Volume) {
  //   if (templateDifficulty === TemplateDifficulty.Easy) {
  //     return volumeEasyTemplate(exercises);
  //   } else if (templateDifficulty === TemplateDifficulty.Normal) {
  //     return volumeNormalTemplate(exercises);
  //   } else if (templateDifficulty === TemplateDifficulty.Hard) {
  //     return volumeHardTemplate(exercises);
  //   }
  // }
  // return volumeNormalTemplate(exercises);
  return strengthEasyTemplate(exercises);
}

export const strengthEasyTemplate = (
  exercises: Exercise[],
): ExerciseTemplate => {
  return {
    // exercises: [
    // {
    //   name: exercises[0].name,
    //   data: [
    //     {
    //       percent: 45,
    //       repetitions: 2,
    //       sets: 8,
    //       weight: 0.45 * exercises[0].weight,
    //     },
    //   ],
    // },
    // {
    name: exercises[1].name,
    data: [
      {
        percent: 50,
        repetitions: 5,
        sets: 1,
        weight: 0.5 * exercises[1].weight,
      },
      {
        percent: 60,
        repetitions: 4,
        sets: 1,
        weight: 0.6 * exercises[1].weight,
      },
      {
        percent: 70,
        repetitions: 3,
        sets: 1,
        weight: 0.7 * exercises[1].weight,
      },
      {
        percent: 75,
        repetitions: 3,
        sets: 4,
        weight: 0.75 * exercises[1].weight,
      },
    ],
    // },
    // {
    //   name: exercises[2].name,
    //   data: [
    //     {
    //       percent: 50,
    //       repetitions: 8,
    //       sets: 4,
    //       weight: 0.6 * exercises[2].weight,
    //     },
    //   ],
    // },
    // ],
  };
};

// export const strengthNormalTemplate = (
//   exercises: Exercise[],
// ): ExerciseTemplate => {
//   return {
//     name: "Strength Normal",
//     exercises: [
//       // {
//       //   name: exercises[0].name,
//       //   data: [
//       //     {
//       //       percent: 55,
//       //       repetitions: 8,
//       //       sets: 4,
//       //       weight: 0.55 * exercises[0].weight,
//       //     },
//       //   ],
//       // },
//       {
//         name: exercises[1].name,
//         data: [
//           {
//             percent: 50,
//             repetitions: 5,
//             sets: 1,
//             weight: 0.5 * exercises[1].weight,
//           },
//           {
//             percent: 60,
//             repetitions: 4,
//             sets: 1,
//             weight: 0.6 * exercises[1].weight,
//           },
//           {
//             percent: 70,
//             repetitions: 3,
//             sets: 1,
//             weight: 0.7 * exercises[1].weight,
//           },
//           {
//             percent: 80,
//             repetitions: 3,
//             sets: 4,
//             weight: 0.8 * exercises[1].weight,
//           },
//         ],
//       },
//       // {
//       //   name: exercises[2].name,
//       //   data: [
//       //     {
//       //       percent: 50,
//       //       repetitions: 2,
//       //       sets: 8,
//       //       weight: 0.5 * exercises[2].weight,
//       //     },
//       //   ],
//       // },
//     ],
//   };
// };

// export const strengthHardTemplate = (
//   exercises: Exercise[],
// ): ExerciseTemplate => {
//   return {
//     name: "Strength Hard",
//     exercises: [
//       // {
//       //   name: exercises[0].name,
//       //   data: [
//       //     {
//       //       percent: 55,
//       //       repetitions: 2,
//       //       sets: 8,
//       //       weight: (55 / exercises[0].weight) * 100,
//       //     },
//       //   ],
//       // },
//       {
//         name: exercises[1].name,
//         data: [
//           {
//             percent: 50,
//             repetitions: 5,
//             sets: 1,
//             weight: 0.5 * exercises[1].weight,
//           },
//           {
//             percent: 60,
//             repetitions: 4,
//             sets: 1,
//             weight: 0.6 * exercises[1].weight,
//           },
//           {
//             percent: 70,
//             repetitions: 3,
//             sets: 1,
//             weight: 0.7 * exercises[1].weight,
//           },
//           {
//             percent: 80,
//             repetitions: 3,
//             sets: 1,
//             weight: 0.8 * exercises[1].weight,
//           },
//           {
//             percent: 85,
//             repetitions: 3,
//             sets: 3,
//             weight: 0.85 * exercises[1].weight,
//           },
//         ],
//       },
//       // {
//       //   name: exercises[2].name,
//       //   data: [
//       //     {
//       //       percent: 60,
//       //       repetitions: 8,
//       //       sets: 4,
//       //       weight: 0.6 * exercises[2].weight,
//       //     },
//       //   ],
//       // },
//     ],
//   };
// };

// export const volumeEasyTemplate = (exercises: Exercise[]): ExerciseTemplate => {
//   return {
//     name: "Volume Easy",
//     exercises: [
//       // {
//       //   name: exercises[0].name,
//       //   data: [
//       //     {
//       //       percent: 40,
//       //       repetitions: 3,
//       //       sets: 6,
//       //       weight: 0.4 * exercises[0].weight,
//       //     },
//       //   ],
//       // },
//       {
//         name: exercises[1].name,
//         data: [
//           {
//             percent: 50,
//             repetitions: 4,
//             sets: 1,
//             weight: 0.5 * exercises[1].weight,
//           },
//           {
//             percent: 60,
//             repetitions: 4,
//             sets: 1,
//             weight: 0.6 * exercises[1].weight,
//           },
//           {
//             percent: 70,
//             repetitions: 4,
//             sets: 4,
//             weight: 0.7 * exercises[1].weight,
//           },
//         ],
//       },
//       // {
//       //   name: exercises[2].name,
//       //   data: [
//       //     {
//       //       percent: 50,
//       //       repetitions: 8,
//       //       sets: 4,
//       //       weight: 0.5 * exercises[2].weight,
//       //     },
//       //   ],
//       // },
//     ],
//   };
// };

// export const volumeNormalTemplate = (
//   exercises: Exercise[],
// ): ExerciseTemplate => {
//   return {
//     name: "Volume Normal",
//     exercises: [
//       // {
//       //   name: exercises[0].name,
//       //   data: [
//       //     {
//       //       percent: 40,
//       //       repetitions: 3,
//       //       sets: 8,
//       //       weight: 0.4 * exercises[0].weight,
//       //     },
//       //   ],
//       // },
//       {
//         name: exercises[1].name,
//         data: [
//           {
//             percent: 50,
//             repetitions: 6,
//             sets: 1,
//             weight: 0.5 * exercises[1].weight,
//           },
//           {
//             percent: 60,
//             repetitions: 6,
//             sets: 1,
//             weight: 0.6 * exercises[1].weight,
//           },
//           {
//             percent: 65,
//             repetitions: 6,
//             sets: 4,
//             weight: 0.65 * exercises[1].weight,
//           },
//         ],
//       },
//       // {
//       //   name: exercises[2].name,
//       //   data: [
//       //     {
//       //       percent: 55,
//       //       repetitions: 8,
//       //       sets: 4,
//       //       weight: 0.55 * exercises[2].weight,
//       //     },
//       //   ],
//       // },
//     ],
//   };
// };

// export const volumeHardTemplate = (exercises: Exercise[]): ExerciseTemplate => {
//   return {
//     name: "Volume Hard",
//     exercises: [
//       // {
//       //   name: exercises[0].name,
//       //   data: [
//       //     {
//       //       percent: 40,
//       //       repetitions: 3,
//       //       sets: 10,
//       //       weight: 0.4 * exercises[0].weight,
//       //     },
//       //   ],
//       // },
//       {
//         name: exercises[1].name,
//         data: [
//           {
//             percent: 50,
//             repetitions: 5,
//             sets: 1,
//             weight: 0.5 * exercises[1].weight,
//           },
//           {
//             percent: 60,
//             repetitions: 5,
//             sets: 1,
//             weight: 0.6 * exercises[1].weight,
//           },
//           {
//             percent: 70,
//             repetitions: 5,
//             sets: 5,
//             weight: 0.7 * exercises[1].weight,
//           },
//         ],
//       },
//       // {
//       //   name: exercises[2].name,
//       //   data: [
//       //     {
//       //       percent: 60,
//       //       repetitions: 8,
//       //       sets: 4,
//       //       weight: 0.6 * exercises[2].weight,
//       //     },
//       //   ],
//       // },
//     ],
//   };
// };
