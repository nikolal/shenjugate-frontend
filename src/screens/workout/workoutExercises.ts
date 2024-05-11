import { Exercise } from "types/exercise";

const workoutExercisesData = [
  {
    category: "strength",
    equipment: "barbell",
    force: "push",
    id: "id_Barbell_Squat",

    instructions: [
      "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack to just below shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.",
      "Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.",
      "Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).",
      "Begin to slowly lower the bar by bending the knees and hips as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90_degrees. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.",
      "Begin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position.",
      "Repeat for the recommended amount of repetitions.",
    ],
    level: "beginner",
    mechanic: "compound",
    name: "Barbell Squat",
    primary_muscles: ["quadriceps"],
    secondary_muscles: ["Calves", "Glutes", "Hamstrings", "LowerBack"],
  },
  {
    category: "strength",
    equipment: "barbell",
    force: "push",
    id: "id_Barbell_Bench_Press___Medium_Grip",

    instructions: [
      "Lie back on a flat bench. Using a medium width grip (a grip that creates a 90_degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.",
      "From the starting position, breathe in and begin coming down slowly until the bar touches your middle chest.",
      "After a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it.",
      "Repeat the movement for the prescribed amount of repetitions.",
      "When you are done, place the bar back in the rack.",
    ],
    level: "beginner",
    mechanic: "compound",
    name: "Barbell Bench Press Medium Grip",
    primary_muscles: ["Chest"],
    secondary_muscles: ["Shoulders", "Triceps"],
  },
  {
    category: "strength",
    equipment: "cable",
    force: "pull",
    id: "id_Seated_Cable_Rows",

    instructions: [
      "For this exercise you will need access to a low pulley row machine with a V_bar. Note: The V_bar will enable you to have a neutral grip where the palms of your hands face each other. To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked.",
      "Lean over as you keep the natural alignment of your back and grab the V_bar handles.",
      "With your arms extended pull back until your torso is at a 90_degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise.",
      "Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in.",
      "Repeat for the recommended amount of repetitions.",
    ],
    level: "beginner",
    mechanic: "compound",
    name: "Seated Cable Rows",
    primary_muscles: ["middle back"],
    secondary_muscles: ["Biceps", "Lats", "Shoulders"],
  },
  {
    category: "strength",
    equipment: "body only",
    force: "pull",
    id: "id_Hanging_Leg_Raise",

    instructions: [
      "Hang from a chin_up bar with both arms extended at arms length in top of you using either a wide grip or a medium grip. The legs should be straight down with the pelvis rolled slightly backwards. This will be your starting position.",
      "Raise your legs until the torso makes a 90_degree angle with the legs. Exhale as you perform this movement and hold the contraction for a second or so.",
      "Go back slowly to the starting position as you breathe in.",
      "Repeat for the recommended amount of repetitions.",
    ],
    level: "expert",
    mechanic: "isolation",
    name: "Hanging Leg Raise",
    primary_muscles: ["Abdominals"],
    secondary_muscles: [],
  },
  {
    category: "strength",
    equipment: "other",
    force: "pull",
    id: "id_Hyperextensions_Back_Extensions",

    instructions: [
      "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads.",
      "Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction.",
      "With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms.",
      "Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back.",
      "Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury.",
      "Repeat for the recommended amount of repetitions.",
    ],
    level: "beginner",
    mechanic: "isolation",
    name: "Hyperextensions (Back Extensions)",
    primary_muscles: ["LowerBack"],
    secondary_muscles: ["Glutes", "Hamstrings"],
  },
];
const workoutExercises: Exercise[] = workoutExercisesData as Exercise[];

export { workoutExercises };
