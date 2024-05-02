export type Exercise = {
  name: string;
  force: Force;
  level: string;
  mechanic: Mechanic;
  equipment: Equipment;
  primary_muscles: PrimaryMuscles[];
  secondary_muscles: string[];
  instructions: string[];
  category: string;
  id: string;
};

export type Workout = {
  exercises: Exercise[];
};

export type ExerciseFilter = {
  mechanic: Mechanic[];
  force: Force[];
  equipment: Equipment[];
  primary_muscles: PrimaryMuscles[];
};

export enum Mechanic {
  Compound = "Compound",
  Isolation = "Isolation",
  NotAssigned = "N/A",
}

export enum Force {
  Push = "Push",
  Pull = "Pull",
  Static = "Static",
  NotAssigned = "N/A",
}

export enum PrimaryMuscles {
  Quadriceps = "Quadriceps",
  Hamstrings = "Hamstrings",
  Glutes = "Glutes",
  Calves = "Calves",
  Chest = "Chest",
  Traps = "Traps",
  Lats = "Lats",
  MiddleBack = "MiddleBack",
  LowerBack = "LowerBack",
  Shoulders = "Shoulders",
  Biceps = "Biceps",
  Triceps = "Triceps",
  Forearms = "Forearms",
  Abdominals = "Abdominals",
  Adductors = "Adductors",
  Neck = "Neck",
  NotAssigned = "N/A",
}

export enum Equipment {
  Barbell = "Barbell",
  Dumbell = "Dumbell",
  Machine = "Machine",
  Cable = "Cable",
  Kettlebells = "Kettlebells",
  EZCurlBar = "EZCurlBar",
  Bands = "Bands",
  MedicineBall = "MedicineBall",
  ExerciseBall = "ExerciseBall",
  BodyOnly = "BodyOnly",
  FoamRoll = "FoamRoll",
  Other = "Other",
  NotAssigned = "N/A",
}
