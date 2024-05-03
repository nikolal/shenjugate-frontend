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
  equipment: [Equipment.Barbell, Equipment.Dumbbell],
  primary_muscles: [PrimaryMuscles.Quadriceps, PrimaryMuscles.Glutes],
};

export const hamstringFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [Equipment.Barbell, Equipment.Dumbbell],
  primary_muscles: [PrimaryMuscles.Hamstrings],
};

export const pushHorizontalFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Push],
  equipment: [Equipment.Barbell, Equipment.Dumbbell],
  primary_muscles: [PrimaryMuscles.Chest],
};

export const pushVerticalFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Push],
  equipment: [Equipment.Barbell, Equipment.Dumbbell],
  primary_muscles: [PrimaryMuscles.Shoulders],
};

export const pullHorizontalFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.MiddleBack],
};

export const pullVerticalFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
    Equipment.BodyOnly,
  ],
  primary_muscles: [PrimaryMuscles.Lats],
};

export const assistAbsFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
    Equipment.BodyOnly,
  ],
  primary_muscles: [PrimaryMuscles.Abdominals],
};

export const assistLowerBackFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.Hamstrings],
};

export const assistBicepsFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull, Force.Push, Force.Static],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.Biceps],
};

export const assistTricepsFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull, Force.Push, Force.Static],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.Triceps],
};

export const assistRearDeltsFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull],
  equipment: [Equipment.Dumbbell, Equipment.Cable, Equipment.Machine],
  primary_muscles: [PrimaryMuscles.Shoulders],
};

export const assistCalvesFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Push],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.Calves],
};

export const workoutAFilters: { [index: number]: ExerciseFilter } = {
  0: quadricepsFilter,
  1: pushHorizontalFilter,
  2: pullHorizontalFilter,
  3: assistAbsFilter,
  4: assistLowerBackFilter,
  5: assistCalvesFilter,
};

export const workoutBFilters: { [index: number]: ExerciseFilter } = {
  0: pushVerticalFilter,
  1: hamstringFilter,
  2: pullVerticalFilter,
  3: assistBicepsFilter,
  4: assistTricepsFilter,
  5: assistRearDeltsFilter,
};

export const workoutCFilters: { [index: number]: ExerciseFilter } = {
  0: hamstringFilter,
  1: pushVerticalFilter,
  2: pullVerticalFilter,
  3: assistAbsFilter,
  4: assistLowerBackFilter,
  5: assistCalvesFilter,
};

export const workoutDFilters: { [index: number]: ExerciseFilter } = {
  0: pushHorizontalFilter,
  1: quadricepsFilter,
  2: pullHorizontalFilter,
  3: assistBicepsFilter,
  4: assistTricepsFilter,
  5: assistRearDeltsFilter,
};
