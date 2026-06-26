const STORAGE_KEY = "move-your-way-progress-v2";

const categories = [
  "All",
  "Upper Body",
  "Lower Body",
  "Stamina",
  "Endurance",
  "Strength",
  "Stretches",
  "Core",
  "Balance",
  "Coordination",
  "Cardio",
];

const exercises = [
  {
    id: "wall-push",
    category: "Upper Body",
    level: "Easy",
    icon: "🧱",
    name: "Wall Push-Ups",
    description: "Push the wall like a hero to wake up your chest, shoulders, and arms.",
    build: "Upper body start-up",
    reward: 10,
    color: "#57c7a0",
    steps: ["Stand an arm's length from a wall.", "Place your hands on the wall.", "Bend and press back 8 times."],
  },
  {
    id: "desk-dips",
    category: "Upper Body",
    level: "Medium",
    icon: "🪑",
    name: "Desk Dips",
    description: "Use a sturdy seat to build triceps and shoulder strength in a simple way.",
    build: "Upper body strength",
    reward: 14,
    color: "#4ec1d6",
    steps: ["Sit on the edge of a sturdy chair.", "Hands by your hips, slide forward.", "Lower and lift 6 times."],
  },
  {
    id: "knee-push",
    category: "Upper Body",
    level: "Heavy",
    icon: "💪",
    name: "Knee Push-Ups",
    description: "A stronger push-up that still keeps your body close to the ground and steady.",
    build: "Upper body power",
    reward: 20,
    color: "#ff6f61",
    steps: ["Start on hands and knees.", "Keep your body long.", "Lower and press up 6 to 10 times."],
  },
  {
    id: "arm-circles",
    category: "Upper Body",
    level: "Easy",
    icon: "🌀",
    name: "Arm Circles",
    description: "Wake up your shoulders with gentle circles that feel light and easy.",
    build: "Shoulder warm-up",
    reward: 8,
    color: "#6ee7ff",
    steps: ["Stretch both arms out.", "Make small circles.", "Do 20 seconds forward and back."],
  },
  {
    id: "pillow-press",
    category: "Upper Body",
    level: "Easy",
    icon: "🛏️",
    name: "Pillow Press",
    description: "Press your hands into a pillow or soft cushion for a simple strength spark.",
    build: "Gentle arm strength",
    reward: 9,
    color: "#ff8ad0",
    steps: ["Hold a pillow at chest height.", "Press your hands in.", "Repeat 10 slow squeezes."],
  },
  {
    id: "towel-pull",
    category: "Upper Body",
    level: "Medium",
    icon: "🧣",
    name: "Towel Pull",
    description: "Use a towel like a tug-of-war rope to build stronger arms.",
    build: "Arm pull strength",
    reward: 13,
    color: "#8b7cff",
    steps: ["Hold a towel with both hands.", "Pull gently apart.", "Hold and release 8 times."],
  },
  {
    id: "wall-punch",
    category: "Upper Body",
    level: "Medium",
    icon: "🥊",
    name: "Shadow Punches",
    description: "Fast punches in the air wake up your upper body without needing much space.",
    build: "Fast arm drive",
    reward: 15,
    color: "#f5b700",
    steps: ["Stand tall.", "Punch the air across your body.", "Do 20 punches."],
  },
  {
    id: "push-up-hold",
    category: "Upper Body",
    level: "Heavy",
    icon: "🫸",
    name: "Push-Up Hold",
    description: "Hold halfway down to build strong arms and steady focus.",
    build: "Arm endurance",
    reward: 21,
    color: "#ff6f61",
    steps: ["Lower into a push-up halfway.", "Hold steady.", "Try 10 seconds."],
  },
  {
    id: "chair-sit",
    category: "Lower Body",
    level: "Easy",
    icon: "🪑",
    name: "Chair Sits",
    description: "Sit down and stand up with control to warm up thighs and glutes.",
    build: "Leg control",
    reward: 10,
    color: "#ffb84d",
    steps: ["Stand in front of a chair.", "Tap the seat like a checkpoint.", "Stand back up 8 times."],
  },
  {
    id: "toe-taps",
    category: "Lower Body",
    level: "Easy",
    icon: "👣",
    name: "Toe Taps",
    description: "Tap one foot out and back to wake up your legs without much stress.",
    build: "Leg wake-up",
    reward: 8,
    color: "#57c7a0",
    steps: ["Stand tall.", "Tap one toe forward.", "Switch sides for 20 taps."],
  },
  {
    id: "mini-lunges",
    category: "Lower Body",
    level: "Medium",
    icon: "🦵",
    name: "Mini Lunges",
    description: "Take small steps forward to wake up your hips, thighs, and balance.",
    build: "Lower body power",
    reward: 15,
    color: "#ff8ad0",
    steps: ["Step one foot forward.", "Lower a little bit.", "Swap sides for 6 reps each."],
  },
  {
    id: "side-steps",
    category: "Lower Body",
    level: "Medium",
    icon: "↔️",
    name: "Side Steps",
    description: "Step side to side to build hip strength and movement control.",
    build: "Hip support",
    reward: 12,
    color: "#4ec1d6",
    steps: ["Step right, then left.", "Stay low and smooth.", "Repeat for 30 seconds."],
  },
  {
    id: "squat-hold",
    category: "Lower Body",
    level: "Heavy",
    icon: "🏋️",
    name: "Squat Hold",
    description: "Hold a gentle squat to build leg endurance and confidence under tension.",
    build: "Leg endurance",
    reward: 20,
    color: "#8b7cff",
    steps: ["Lower into a comfortable squat.", "Keep your chest proud.", "Hold for 20 seconds."],
  },
  {
    id: "calf-raises",
    category: "Lower Body",
    level: "Heavy",
    icon: "🦶",
    name: "Calf Raises",
    description: "Rise up on your toes to make your lower legs feel strong and awake.",
    build: "Lower leg strength",
    reward: 16,
    color: "#ff81c2",
    steps: ["Stand with feet flat.", "Lift your heels slowly.", "Lower down 15 times."],
  },
  {
    id: "march-steps",
    category: "Stamina",
    level: "Easy",
    icon: "🚶",
    name: "Power March",
    description: "March in place with big arms to get your heart moving without feeling rushed.",
    build: "Stamina warm-up",
    reward: 9,
    color: "#6ee7ff",
    steps: ["Stand tall.", "Lift knees one at a time.", "March for 45 seconds."],
  },
  {
    id: "star-step",
    category: "Stamina",
    level: "Easy",
    icon: "✴️",
    name: "Star Step",
    description: "Step in a star shape to get your heart going with easy movement.",
    build: "Stamina starter",
    reward: 9,
    color: "#ffb84d",
    steps: ["Step out to four points.", "Reach with your arms.", "Repeat for 30 seconds."],
  },
  {
    id: "dance-burst",
    category: "Stamina",
    level: "Medium",
    icon: "🪩",
    name: "Dance Burst",
    description: "Dance for a short burst to practice moving, breathing, and smiling at once.",
    build: "Cardio stamina",
    reward: 14,
    color: "#ff81c2",
    steps: ["Pick a fun song.", "Move however your body wants.", "Dance for one minute."],
  },
  {
    id: "jump-rope-air",
    category: "Stamina",
    level: "Medium",
    icon: "🪢",
    name: "Air Jump Rope",
    description: "Pretend jump rope keeps your heartbeat up and feels playful too.",
    build: "Cardio burst",
    reward: 13,
    color: "#57c7a0",
    steps: ["Hold an imaginary rope.", "Hop lightly.", "Go for 40 seconds."],
  },
  {
    id: "stairs-seek",
    category: "Stamina",
    level: "Heavy",
    icon: "🪜",
    name: "Stair Seek",
    description: "Use stairs or a step to practice steady movement and build extra gas tank.",
    build: "Heart stamina",
    reward: 20,
    color: "#f5b700",
    steps: ["Find a safe step or staircase.", "Go up and down slowly.", "Repeat for 3 rounds."],
  },
  {
    id: "power-laps",
    category: "Stamina",
    level: "Heavy",
    icon: "🏁",
    name: "Power Laps",
    description: "Move back and forth at a steady pace to use up extra energy.",
    build: "Long cardio",
    reward: 19,
    color: "#ff6f61",
    steps: ["Pick two spots.", "Walk or jog between them.", "Repeat for 90 seconds."],
  },
  {
    id: "jog-place",
    category: "Endurance",
    level: "Easy",
    icon: "🏃",
    name: "Tiny Jog",
    description: "A gentle jog in place helps you stay moving for a longer stretch of time.",
    build: "Endurance base",
    reward: 10,
    color: "#57c7a0",
    steps: ["Start with soft steps.", "Keep breathing easy.", "Jog for 30 seconds."],
  },
  {
    id: "long-walk",
    category: "Endurance",
    level: "Easy",
    icon: "🚶‍♀️",
    name: "Long Walk",
    description: "A smooth walking loop helps you stay moving for longer without rushing.",
    build: "Endurance base",
    reward: 9,
    color: "#6ee7ff",
    steps: ["Walk around your room or outside.", "Keep a steady pace.", "Go for 2 minutes."],
  },
  {
    id: "relay-race",
    category: "Endurance",
    level: "Medium",
    icon: "🔁",
    name: "Room Relay",
    description: "Move between two spots in your room to practice lasting energy and focus.",
    build: "Moving longer",
    reward: 15,
    color: "#4ec1d6",
    steps: ["Pick two safe spots.", "Walk or jog between them.", "Do 5 trips each way."],
  },
  {
    id: "pocket-laps",
    category: "Endurance",
    level: "Medium",
    icon: "🧭",
    name: "Pocket Laps",
    description: "A loop around the room or yard that helps you keep going a little longer.",
    build: "Steady pace",
    reward: 14,
    color: "#ff81c2",
    steps: ["Choose a route.", "Keep your pace easy.", "Repeat for 2 rounds."],
  },
  {
    id: "steady-circle",
    category: "Endurance",
    level: "Heavy",
    icon: "🌀",
    name: "Steady Circle",
    description: "Keep moving in a slow loop to train your body to stay active with control.",
    build: "Longer movement",
    reward: 20,
    color: "#ff6f61",
    steps: ["Walk in a circle or around the room.", "Stay smooth and steady.", "Move for 90 seconds."],
  },
  {
    id: "endurance-dash",
    category: "Endurance",
    level: "Heavy",
    icon: "🏃‍♀️",
    name: "Endurance Dash",
    description: "A longer moving challenge that keeps your body working steadily.",
    build: "Long movement",
    reward: 18,
    color: "#8b7cff",
    steps: ["Move continuously.", "Stay relaxed.", "Keep going for 2 minutes."],
  },
  {
    id: "plank-table",
    category: "Strength",
    level: "Easy",
    icon: "📏",
    name: "Table Plank",
    description: "A high plank on a table or counter builds total-body tension in a friendly way.",
    build: "Strength starter",
    reward: 11,
    color: "#8b7cff",
    steps: ["Place hands on a sturdy surface.", "Walk feet back.", "Hold for 20 seconds."],
  },
  {
    id: "bear-walk",
    category: "Strength",
    level: "Easy",
    icon: "🐾",
    name: "Bear Walk",
    description: "A gentle bear walk builds whole-body strength while staying playful.",
    build: "Whole-body tension",
    reward: 10,
    color: "#57c7a0",
    steps: ["Get on hands and feet.", "Move slowly forward.", "Take 8 steps."],
  },
  {
    id: "bear-reach",
    category: "Strength",
    level: "Medium",
    icon: "🐻",
    name: "Bear Reach",
    description: "A tiny bear pose teaches strength, control, and how to hold your body steady.",
    build: "Whole-body strength",
    reward: 16,
    color: "#ffb84d",
    steps: ["Get on hands and feet.", "Lift your knees a little.", "Reach one hand at a time."],
  },
  {
    id: "plank-reach",
    category: "Strength",
    level: "Medium",
    icon: "🎯",
    name: "Plank Reach",
    description: "Reach one hand forward from a plank to test your balance and strength together.",
    build: "Core and arm strength",
    reward: 15,
    color: "#4ec1d6",
    steps: ["Hold a plank on a table or floor.", "Reach one hand forward.", "Switch sides 6 times."],
  },
  {
    id: "wall-sit",
    category: "Strength",
    level: "Heavy",
    icon: "🧱",
    name: "Wall Sit",
    description: "Lean into a wall and hold the shape to build your leg engine slowly.",
    build: "Strength endurance",
    reward: 21,
    color: "#ff81c2",
    steps: ["Slide down a wall.", "Keep knees bent gently.", "Hold for 20 seconds."],
  },
  {
    id: "slow-burpee",
    category: "Strength",
    level: "Heavy",
    icon: "⬇️",
    name: "Slow Burpee",
    description: "A softer burpee that still asks your whole body to work hard.",
    build: "Whole-body power",
    reward: 19,
    color: "#ff6f61",
    steps: ["Squat down.", "Walk hands out.", "Walk back in and stand up."],
  },
  {
    id: "toe-touch",
    category: "Stretches",
    level: "Easy",
    icon: "🧘",
    name: "Toe Touch Reach",
    description: "Breathe out and reach toward your toes to help your legs feel less tight.",
    build: "Hamstring stretch",
    reward: 8,
    color: "#6ee7ff",
    steps: ["Stand tall.", "Reach down slowly.", "Hold the stretch for 10 seconds."],
  },
  {
    id: "shoulder-rolls",
    category: "Stretches",
    level: "Easy",
    icon: "〰️",
    name: "Shoulder Rolls",
    description: "Roll your shoulders to help your body feel loose and ready.",
    build: "Shoulder reset",
    reward: 7,
    color: "#ffb84d",
    steps: ["Lift shoulders up.", "Roll them back.", "Repeat 10 times."],
  },
  {
    id: "rainbow-reach",
    category: "Stretches",
    level: "Medium",
    icon: "🌈",
    name: "Rainbow Reach",
    description: "Arc your arms overhead and sideways to open up your shoulders and sides.",
    build: "Side stretch",
    reward: 12,
    color: "#57c7a0",
    steps: ["Reach both arms up.", "Lean left and right.", "Do 3 slow rainbows each way."],
  },
  {
    id: "twist-reach",
    category: "Stretches",
    level: "Medium",
    icon: "🔄",
    name: "Twist Reach",
    description: "A gentle twist stretch to help your back and sides open up.",
    build: "Back and side stretch",
    reward: 11,
    color: "#8b7cff",
    steps: ["Stand tall.", "Twist slowly side to side.", "Do 8 twists."],
  },
  {
    id: "cobra-soft",
    category: "Stretches",
    level: "Heavy",
    icon: "🐍",
    name: "Cobra Glide",
    description: "A calm back stretch that helps your front body open up after moving around.",
    build: "Back stretch",
    reward: 17,
    color: "#ff6f61",
    steps: ["Lie on your tummy.", "Press up gently with your hands.", "Hold for 15 seconds."],
  },
  {
    id: "butterfly-fold",
    category: "Stretches",
    level: "Heavy",
    icon: "🦋",
    name: "Butterfly Fold",
    description: "A deeper calm stretch for hips and legs.",
    build: "Hip opening",
    reward: 16,
    color: "#ff81c2",
    steps: ["Sit with feet together.", "Let knees fall out gently.", "Fold forward slowly."],
  },
  {
    id: "crunch-bug",
    category: "Core",
    level: "Easy",
    icon: "🐞",
    name: "Bug Crunch",
    description: "A tiny crunch that wakes up your stomach muscles without needing huge effort.",
    build: "Core start",
    reward: 10,
    color: "#ffb84d",
    steps: ["Lie on your back.", "Lift shoulders a little.", "Do 8 small crunches."],
  },
  {
    id: "dead-hold",
    category: "Core",
    level: "Easy",
    icon: "🫠",
    name: "Dead Hold",
    description: "Hold your core steady in a calm shape that is small but strong.",
    build: "Core control",
    reward: 9,
    color: "#57c7a0",
    steps: ["Lie on your back.", "Lift one leg and one arm slightly.", "Hold for 10 seconds."],
  },
  {
    id: "dead-bug",
    category: "Core",
    level: "Medium",
    icon: "🪲",
    name: "Dead Bug",
    description: "Move opposite arm and leg together to train your core and coordination.",
    build: "Core control",
    reward: 15,
    color: "#8b7cff",
    steps: ["Lie on your back.", "Lift one arm and the opposite leg.", "Switch sides for 6 reps."],
  },
  {
    id: "bicycle-bugs",
    category: "Core",
    level: "Medium",
    icon: "🚲",
    name: "Bicycle Bugs",
    description: "Pedal your legs in the air to wake up your core.",
    build: "Core endurance",
    reward: 14,
    color: "#ff81c2",
    steps: ["Lie on your back.", "Pedal slowly.", "Do 20 seconds."],
  },
  {
    id: "hollow-hold",
    category: "Core",
    level: "Heavy",
    icon: "🔷",
    name: "Hollow Hold",
    description: "Hold a tiny banana shape to challenge your core in a focused, steady way.",
    build: "Core strength",
    reward: 21,
    color: "#ff81c2",
    steps: ["Lie on your back.", "Lift your shoulders and feet a little.", "Hold for 15 seconds."],
  },
  {
    id: "side-plank",
    category: "Core",
    level: "Heavy",
    icon: "↩️",
    name: "Side Plank",
    description: "A steady side hold that asks your core to stay strong and still.",
    build: "Core strength",
    reward: 19,
    color: "#4ec1d6",
    steps: ["Lie on your side.", "Lift your hips.", "Hold for 10 seconds each side."],
  },
  {
    id: "tree-stand",
    category: "Balance",
    level: "Easy",
    icon: "🌳",
    name: "Tree Stand",
    description: "Stand like a tree to practice balance and calm at the same time.",
    build: "Balance start",
    reward: 9,
    color: "#57c7a0",
    steps: ["Stand on one foot.", "Touch the other foot to your ankle.", "Hold for 10 seconds each side."],
  },
  {
    id: "bean-balance",
    category: "Balance",
    level: "Easy",
    icon: "🫘",
    name: "Bean Balance",
    description: "Shift your weight slowly to practice staying steady.",
    build: "Steady feet",
    reward: 8,
    color: "#ffb84d",
    steps: ["Stand with feet together.", "Lean slightly side to side.", "Hold each side for 5 seconds."],
  },
  {
    id: "line-walk",
    category: "Balance",
    level: "Medium",
    icon: "➖",
    name: "Line Walk",
    description: "Walk heel-to-toe along an imagined line to strengthen control and focus.",
    build: "Steady balance",
    reward: 14,
    color: "#4ec1d6",
    steps: ["Imagine a line on the floor.", "Walk heel-to-toe.", "Take 10 careful steps."],
  },
  {
    id: "balance-reach",
    category: "Balance",
    level: "Medium",
    icon: "🤸",
    name: "Balance Reach",
    description: "Reach in different directions while standing on one foot.",
    build: "Balance and focus",
    reward: 13,
    color: "#8b7cff",
    steps: ["Lift one foot.", "Reach left, right, and up.", "Switch sides."],
  },
  {
    id: "flamingo-freeze",
    category: "Balance",
    level: "Heavy",
    icon: "🦩",
    name: "Flamingo Freeze",
    description: "Freeze on one leg to build balance, ankle strength, and patience.",
    build: "Balance challenge",
    reward: 20,
    color: "#ff6f61",
    steps: ["Lift one knee.", "Stretch your arms out.", "Hold for 20 seconds."],
  },
  {
    id: "wobble-wall",
    category: "Balance",
    level: "Heavy",
    icon: "🧱",
    name: "Wobble Wall",
    description: "A steady balancing challenge with one foot up and your hands hovering for support.",
    build: "Balance strength",
    reward: 18,
    color: "#ff81c2",
    steps: ["Stand near a wall.", "Lift one foot.", "Hold steady for 15 seconds."],
  },
  {
    id: "skip-hop",
    category: "Coordination",
    level: "Easy",
    icon: "🫧",
    name: "Skip and Hop",
    description: "A playful skip helps your brain and body learn timing together.",
    build: "Coordination warm-up",
    reward: 10,
    color: "#ffb84d",
    steps: ["Hop on one foot.", "Switch to the other.", "Skip for 30 seconds."],
  },
  {
    id: "mirror-moves",
    category: "Coordination",
    level: "Easy",
    icon: "🪞",
    name: "Mirror Moves",
    description: "Copy the way you move in the mirror for a fun brain-body warm-up.",
    build: "Easy coordination",
    reward: 9,
    color: "#57c7a0",
    steps: ["Pick a mirror or pretend one.", "Move your arms and legs slowly.", "Copy yourself for 30 seconds."],
  },
  {
    id: "cross-clap",
    category: "Coordination",
    level: "Medium",
    icon: "👏",
    name: "Cross Clap",
    description: "Touch opposite hand to opposite knee and clap overhead to mix up your patterns.",
    build: "Movement timing",
    reward: 15,
    color: "#6ee7ff",
    steps: ["Touch right hand to left knee.", "Then clap overhead.", "Repeat 8 times."],
  },
  {
    id: "pattern-hop",
    category: "Coordination",
    level: "Medium",
    icon: "🔣",
    name: "Pattern Hop",
    description: "Follow a hop pattern to keep your body and brain talking.",
    build: "Pattern timing",
    reward: 14,
    color: "#ff81c2",
    steps: ["Hop right, left, right, left.", "Add a clap.", "Repeat the pattern twice."],
  },
  {
    id: "pattern-step",
    category: "Coordination",
    level: "Heavy",
    icon: "🎯",
    name: "Pattern Step",
    description: "Follow a step pattern to sharpen your movement memory and rhythm.",
    build: "Coordination power",
    reward: 21,
    color: "#8b7cff",
    steps: ["Step left, right, back, center.", "Repeat without rushing.", "Do 3 patterns."],
  },
  {
    id: "rhythm-run",
    category: "Coordination",
    level: "Heavy",
    icon: "🥁",
    name: "Rhythm Run",
    description: "Move to a beat and keep the pattern going.",
    build: "Timing and rhythm",
    reward: 18,
    color: "#ff6f61",
    steps: ["Tap a rhythm.", "Move with it.", "Keep going for 45 seconds."],
  },
  {
    id: "star-jacks",
    category: "Cardio",
    level: "Easy",
    icon: "⭐",
    name: "Star Jacks",
    description: "A softer version of jumping jacks that brings on the happy heart beat.",
    build: "Cardio spark",
    reward: 11,
    color: "#ff81c2",
    steps: ["Step out and reach up.", "Step in and relax.", "Do 10 star jacks."],
  },
  {
    id: "fast-feet",
    category: "Cardio",
    level: "Easy",
    icon: "⚡",
    name: "Fast Feet",
    description: "Quick little feet make your heart work without needing a complicated workout.",
    build: "Cardio spark",
    reward: 10,
    color: "#f5b700",
    steps: ["Tap feet quickly.", "Stay light.", "Move for 20 seconds."],
  },
  {
    id: "glow-run",
    category: "Cardio",
    level: "Medium",
    icon: "💫",
    name: "Glow Run",
    description: "Move in place with light feet to practice breathing and rhythm.",
    build: "Cardio rhythm",
    reward: 16,
    color: "#57c7a0",
    steps: ["Run softly in place.", "Swing your arms.", "Go for 45 seconds."],
  },
  {
    id: "heart-hop",
    category: "Cardio",
    level: "Medium",
    icon: "💓",
    name: "Heart Hop",
    description: "A bouncy hop that raises the heart rate and stays friendly.",
    build: "Heart pump",
    reward: 15,
    color: "#ff8ad0",
    steps: ["Hop lightly.", "Keep breathing.", "Go for 40 seconds."],
  },
  {
    id: "power-loop",
    category: "Cardio",
    level: "Heavy",
    icon: "🔆",
    name: "Power Loop",
    description: "A longer burst of movement that helps your body feel strong and awake.",
    build: "Cardio endurance",
    reward: 22,
    color: "#ff6f61",
    steps: ["Choose a safe space.", "Keep moving continuously.", "Stay active for 90 seconds."],
  },
  {
    id: "sprint-burst",
    category: "Cardio",
    level: "Heavy",
    icon: "💨",
    name: "Sprint Burst",
    description: "A strong burst of movement to get your heart really working.",
    build: "Cardio power",
    reward: 20,
    color: "#8b7cff",
    steps: ["Pick a short path.", "Move fast for 20 seconds.", "Rest and repeat once."],
  },
  {
    id: "wall-climber",
    category: "Upper Body",
    level: "Extreme",
    icon: "🧗",
    name: "Wall Climbers",
    description: "Drive your knees fast while your hands stay braced on the wall for a big power burst.",
    build: "Upper body + cardio power",
    reward: 26,
    color: "#36213d",
    steps: ["Hands on a wall in plank position.", "Drive one knee in, then switch fast.", "Go for 30 seconds."],
  },
  {
    id: "jump-squats",
    category: "Lower Body",
    level: "Extreme",
    icon: "⚡",
    name: "Jump Squats",
    description: "A bigger leg challenge that adds a jump to your squat and really wakes up the lower body.",
    build: "Leg power",
    reward: 27,
    color: "#2f4858",
    steps: ["Lower into a squat.", "Jump up with control.", "Land softly and repeat 8 times."],
  },
  {
    id: "speed-feet",
    category: "Stamina",
    level: "Extreme",
    icon: "💥",
    name: "Speed Feet",
    description: "Fast feet at full speed to burn through a burst of energy.",
    build: "Fast stamina",
    reward: 25,
    color: "#1f6aa5",
    steps: ["Stay light on your toes.", "Pump your arms.", "Move as fast as you can for 30 seconds."],
  },
  {
    id: "nonstop-laps",
    category: "Endurance",
    level: "Extreme",
    icon: "🛣️",
    name: "Nonstop Laps",
    description: "Keep moving without stopping to push your endurance past the usual limit.",
    build: "Long-haul energy",
    reward: 28,
    color: "#1b998b",
    steps: ["Pick a safe loop.", "Move continuously.", "Keep going for 3 full minutes."],
  },
  {
    id: "plank-walkouts",
    category: "Strength",
    level: "Extreme",
    icon: "🕷️",
    name: "Plank Walkouts",
    description: "Walk your hands out and back for a full-body strength challenge.",
    build: "Full-body strength",
    reward: 27,
    color: "#6a4c93",
    steps: ["Stand tall.", "Walk your hands to the floor and out into a plank.", "Walk back in and repeat 6 times."],
  },
  {
    id: "deep-flow",
    category: "Stretches",
    level: "Extreme",
    icon: "🫶",
    name: "Deep Flow",
    description: "A longer stretch flow that asks your body to hold, reach, and breathe with control.",
    build: "Long stretch flow",
    reward: 18,
    color: "#8d6e63",
    steps: ["Reach high.", "Fold low.", "Hold each stretch for 15 seconds."],
  },
  {
    id: "hollow-rocks",
    category: "Core",
    level: "Extreme",
    icon: "🪨",
    name: "Hollow Rocks",
    description: "Rock gently in a hollow shape for a core challenge that feels tough fast.",
    build: "Core power",
    reward: 26,
    color: "#4a148c",
    steps: ["Lift shoulders and feet a little.", "Rock forward and back.", "Do 10 controlled rocks."],
  },
  {
    id: "airplane-balance",
    category: "Balance",
    level: "Extreme",
    icon: "✈️",
    name: "Airplane Balance",
    description: "Lean forward like an airplane and keep your body steady without wobbling.",
    build: "Balance control",
    reward: 24,
    color: "#15616d",
    steps: ["Stand on one leg.", "Tip your body forward.", "Hold for 15 seconds each side."],
  },
  {
    id: "combo-chaos",
    category: "Coordination",
    level: "Extreme",
    icon: "🎛️",
    name: "Combo Chaos",
    description: "A fast pattern challenge that mixes steps, claps, and hops together.",
    build: "Coordination speed",
    reward: 27,
    color: "#b23a48",
    steps: ["Step, clap, hop, clap.", "Repeat the combo faster.", "Do 4 rounds."],
  },
  {
    id: "turbo-burpees",
    category: "Cardio",
    level: "Extreme",
    icon: "🚀",
    name: "Turbo Burpees",
    description: "A bigger full-body burst that gets your heart racing much faster.",
    build: "Cardio sprint",
    reward: 28,
    color: "#ff5c8a",
    steps: ["Squat down.", "Kick back into plank.", "Jump up and repeat 6 times."],
  },
];

