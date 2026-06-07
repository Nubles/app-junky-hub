window.APP_JUNKY_OSRS_MODES = [
  {
    name: "Relic Debt",
    category: "Consequence",
    summary: "Every major unlock gives the account power now, but creates a debt that must be repaid before the next upgrade.",
    coreRule: "Boss kills, gear upgrades, region access, and quest rewards each create a skilling, item, or combat debt that blocks the next major unlock until paid.",
    difficulty: "Medium prototype",
    bookkeeping: "High",
    appIdeas: ["debt ledger", "unlock cost generator", "repayment dashboard"],
    accent: "#8a5a24"
  },
  {
    name: "Contract Iron",
    category: "Mission",
    summary: "The account only progresses through generated contracts that define the goal, restrictions, and reward.",
    coreRule: "A contract must be active at all times, and new content is only unlocked through completed contracts or earned contract rewards.",
    difficulty: "Strong prototype",
    bookkeeping: "Medium",
    appIdeas: ["contract generator", "reward table builder", "streak tracker"],
    accent: "#25637a"
  },
  {
    name: "Heatmap Locked",
    category: "World Shape",
    summary: "The map opens based on where the account spends effort, turning activity density into unlock pressure.",
    coreRule: "Tiles, chunks, or regions gain heat through repeated actions, and only high-heat areas can expand into nearby content.",
    difficulty: "Ambitious prototype",
    bookkeeping: "High",
    appIdeas: ["activity heatmap", "expansion simulator", "route pressure planner"],
    accent: "#b85c38"
  },
  {
    name: "Skill Tithe",
    category: "Economy",
    summary: "Combat progression is taxed by skilling tribute, forcing every power spike to be earned outside combat first.",
    coreRule: "Before using a new combat tier, the account must pay a matching tribute through skilling levels, resources, or crafted items.",
    difficulty: "Medium prototype",
    bookkeeping: "Medium",
    appIdeas: ["tribute calculator", "gear gate checklist", "skill balance board"],
    accent: "#2f6f4e"
  },
  {
    name: "Rotating Kingdom",
    category: "Timebox",
    summary: "The available kingdom rotates on a schedule, making planning and stockpiling more important than permanent locks.",
    coreRule: "Only one region group is active during each rotation, and anything outside the current kingdom is unavailable until it returns.",
    difficulty: "Light prototype",
    bookkeeping: "Low",
    appIdeas: ["rotation calendar", "region prep list", "next-window planner"],
    accent: "#5b6f2f"
  },
  {
    name: "Oathbound Account",
    category: "Ruleset",
    summary: "The account chooses vows that grant strong advantages but permanently bind the playthrough to strange limits.",
    coreRule: "Each oath adds one benefit and one lasting restriction, and breaking an oath forces a penalty, reset, or sacrifice.",
    difficulty: "Strong prototype",
    bookkeeping: "Medium",
    appIdeas: ["oath builder", "penalty table", "ruleset share card"],
    accent: "#7a4f9a"
  },
  {
    name: "Favorbound",
    category: "Faction",
    summary: "Progress comes from earning loyalty with in-world factions rather than freely choosing the next account goal.",
    coreRule: "Pick or roll a faction, then only use items, quests, regions, bosses, and skills that fit that faction until a new alliance is earned.",
    difficulty: "Strong prototype",
    bookkeeping: "Medium",
    appIdeas: ["faction rule builder", "alliance unlock map", "allowed-content list"],
    accent: "#6f5b2f"
  },
  {
    name: "Routebound",
    category: "Journey",
    summary: "The account can only act along approved travel routes, making movement, checkpoints, and temporary permissions the heart of progression.",
    coreRule: "Pick or roll a route between two OSRS locations. Until that route is completed, training, gathering, questing, and combat are only legal at stops connected to the active route.",
    difficulty: "Strong prototype",
    bookkeeping: "Medium",
    appIdeas: ["route generator", "checkpoint tracker", "travel permit board"],
    accent: "#3f6f7a"
  },
  {
    name: "Writbound",
    category: "Mandate",
    summary: "The account is governed by legal writs that define what actions are lawful until the ruling is satisfied or appealed.",
    coreRule: "Keep one active writ at all times. Each writ defines the legal region, activity type, forbidden action, and completion clause; anything outside those clauses is illegal until the writ is completed or appealed.",
    difficulty: "Strong prototype",
    bookkeeping: "Medium",
    appIdeas: ["writ generator", "clause tracker", "court seal archive"],
    accent: "#7c5f32"
  }
];
