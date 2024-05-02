import {
  Equipment,
  ExerciseFilter,
  Force,
  Mechanic,
  PrimaryMuscles,
} from "types/exercise";

export const quadricepsFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Push],
  equipment: [Equipment.Barbell],
  primary_muscles: [PrimaryMuscles.Quadriceps],
};

export const hamstringFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [Equipment.Barbell],
  primary_muscles: [PrimaryMuscles.Hamstrings],
};

export const pushFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Push],
  equipment: [Equipment.Barbell],
  primary_muscles: [PrimaryMuscles.Chest, PrimaryMuscles.Shoulders],
};

export const pullFilterVertical = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbell,
    Equipment.Cable,
    Equipment.Machine,
    Equipment.BodyOnly,
  ],
  primary_muscles: [PrimaryMuscles.Lats],
};

export const pullFilterHorizontal = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.MiddleBack],
};

export const assistFilterAbs = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Push],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.Abdominals],
};

export const assistFilterLowerBack = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.LowerBack],
};

export const assistFilterBiceps = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull, Force.Push, Force.Static],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.Biceps],
};

export const assistFilterLowerTriceps = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull, Force.Push, Force.Static],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.Triceps],
};

export const workoutAFilters: { [index: number]: ExerciseFilter } = {
  0: quadricepsFilter,
  1: pushFilter,
  2: pullFilterVertical,
  3: assistFilterAbs,
  4: assistFilterLowerBack,
};

export const workoutBFilters: { [index: number]: ExerciseFilter } = {
  0: pushFilter,
  1: hamstringFilter,
  2: pullFilterVertical,
  3: assistFilterBiceps,
  4: assistFilterLowerTriceps,
};

export const workoutCFilters: { [index: number]: ExerciseFilter } = {
  0: hamstringFilter,
  1: pushFilter,
  2: pullFilterHorizontal,
  3: assistFilterAbs,
  4: assistFilterLowerBack,
};

export const workoutDFilters: { [index: number]: ExerciseFilter } = {
  0: pushFilter,
  1: quadricepsFilter,
  2: pullFilterVertical,
  3: assistFilterBiceps,
  4: assistFilterLowerTriceps,
};