const vibeLabels = {
  "Upper Body": "Wake-Up",
  "Lower Body": "Leg Lift",
  Stamina: "Get Going",
  Endurance: "Keep Going",
  Strength: "Build Up",
  Stretches: "Reset",
  Core: "Center",
  Balance: "Steady",
  Coordination: "Brain + Body",
  Cardio: "Heart Pump",
};

const exerciseTags = {
  "wall-push": ["low energy", "indoors", "no equipment", "tiny space", "strength"],
  "desk-dips": ["medium energy", "indoors", "no equipment", "quick", "strength"],
  "knee-push": ["medium energy", "indoors", "no equipment", "brave", "strength"],
  "arm-circles": ["low energy", "indoors", "tiny space", "quick", "warm-up"],
  "pillow-press": ["low energy", "indoors", "no equipment", "tiny space", "strength"],
  "towel-pull": ["medium energy", "indoors", "no equipment", "strength"],
  "wall-punch": ["high energy", "indoors", "tiny space", "quick", "heart"],
  "push-up-hold": ["high energy", "indoors", "no equipment", "brave", "strength"],
  "chair-sit": ["low energy", "indoors", "tiny space", "no equipment", "legs"],
  "toe-taps": ["low energy", "indoors", "tiny space", "quick", "legs"],
  "mini-lunges": ["medium energy", "indoors", "outdoors", "no equipment", "legs", "balance"],
  "side-steps": ["medium energy", "indoors", "outdoors", "no equipment", "legs", "balance"],
  "squat-hold": ["high energy", "indoors", "no equipment", "steady", "legs"],
  "calf-raises": ["medium energy", "indoors", "no equipment", "legs", "steady"],
  "march-steps": ["low energy", "indoors", "tiny space", "quick", "heart"],
  "star-step": ["medium energy", "indoors", "tiny space", "quick", "heart"],
  "dance-burst": ["high energy", "indoors", "music", "playful", "heart"],
  "jump-rope-air": ["high energy", "indoors", "tiny space", "playful", "heart"],
  "stairs-seek": ["high energy", "outdoors", "indoors", "heart", "longer"],
  "power-laps": ["high energy", "outdoors", "heart", "longer"],
  "jog-place": ["medium energy", "indoors", "outdoors", "tiny space", "heart"],
  "long-walk": ["low energy", "outdoors", "indoors", "calm", "heart"],
  "relay-race": ["medium energy", "indoors", "quick", "longer", "heart"],
  "pocket-laps": ["medium energy", "outdoors", "indoors", "longer", "heart"],
  "steady-circle": ["high energy", "outdoors", "longer", "heart"],
  "endurance-dash": ["high energy", "outdoors", "heart", "longer"],
  "plank-table": ["low energy", "indoors", "no equipment", "floor", "strength"],
  "bear-walk": ["medium energy", "indoors", "floor", "brainy", "strength"],
  "bear-reach": ["medium energy", "indoors", "floor", "brainy", "strength"],
  "plank-reach": ["medium energy", "indoors", "floor", "brainy", "strength"],
  "wall-sit": ["high energy", "indoors", "no equipment", "steady", "strength"],
  "slow-burpee": ["high energy", "indoors", "no equipment", "brave", "strength"],
  "toe-touch": ["low energy", "indoors", "calm", "stretch", "floor"],
  "shoulder-rolls": ["low energy", "indoors", "calm", "quick", "stretch"],
  "rainbow-reach": ["medium energy", "indoors", "calm", "stretch", "standing"],
  "twist-reach": ["medium energy", "indoors", "calm", "stretch", "standing"],
  "cobra-soft": ["high energy", "indoors", "calm", "stretch", "floor"],
  "butterfly-fold": ["low energy", "indoors", "calm", "stretch", "floor"],
  "crunch-bug": ["low energy", "indoors", "floor", "core"],
  "dead-hold": ["low energy", "indoors", "floor", "core", "brave"],
  "dead-bug": ["medium energy", "indoors", "floor", "brainy", "core"],
  "bicycle-bugs": ["medium energy", "indoors", "floor", "brainy", "core"],
  "hollow-hold": ["high energy", "indoors", "floor", "core", "brave"],
  "side-plank": ["high energy", "indoors", "floor", "core", "brave"],
  "tree-stand": ["low energy", "indoors", "outdoors", "calm", "balance"],
  "bean-balance": ["low energy", "indoors", "calm", "balance"],
  "line-walk": ["medium energy", "indoors", "focus", "balance"],
  "balance-reach": ["medium energy", "indoors", "focus", "balance"],
  "flamingo-freeze": ["high energy", "outdoors", "balance", "brave"],
  "wobble-wall": ["high energy", "indoors", "balance", "brave"],
  "skip-hop": ["medium energy", "indoors", "playful", "brainy"],
  "mirror-moves": ["low energy", "indoors", "playful", "brainy"],
  "cross-clap": ["medium energy", "indoors", "music", "brainy", "playful"],
  "pattern-hop": ["medium energy", "indoors", "music", "brainy", "playful"],
  "pattern-step": ["high energy", "indoors", "focus", "brainy"],
  "rhythm-run": ["high energy", "indoors", "music", "brainy"],
  "star-jacks": ["medium energy", "indoors", "quick", "heart", "playful"],
  "fast-feet": ["high energy", "indoors", "quick", "heart"],
  "glow-run": ["high energy", "indoors", "outdoors", "heart", "music"],
  "heart-hop": ["high energy", "indoors", "playful", "heart"],
  "power-loop": ["high energy", "outdoors", "heart", "longer"],
  "sprint-burst": ["high energy", "outdoors", "heart", "quick"],
  "wall-climber": ["high energy", "indoors", "no equipment", "quick", "heart", "strength"],
  "jump-squats": ["high energy", "indoors", "outdoors", "no equipment", "legs", "heart"],
  "speed-feet": ["high energy", "indoors", "tiny space", "quick", "heart"],
  "nonstop-laps": ["high energy", "outdoors", "heart", "longer"],
  "plank-walkouts": ["high energy", "indoors", "floor", "brave", "strength", "core"],
  "deep-flow": ["low energy", "indoors", "calm", "stretch", "longer"],
  "hollow-rocks": ["high energy", "indoors", "floor", "brave", "core"],
  "airplane-balance": ["medium energy", "indoors", "outdoors", "balance", "legs"],
  "combo-chaos": ["high energy", "indoors", "music", "brainy", "heart"],
  "turbo-burpees": ["high energy", "indoors", "no equipment", "brave", "heart", "strength"],
};

