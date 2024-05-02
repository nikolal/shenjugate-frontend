import { Equipment, Force, Mechanic, PrimaryMuscles } from "types/exercise";

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

export const workoutAFilters = {
  0: quadricepsFilter,
  1: pushFilter,
};

export const workoutBFilters = {
  0: pushFilter,
  1: hamstringFilter,
};

export const workoutCFilters = {
  0: hamstringFilter,
  1: pushFilter,
};

export const workoutDFilters = {
  0: pushFilter,
  1: quadricepsFilter,
};
