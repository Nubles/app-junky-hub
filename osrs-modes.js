window.APP_JUNKY_OSRS_MODES = [
  {
    name: "Chunkman",
    category: "Area",
    summary: "Unlock the world one map chunk at a time, with progress gated by goals inside the current chunk.",
    coreRule: "You can only use content inside unlocked chunks until the mode rules grant the next chunk.",
    difficulty: "Demanding",
    bookkeeping: "High",
    appIdeas: ["chunk map tracker", "unlock goal planner", "route notes"],
    accent: "#8a5a24"
  },
  {
    name: "Tileman",
    category: "Tile",
    summary: "Earn the right to step on new tiles through XP, tasks, or another chosen currency.",
    coreRule: "Every newly walked tile must be unlocked before use.",
    difficulty: "Extreme",
    bookkeeping: "High",
    appIdeas: ["tile counter", "path planner", "XP-to-tile calculator"],
    accent: "#2f6f4e"
  },
  {
    name: "Region-Locked",
    category: "Region",
    summary: "Restrict the account to one region, or move through regions only after defined milestones.",
    coreRule: "Training, quests, items, and bosses must stay inside the allowed region set.",
    difficulty: "Moderate",
    bookkeeping: "Medium",
    appIdeas: ["region rulesheet", "quest availability board", "unlock roadmap"],
    accent: "#5b6f2f"
  },
  {
    name: "Collection Log Locked",
    category: "Progression",
    summary: "Use collection log slots or item categories as gates for account progression.",
    coreRule: "New activities unlock only after the account earns required collection log progress.",
    difficulty: "Demanding",
    bookkeeping: "Medium",
    appIdeas: ["log goal tracker", "drop table planner", "progression ladder"],
    accent: "#7a4f9a"
  },
  {
    name: "Bronzeman",
    category: "Item",
    summary: "Play mostly self-sufficiently while unlocking controlled access to traded items.",
    coreRule: "An item must be personally obtained or otherwise unlocked before trade use is allowed.",
    difficulty: "Starter",
    bookkeeping: "Low",
    appIdeas: ["item unlock ledger", "trade permission checklist", "gear milestone board"],
    accent: "#a5642a"
  },
  {
    name: "Random Task / Wheelman",
    category: "Task",
    summary: "Let randomized tasks, wheels, or contracts decide what the account works on next.",
    coreRule: "Progress follows the assigned task until completion, reroll, or a rules-approved skip.",
    difficulty: "Moderate",
    bookkeeping: "Medium",
    appIdeas: ["task roller", "skip tracker", "streak board"],
    accent: "#25637a"
  }
];