for (const exercise of exercises) {
  exercise.tags = exerciseTags[exercise.id] ?? [];
  exercise.vibe = vibeLabels[exercise.category] ?? exercise.category;
}

const tagOptions = [
  "low energy",
  "medium energy",
  "high energy",
  "indoors",
  "outdoors",
  "no equipment",
  "tiny space",
  "quick",
  "longer",
  "calm",
  "playful",
  "focus",
  "music",
  "strength",
  "stretch",
  "core",
  "legs",
  "balance",
  "brainy",
  "heart",
  "brave",
];

const accessOptions = [
  { id: "all", label: "All activities" },
  { id: "unlocked", label: "Unlocked only" },
  { id: "locked", label: "Locked only" },
];

const arcadeGames = [
  {
    id: "alien-blast",
    name: "Alien Blast",
    icon: "👾",
    cost: 1,
    reward: 12,
    subtitle: "Zap aliens before they escape the screen.",
  },
  {
    id: "impostor-hunt",
    name: "Impostor Hunt",
    icon: "🕵️",
    cost: 1,
    reward: 14,
    subtitle: "Find the sneaky impostor in the crew.",
  },
  {
    id: "rocket-dash",
    name: "Rocket Dash",
    icon: "🚀",
    cost: 1,
    reward: 16,
    subtitle: "Switch lanes and dodge the meteors.",
  },
];

