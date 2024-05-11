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

export const assistHamstringFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.BodyOnly,
    Equipment.Machine,
    Equipment.Bands,
    Equipment.Kettlebells,
  ],
  primary_muscles: [PrimaryMuscles.Hamstrings],
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
  force: [Force.Pull],
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
  force: [Force.Push],
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
  0: pushHorizontalFilter,
  1: quadricepsFilter,
  2: pushHorizontalFilter,
  3: pullHorizontalFilter,
  4: assistHamstringFilter,
  5: assistAbsFilter,
  6: assistCalvesFilter,
  7: assistRearDeltsFilter,
  8: assistBicepsFilter,
  9: assistTricepsFilter,
};

export const workoutBFilters: { [index: number]: ExerciseFilter } = {
  0: hamstringFilter,
  1: pushHorizontalFilter,
  2: quadricepsFilter,
  3: pullHorizontalFilter,
  4: hamstringFilter,
  5: assistAbsFilter,
  6: assistCalvesFilter,
  7: assistRearDeltsFilter,
  8: assistBicepsFilter,
  9: assistTricepsFilter,
};

export const workoutCFilters: { [index: number]: ExerciseFilter } = {
  0: pushHorizontalFilter,
  1: hamstringFilter,
  2: pushHorizontalFilter,
  3: pullHorizontalFilter,
  4: quadricepsFilter,
  5: assistAbsFilter,
  6: assistCalvesFilter,
  7: assistRearDeltsFilter,
  8: assistBicepsFilter,
  9: assistTricepsFilter,
};

export const workoutDFilters: { [index: number]: ExerciseFilter } = {
  0: quadricepsFilter,
  1: pushHorizontalFilter,
  2: hamstringFilter,
  3: pullHorizontalFilter,
  4: quadricepsFilter,
  5: assistAbsFilter,
  6: assistCalvesFilter,
  7: assistRearDeltsFilter,
  8: assistBicepsFilter,
  9: assistTricepsFilter,
};
