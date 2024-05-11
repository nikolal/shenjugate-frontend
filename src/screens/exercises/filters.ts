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

export const pushFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Push],
  equipment: [Equipment.Barbell, Equipment.Dumbbell],
  primary_muscles: [PrimaryMuscles.Chest, PrimaryMuscles.Shoulders],
};

export const pullFilter = {
  mechanic: [Mechanic.Compound],
  force: [Force.Pull],
  equipment: [
    Equipment.Barbell,
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.Machine,
  ],
  primary_muscles: [PrimaryMuscles.MiddleBack, PrimaryMuscles.Lats],
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

export const assistQuadricepsFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Push],
  equipment: [
    Equipment.Dumbbell,
    Equipment.Machine,
    Equipment.Cable,
    Equipment.BodyOnly,
    Equipment.Bands,
    Equipment.Kettlebells,
  ],
  primary_muscles: [PrimaryMuscles.Quadriceps, PrimaryMuscles.Glutes],
};

export const assistHamstringFilter = {
  mechanic: [Mechanic.Compound, Mechanic.Isolation],
  force: [Force.Pull],
  equipment: [
    Equipment.Dumbbell,
    Equipment.Cable,
    Equipment.BodyOnly,
    Equipment.Machine,
    Equipment.Bands,
    Equipment.Kettlebells,
  ],
  primary_muscles: [PrimaryMuscles.Hamstrings, PrimaryMuscles.LowerBack],
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
  0: pushFilter,
  1: quadricepsFilter,
  2: pullFilter,
  3: assistHamstringFilter,
  4: assistAbsFilter,
  5: assistRearDeltsFilter,
  6: assistCalvesFilter,
  7: assistBicepsFilter,
  8: assistTricepsFilter,
};

export const workoutBFilters: { [index: number]: ExerciseFilter } = {
  0: hamstringFilter,
  1: pushFilter,
  2: pullFilter,
  3: assistQuadricepsFilter,
  4: assistAbsFilter,
  5: assistRearDeltsFilter,
  6: assistCalvesFilter,
  7: assistBicepsFilter,
  8: assistTricepsFilter,
};

export const workoutCFilters: { [index: number]: ExerciseFilter } = {
  0: pushFilter,
  1: hamstringFilter,
  2: pullFilter,
  3: assistQuadricepsFilter,
  4: assistAbsFilter,
  5: assistRearDeltsFilter,
  6: assistCalvesFilter,
  7: assistBicepsFilter,
  8: assistTricepsFilter,
};

export const workoutDFilters: { [index: number]: ExerciseFilter } = {
  0: quadricepsFilter,
  1: pushFilter,
  2: pullFilter,
  3: assistHamstringFilter,
  4: assistAbsFilter,
  5: assistRearDeltsFilter,
  6: assistCalvesFilter,
  7: assistBicepsFilter,
  8: assistTricepsFilter,
};