const arcadeShop = [
  {
    id: "laser-battery",
    gameId: "alien-blast",
    name: "Laser Battery",
    icon: "🔋",
    cost: 20,
    description: "Start Alien Blast with extra time and bonus zap power.",
  },
  {
    id: "radar-ping",
    gameId: "impostor-hunt",
    name: "Radar Ping",
    icon: "📡",
    cost: 18,
    description: "Reveal the impostor for a moment at the start of the round.",
  },
  {
    id: "shield-boots",
    gameId: "rocket-dash",
    name: "Shield Boots",
    icon: "🥾",
    cost: 22,
    description: "Give Rocket Dash one extra shield before the run starts.",
  },
];

const bubbleColors = ["#57c7a0", "#6ee7ff", "#ffb84d", "#ff81c2", "#8b7cff"];
const colorRounds = [
  { name: "Coral", color: "#ff6f61" },
  { name: "Ocean", color: "#4ec1d6" },
  { name: "Lime", color: "#57c7a0" },
  { name: "Sun", color: "#f5b700" },
];

const state = loadState();
const ui = {
  heroStats: document.getElementById("heroStats"),
  tagFilters: document.getElementById("tagFilters"),
  tagCount: document.getElementById("tagCount"),
  clearTags: document.getElementById("clearTags"),
  accessFilters: document.getElementById("accessFilters"),
  moveList: document.getElementById("moveList"),
  earnedGrid: document.getElementById("earnedGrid"),
  binderBadge: document.getElementById("binderBadge"),
  detailCard: document.getElementById("detailCard"),
  gameGrid: document.getElementById("gameGrid"),
  gameStage: document.getElementById("gameStage"),
  passChip: document.getElementById("passChip"),
  coinChip: document.getElementById("coinChip"),
  shopGrid: document.getElementById("shopGrid"),
};

let selectedTags = [];
let accessFilter = "all";
let activeExerciseId = exercises[0]?.id ?? null;
let openedExerciseId = null;
let activeGameId = arcadeGames[0].id;
let activeGameSession = null;
let activeGameTimer = null;

function loadState() {
  const fallback = {
    completed: [],
    coins: 0,
    passes: 0,
    gameWins: [],
    ownedBoosts: [],
    openedExerciseId: null,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      gameWins: Array.isArray(parsed.gameWins) ? parsed.gameWins : [],
      ownedBoosts: Array.isArray(parsed.ownedBoosts) ? parsed.ownedBoosts : [],
      openedExerciseId: typeof parsed.openedExerciseId === "string" ? parsed.openedExerciseId : null,
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getLevelIndex(level) {
  return ["Easy", "Medium", "Heavy", "Extreme"].indexOf(level);
}

function getMoveLabel(exercise) {
  return `${exercise.vibe} · ${exercise.level}`;
}

function getCategoryProgress(category) {
  const done = exercises.filter((exercise) => exercise.category === category && state.completed.includes(exercise.id));
  const highest = done.reduce((max, exercise) => Math.max(max, getLevelIndex(exercise.level)), -1);
  return { doneCount: done.length, highestLevel: highest };
}

function isUnlocked(exercise) {
  if (state.completed.includes(exercise.id)) return true;
  const progress = getCategoryProgress(exercise.category);
  if (exercise.level === "Easy") return true;
  if (exercise.level === "Medium") return progress.highestLevel >= 0;
  if (exercise.level === "Heavy") return progress.highestLevel >= 1;
  if (exercise.level === "Extreme") return progress.highestLevel >= 2;
  return false;
}

function getFilteredExercises() {
  const filtered = exercises.filter((exercise) => {
    const tagMatch = selectedTags.length ? selectedTags.every((tag) => exercise.tags.includes(tag)) : true;
    const accessMatch =
      accessFilter === "all"
        ? true
        : accessFilter === "unlocked"
          ? isUnlocked(exercise)
          : !state.completed.includes(exercise.id) && !isUnlocked(exercise);
    return tagMatch && accessMatch;
  });

  return filtered.sort((a, b) => {
    if (a.category === b.category) return getLevelIndex(a.level) - getLevelIndex(b.level);
    return a.category.localeCompare(b.category);
  });
}

function totalCompletionRate() {
  return Math.round((state.completed.length / exercises.length) * 100);
}

function renderHeroStats() {
  const available = exercises.filter((exercise) => isUnlocked(exercise)).length;
  const completed = state.completed.length;

  ui.heroStats.innerHTML = [
    { value: completed, label: "cards earned" },
    { value: state.passes, label: "play passes" },
    { value: state.coins, label: "bonus coins" },
    { value: `${available}/${exercises.length}`, label: "moves unlocked" },
  ]
    .map(
      (stat) => `
        <div class="stat-chip">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `,
    )
    .join("");

  ui.passChip.textContent = `${state.passes} pass${state.passes === 1 ? "" : "es"}`;
  ui.binderBadge.textContent = `${completed} earned`;
  if (ui.coinChip) {
    ui.coinChip.textContent = `${state.coins} coins`;
  }
  if (ui.tagCount) {
    ui.tagCount.textContent = selectedTags.length
      ? `${selectedTags.length} tag${selectedTags.length === 1 ? "" : "s"} on`
      : "No tags on";
  }
}

function renderFilters() {
  ui.accessFilters.innerHTML = accessOptions
    .map(
      (option) => `
        <button
          class="filter-btn access-filter ${accessFilter === option.id ? "active" : ""}"
          type="button"
          data-access="${option.id}"
        >
          ${option.label}
        </button>
      `,
    )
    .join("");

  ui.tagFilters.innerHTML = tagOptions
    .map(
      (tag) => `
        <button
          class="filter-btn tag-filter ${selectedTags.includes(tag) ? "active" : ""}"
          type="button"
          data-tag="${tag}"
        >
          ${tag}
        </button>
      `,
    )
    .join("");
}

function renderMoveList() {
  const cards = getFilteredExercises();
  const visibleIds = new Set(cards.map((exercise) => exercise.id));
  if (!visibleIds.has(activeExerciseId) && cards.length) activeExerciseId = cards[0].id;

  if (!cards.length) {
    ui.moveList.innerHTML = `
      <div class="empty-state">
        <h3>No matches yet</h3>
        <p>Try removing a tag or clear all tags to see more moves.</p>
      </div>
    `;
    return;
  }

  ui.moveList.innerHTML = cards
    .map((exercise) => {
      const completed = state.completed.includes(exercise.id);
      const unlocked = isUnlocked(exercise);
      const spotlightTags = exercise.tags.slice(0, 3);
      return `
        <article class="move-row ${completed ? "completed" : ""} ${!unlocked ? "locked" : ""}" data-id="${exercise.id}">
          <div class="move-row-main">
            <div class="move-icon" aria-hidden="true">${exercise.icon}</div>
            <div class="move-copy">
              <p class="move-meta">${getMoveLabel(exercise)}</p>
              <h3>${exercise.name}</h3>
              <p>${exercise.description}</p>
              <div class="card-tag-row">
                ${spotlightTags.map((tag) => `<span class="card-tag">${tag}</span>`).join("")}
              </div>
            </div>
          </div>
          <div class="move-row-side">
            <span class="level-pill level-${exercise.level.toLowerCase()}">${exercise.level}</span>
            <span class="reward-pill">${completed ? "Earned" : unlocked ? `${exercise.reward} coins + 1 pass` : "Locked"}</span>
            <button type="button" class="row-button" data-row-button="${exercise.id}" ${!unlocked && !completed ? "disabled" : ""}>
              ${completed ? "Review" : unlocked ? "Open task" : "Locked"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderEarnedBinder() {
  const completedExercises = exercises.filter((exercise) => state.completed.includes(exercise.id));

  if (!completedExercises.length) {
    ui.earnedGrid.innerHTML = `
      <div class="empty-state">
        <h3>No cards earned yet</h3>
        <p>Finish one move and the matching colorful binder card will appear here.</p>
      </div>
    `;
    return;
  }

  ui.earnedGrid.innerHTML = completedExercises
    .map(
      (exercise) => `
        <article class="earned-card" style="--card-color: ${exercise.color}" data-earned="${exercise.id}">
          <div class="earned-top">
            <div class="earned-icon">${exercise.icon}</div>
            <span class="earned-tag">${exercise.vibe}</span>
          </div>
          <h3>${exercise.name}</h3>
          <p>${exercise.level} card earned</p>
          <div class="card-tag-row">
            ${exercise.tags.slice(0, 2).map((tag) => `<span class="card-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDetail(exerciseId) {
  const exercise = exercises.find((item) => item.id === exerciseId) ?? exercises[0];
  if (!exercise) return;
  activeExerciseId = exercise.id;

  const completed = state.completed.includes(exercise.id);
  const unlocked = isUnlocked(exercise);
  const opened = state.openedExerciseId === exercise.id;
  const progress = getCategoryProgress(exercise.category);
  const nextUnlock =
    exercise.level === "Easy"
      ? "Finishing this move opens the medium version in the same move family."
      : exercise.level === "Medium"
        ? "Finishing this move opens the heavy version in the same move family."
        : exercise.level === "Heavy"
          ? "Finishing this move opens the extreme version in the same move family."
          : "This is the strongest card in this move family.";

  ui.detailCard.innerHTML = `
    <p class="section-kicker">Selected Move</p>
    <div class="detail-hero">
      <div class="detail-icon" style="--detail-color: ${exercise.color}">${exercise.icon}</div>
      <div>
        <h2>${exercise.name}</h2>
        <p>${getMoveLabel(exercise)}</p>
      </div>
    </div>
    <p>${exercise.description}</p>
    <div class="card-tag-row">
      ${exercise.tags.slice(0, 5).map((tag) => `<span class="card-tag">${tag}</span>`).join("")}
    </div>
    <div class="detail-grid">
      <div class="detail-item">
        <span class="label">Builds</span>
        <span>${exercise.build}</span>
      </div>
      <div class="detail-item">
        <span class="label">Reward</span>
        <span>${exercise.reward} coins + 1 pass</span>
      </div>
      <div class="detail-item">
        <span class="label">Family progress</span>
        <span>${progress.doneCount} complete</span>
      </div>
      <div class="detail-item">
        <span class="label">Status</span>
        <span>${completed ? "Completed" : unlocked ? "Ready" : "Locked"}</span>
      </div>
    </div>
    <div class="detail-item">
      <span class="label">How to move</span>
      <span>${exercise.steps.join(" ")}</span>
    </div>
    <p>${nextUnlock}</p>
    <p>${opened ? "The card is open. When you are done, press finish workout." : "Open the card first to reveal the finish button."}</p>
    <div class="detail-actions">
      ${
        completed
          ? `<button class="complete-button" type="button" id="completeButton" disabled>Already completed</button>`
          : opened
            ? `<button class="complete-button" type="button" id="completeButton">Finish workout</button>`
            : `<button class="complete-button" type="button" id="openCardButton" ${!unlocked ? "disabled" : ""}>Open card</button>`
      }
      <button class="ghost-button" type="button" id="focusButton">Back to library</button>
    </div>
  `;

  document.getElementById("openCardButton")?.addEventListener("click", () => {
    state.openedExerciseId = exercise.id;
    saveState();
    renderDetail(exercise.id);
    showToast("Card opened", "Now the finish workout button is ready.");
  });
  document.getElementById("completeButton")?.addEventListener("click", () => completeExercise(exercise.id));
  document.getElementById("focusButton")?.addEventListener("click", () => {
    document.getElementById("moveList").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function renderGames() {
  ui.gameGrid.innerHTML = arcadeGames
    .map((game) => {
      const unlocked = state.passes >= game.cost;
      const won = state.gameWins.includes(game.id);
      const boost = arcadeShop.find((item) => item.gameId === game.id);
      const ownedBoost = boost ? state.ownedBoosts.includes(boost.id) : false;
      return `
        <article class="game-card ${won ? "won" : ""}">
          <div class="game-icon">${game.icon}</div>
          <h3>${game.name}</h3>
          <p>${game.subtitle}</p>
          <div class="game-footer">
            <span>${game.cost} pass${game.cost === 1 ? "" : "es"}</span>
            <button type="button" class="game-button" data-game="${game.id}" ${unlocked ? "" : "disabled"}>
              ${unlocked ? "Play" : "Need pass"}
            </button>
          </div>
          ${boost ? `<div class="boost-chip ${ownedBoost ? "owned" : ""}">${ownedBoost ? "Boost owned" : "Boost available"}</div>` : ""}
        </article>
      `;
    })
    .join("");

  renderShop();
}

function renderShop() {
  if (!ui.shopGrid) return;
  ui.shopGrid.innerHTML = arcadeShop
    .map((item) => {
      const owned = state.ownedBoosts.includes(item.id);
      const affordable = state.coins >= item.cost;
      const targetGame = arcadeGames.find((game) => game.id === item.gameId);
      return `
        <article class="boost-card ${owned ? "owned" : ""}">
          <div class="boost-icon">${item.icon}</div>
          <div class="boost-copy">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${targetGame ? `Boosts ${targetGame.name}` : "Arcade boost"}</span>
          </div>
          <div class="boost-footer">
            <span>${item.cost} coins</span>
            <button type="button" class="boost-button" data-boost="${item.id}" ${owned || !affordable ? "disabled" : ""}>
              ${owned ? "Owned" : "Buy"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGameStage(gameId) {
  const game = arcadeGames.find((item) => item.id === gameId) ?? arcadeGames[0];
  if (!game) return;
  activeGameId = game.id;

  if (activeGameTimer) {
    clearInterval(activeGameTimer);
    activeGameTimer = null;
  }

  if (game.id === "alien-blast") {
    activeGameSession = {
      running: false,
      score: 0,
      timeLeft: 20,
      hitMultiplier: state.ownedBoosts.includes("laser-battery") ? 2 : 1,
      wave: [],
    };
    ui.gameStage.innerHTML = `
      <div class="game-stage-head">
        <div>
          <h3>Alien Blast</h3>
          <p>Tap the aliens before they escape the screen.</p>
        </div>
        <div class="game-metrics">
          <span id="alienScore">0</span>
          <span id="alienTimer">20s</span>
        </div>
      </div>
      <div class="alien-board" id="alienBoard"></div>
      <div class="game-actions">
        <button type="button" class="start-game" id="alienStart">Start Blast</button>
      </div>
      <p class="game-note" id="alienNote">Zap as many as you can.</p>
    `;
    document.getElementById("alienStart")?.addEventListener("click", startAlienBlast);
    renderAlienBoard();
    return;
  }

  if (game.id === "impostor-hunt") {
    activeGameSession = {
      running: false,
      score: 0,
      wins: 0,
      timeLeft: 18,
      round: 0,
      impostorIndex: 0,
      hintVisible: state.ownedBoosts.includes("radar-ping"),
    };
    ui.gameStage.innerHTML = `
      <div class="game-stage-head">
        <div>
          <h3>Impostor Hunt</h3>
          <p>Find the sneaky impostor hiding in the crew.</p>
        </div>
        <div class="game-metrics">
          <span id="impostorWins">0/5</span>
          <span id="impostorTimer">18s</span>
        </div>
      </div>
      <div class="impostor-board" id="impostorBoard"></div>
      <div class="game-actions">
        <button type="button" class="start-game" id="impostorStart">Start Hunt</button>
      </div>
      <p class="game-note" id="impostorNote">One crewmate is pretending. Find them fast.</p>
    `;
    document.getElementById("impostorStart")?.addEventListener("click", startImpostorHunt);
    renderImpostorBoard();
    return;
  }

  if (game.id === "rocket-dash") {
    activeGameSession = {
      running: false,
      score: 0,
      lives: 3 + (state.ownedBoosts.includes("shield-boots") ? 1 : 0),
      timeLeft: 18,
      playerLane: 1,
      meteorLane: 0,
      tick: 0,
    };
    ui.gameStage.innerHTML = `
      <div class="game-stage-head">
        <div>
          <h3>Rocket Dash</h3>
          <p>Move the rocket between lanes to dodge meteors.</p>
        </div>
        <div class="game-metrics">
          <span id="rocketScore">0</span>
          <span id="rocketLives">${activeGameSession.lives}</span>
        </div>
      </div>
      <div class="rocket-board" id="rocketBoard"></div>
      <div class="game-actions lane-actions">
        <button type="button" class="start-game" id="rocketStart">Launch Run</button>
        <button type="button" class="ghost-button lane-button" data-lane="0">Lane 1</button>
        <button type="button" class="ghost-button lane-button" data-lane="1">Lane 2</button>
        <button type="button" class="ghost-button lane-button" data-lane="2">Lane 3</button>
      </div>
      <p class="game-note" id="rocketNote">Choose a lane, then dodge the meteors.</p>
    `;
    document.getElementById("rocketStart")?.addEventListener("click", startRocketDash);
    renderRocketBoard();
    return;
  }
}

function renderAlienBoard() {
  const board = document.getElementById("alienBoard");
  if (!board) return;
  if (!activeGameSession.running) {
    board.innerHTML = `<div class="game-stage-empty">Press start to bring out the aliens.</div>`;
    return;
  }

  if (!Array.isArray(activeGameSession.wave) || !activeGameSession.wave.length) {
    activeGameSession.wave = makeAlienWave();
  }

  board.innerHTML = Array.from({ length: 9 }, (_, index) => {
    const alien = activeGameSession.wave.find((item) => item.slot === index);
    return `
      <button type="button" class="alien-tile ${alien ? "live" : ""}" data-slot="${index}">
        ${alien ? alien.icon : ""}
      </button>
    `;
  }).join("");

  board.querySelectorAll(".alien-tile.live").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeGameSession.running) return;
      activeGameSession.score += activeGameSession.hitMultiplier;
      activeGameSession.wave = makeAlienWave();
      updateAlienHud();
      renderAlienBoard();
      if (activeGameSession.score >= 12) {
        endAlienBlast(true);
      }
    });
  });
}

function makeAlienWave() {
  const slots = new Set();
  while (slots.size < 3) {
    slots.add(Math.floor(Math.random() * 9));
  }
  const alienIcons = ["👾", "🛸", "👽"];
  return Array.from(slots).map((slot, index) => ({
    slot,
    icon: alienIcons[index % alienIcons.length],
  }));
}

function startAlienBlast() {
  if (state.passes < 1 || activeGameSession.running) return;
  state.passes -= 1;
  activeGameSession.running = true;
  activeGameSession.score = 0;
  activeGameSession.timeLeft = 20 + (activeGameSession.hitMultiplier > 1 ? 5 : 0);
  activeGameSession.wave = makeAlienWave();
  saveState();
  renderHeroStats();
  renderGames();
  renderAlienBoard();

  activeGameTimer = window.setInterval(() => {
    activeGameSession.timeLeft -= 1;
    activeGameSession.wave = makeAlienWave();
    renderAlienBoard();
    updateAlienHud();
    if (activeGameSession.timeLeft <= 0) {
      endAlienBlast();
    }
  }, 1000);
}

function updateAlienHud() {
  const score = document.getElementById("alienScore");
  const timer = document.getElementById("alienTimer");
  const note = document.getElementById("alienNote");
  if (score) score.textContent = `${activeGameSession.score}`;
  if (timer) timer.textContent = `${Math.max(activeGameSession.timeLeft, 0)}s`;
  if (note) {
    note.textContent = activeGameSession.running ? "Zap the aliens fast!" : "Press start to bring out the aliens.";
  }
}

function endAlienBlast(won = false) {
  if (activeGameTimer) {
    clearInterval(activeGameTimer);
    activeGameTimer = null;
  }
  activeGameSession.running = false;
  renderAlienBoard();
  updateAlienHud();

  const bonus = Math.max(0, activeGameSession.score * 2 + (won ? 12 : 0));
  document.getElementById("alienNote").textContent = won
    ? `Blast off! You earned ${bonus} coins.`
    : `Round over. You earned ${bonus} coins from your hits.`;

  finishGame("alien-blast", bonus);
}

function renderImpostorBoard() {
  const board = document.getElementById("impostorBoard");
  if (!board) return;
  if (!activeGameSession.running) {
    board.innerHTML = `<div class="game-stage-empty">Press start to see the crew.</div>`;
    return;
  }

  const crew = [
    { name: "Nova", icon: "🧑‍🚀" },
    { name: "Dash", icon: "🧑‍🎤" },
    { name: "Pip", icon: "🧑‍🌾" },
    { name: "Luna", icon: "🧑‍🍳" },
    { name: "Rex", icon: "🧑‍🔧" },
    { name: "Zee", icon: "🧑‍🏫" },
  ];

  if (!activeGameSession.impostorIndex && activeGameSession.impostorIndex !== 0) {
    activeGameSession.impostorIndex = Math.floor(Math.random() * crew.length);
  }

  board.innerHTML = crew
    .map((member, index) => {
      const impostor = index === activeGameSession.impostorIndex;
      const reveal = activeGameSession.hintVisible && impostor;
      return `
        <button type="button" class="crew-card ${reveal ? "reveal" : ""}" data-member="${index}">
          <span class="crew-icon">${impostor ? "🕶️" : member.icon}</span>
          <strong>${member.name}</strong>
          <span>${impostor && reveal ? "Suspicious" : "Crew"}</span>
        </button>
      `;
    })
    .join("");

  board.querySelectorAll(".crew-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeGameSession.running) return;
      const index = Number(button.dataset.member);
      const correct = index === activeGameSession.impostorIndex;
      if (correct) {
        activeGameSession.score += 1;
        activeGameSession.wins += 1;
        activeGameSession.round += 1;
        activeGameSession.impostorIndex = Math.floor(Math.random() * crew.length);
        updateImpostorHud();
        if (activeGameSession.wins >= 5) {
          endImpostorHunt(true);
          return;
        }
        renderImpostorBoard();
      } else {
        button.classList.add("wrong");
        window.setTimeout(() => button.classList.remove("wrong"), 220);
      }
    });
  });

  if (activeGameSession.hintVisible) {
    window.setTimeout(() => {
      if (activeGameSession.running) {
        activeGameSession.hintVisible = false;
        renderImpostorBoard();
      }
    }, 1200);
  }
}

function startImpostorHunt() {
  if (state.passes < 1 || activeGameSession.running) return;
  state.passes -= 1;
  activeGameSession.running = true;
  activeGameSession.score = 0;
  activeGameSession.wins = 0;
  activeGameSession.timeLeft = 18;
  activeGameSession.impostorIndex = Math.floor(Math.random() * 6);
  activeGameSession.hintVisible = state.ownedBoosts.includes("radar-ping");
  saveState();
  renderHeroStats();
  renderGames();
  renderImpostorBoard();

  activeGameTimer = window.setInterval(() => {
    activeGameSession.timeLeft -= 1;
    updateImpostorHud();
    if (activeGameSession.timeLeft <= 0) {
      endImpostorHunt();
    }
  }, 1000);
}

function updateImpostorHud() {
  const wins = document.getElementById("impostorWins");
  const timer = document.getElementById("impostorTimer");
  const note = document.getElementById("impostorNote");
  if (wins) wins.textContent = `${activeGameSession.wins}/5`;
  if (timer) timer.textContent = `${Math.max(activeGameSession.timeLeft, 0)}s`;
  if (note) {
    note.textContent = activeGameSession.running
      ? activeGameSession.hintVisible
        ? "Radar ping on! One crew member looks suspicious."
        : "Spot the impostor and keep the crew safe."
      : "Press start to see the crew.";
  }
}

function endImpostorHunt(won = false) {
  if (activeGameTimer) {
    clearInterval(activeGameTimer);
    activeGameTimer = null;
  }
  activeGameSession.running = false;
  renderImpostorBoard();
  updateImpostorHud();

  const bonus = Math.max(0, activeGameSession.wins * 3 + (won ? 10 : 0));
  document.getElementById("impostorNote").textContent = won
    ? `Crew saved! You earned ${bonus} coins.`
    : `Round over. You earned ${bonus} coins from your wins.`;

  finishGame("impostor-hunt", bonus);
}

function renderRocketBoard() {
  const board = document.getElementById("rocketBoard");
  if (!board) return;
  if (!activeGameSession.running) {
    board.innerHTML = `<div class="game-stage-empty">Press launch to start the dash.</div>`;
    return;
  }

  board.innerHTML = Array.from({ length: 3 }, (_, lane) => {
    const player = activeGameSession.playerLane === lane;
    const meteor = activeGameSession.meteorLane === lane;
    return `
      <div class="rocket-lane ${player ? "player" : ""} ${meteor ? "meteor" : ""}" data-lane="${lane}">
        <span class="lane-label">Lane ${lane + 1}</span>
        <div class="lane-space">${meteor ? "☄️" : ""}</div>
        <div class="lane-space">${player ? "🚀" : ""}</div>
      </div>
    `;
  }).join("");
}

function startRocketDash() {
  if (state.passes < 1 || activeGameSession.running) return;
  state.passes -= 1;
  activeGameSession.running = true;
  activeGameSession.score = 0;
  activeGameSession.lives = 3 + (state.ownedBoosts.includes("shield-boots") ? 1 : 0);
  activeGameSession.timeLeft = 18;
  activeGameSession.playerLane = 1;
  activeGameSession.meteorLane = Math.floor(Math.random() * 3);
  saveState();
  renderHeroStats();
  renderGames();
  renderRocketBoard();

  document.querySelectorAll(".lane-button").forEach((button) => {
    button.onclick = () => {
      if (!activeGameSession.running) return;
      const lane = Number(button.dataset.lane);
      if (Number.isNaN(lane)) return;
      activeGameSession.playerLane = lane;
      renderRocketBoard();
      updateRocketHud();
    };
  });

  activeGameTimer = window.setInterval(() => {
    activeGameSession.timeLeft -= 1;
    const hit = activeGameSession.playerLane === activeGameSession.meteorLane;
    if (hit) {
      activeGameSession.lives -= 1;
    } else {
      activeGameSession.score += 1;
    }
    activeGameSession.meteorLane = Math.floor(Math.random() * 3);
    renderRocketBoard();
    updateRocketHud();
    if (activeGameSession.lives <= 0 || activeGameSession.timeLeft <= 0) {
      endRocketDash(activeGameSession.lives > 0);
    }
  }, 1200);
}

function updateRocketHud() {
  const score = document.getElementById("rocketScore");
  const lives = document.getElementById("rocketLives");
  const note = document.getElementById("rocketNote");
  if (score) score.textContent = `${activeGameSession.score}`;
  if (lives) lives.textContent = `${activeGameSession.lives}`;
  if (note) {
    note.textContent = activeGameSession.running
      ? "Move to a safe lane before the meteor lands."
      : "Choose a lane, then dodge the meteors.";
  }
}

function endRocketDash(won = false) {
  if (activeGameTimer) {
    clearInterval(activeGameTimer);
    activeGameTimer = null;
  }
  activeGameSession.running = false;
  renderRocketBoard();
  updateRocketHud();

  const bonus = Math.max(0, activeGameSession.score * 2 + (won ? 8 : 0));
  document.getElementById("rocketNote").textContent = won
    ? `Nice flying! You earned ${bonus} coins.`
    : `Run over. You earned ${bonus} coins from your dodges.`;

  finishGame("rocket-dash", bonus);
}

function purchaseBoost(boostId) {
  const boost = arcadeShop.find((item) => item.id === boostId);
  if (!boost || state.ownedBoosts.includes(boostId) || state.coins < boost.cost) return;
  state.coins -= boost.cost;
  state.ownedBoosts.push(boostId);
  saveState();
  renderAll();
  const game = arcadeGames.find((item) => item.id === boost.gameId);
  showToast("Boost bought", `${boost.name} is ready for ${game?.name ?? "the arcade"}.`);
}

function finishGame(gameId, bonusCoins) {
  if (!state.gameWins.includes(gameId)) {
    state.gameWins.push(gameId);
  }
  state.coins += bonusCoins;
  saveState();
  renderAll();
  const game = arcadeGames.find((item) => item.id === gameId);
  showToast("Arcade win", `${game?.name ?? "Game"} gave you ${bonusCoins} coins.`);
}

function completeExercise(exerciseId) {
  const exercise = exercises.find((item) => item.id === exerciseId);
  if (!exercise || state.completed.includes(exerciseId) || !isUnlocked(exercise)) return;
  if (state.openedExerciseId !== exerciseId) return;

  state.completed.push(exerciseId);
  state.coins += exercise.reward;
  state.passes += 1;
  state.openedExerciseId = null;
  saveState();
  renderAll();

  const progress = getCategoryProgress(exercise.category);
  const unlockMessage =
    progress.highestLevel === 0
      ? "The medium move in this family just opened."
      : progress.highestLevel === 1
        ? "The heavy move in this family just opened."
        : progress.highestLevel === 2
          ? "The extreme move in this family just opened."
          : "You finished the strongest card in this family.";

  showToast("Card earned", `+${exercise.reward} coins and 1 play pass. ${unlockMessage}`);
}

function renderAll() {
  renderFilters();
  renderMoveList();
  renderEarnedBinder();
  renderHeroStats();
  renderGames();
  renderDetail(activeExerciseId);
  renderGameStage(activeGameId);
  bindInteractions();
}

function bindInteractions() {
  document.querySelectorAll(".access-filter").forEach((button) => {
    button.addEventListener("click", () => {
      accessFilter = button.dataset.access ?? "all";
      renderAll();
    });
  });

  document.querySelectorAll(".tag-filter").forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.dataset.tag;
      if (!tag) return;
      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter((item) => item !== tag);
      } else {
        selectedTags = [...selectedTags, tag];
      }
      renderAll();
    });
  });

  if (ui.clearTags) {
    ui.clearTags.onclick = () => {
      if (!selectedTags.length) return;
      selectedTags = [];
      renderAll();
    };
  }

  document.querySelectorAll(".move-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      const id = row.dataset.id;
      if (!id) return;
      const target = event.target;
      if (target instanceof HTMLButtonElement && target.dataset.rowButton === id) {
        const exercise = exercises.find((item) => item.id === id);
        if (!exercise) return;
        if (!isUnlocked(exercise)) {
          showToast("Locked", "Finish the easier version in this family first.");
          return;
        }
        state.openedExerciseId = id;
        saveState();
        renderDetail(id);
        return;
      }
      renderDetail(id);
    });
  });

  document.querySelectorAll(".game-button").forEach((button) => {
    button.addEventListener("click", () => {
      const gameId = button.dataset.game;
      if (!gameId) return;
      const game = arcadeGames.find((item) => item.id === gameId);
      if (!game) return;
      if (state.passes < game.cost) {
        showToast("Need a pass", "Complete one more move to unlock this game.");
        return;
      }
      activeGameId = gameId;
      renderGameStage(gameId);
    });
  });

  document.querySelectorAll(".boost-button").forEach((button) => {
    button.addEventListener("click", () => {
      const boostId = button.dataset.boost;
      if (!boostId) return;
      purchaseBoost(boostId);
    });
  });
}

function showToast(title, message) {
  const stack = document.querySelector(".toast-stack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
  stack.appendChild(toast);

  window.setTimeout(() => {
    toast.classList.add("fade");
  }, 2500);

  window.setTimeout(() => {
    toast.remove();
  }, 3100);
}

function init() {
  renderAll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
