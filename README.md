# App Junky Hub

This folder contains the static catalog hub for App Junky projects. It is a plain HTML, CSS, and JavaScript page that can be opened locally and updated by editing `projects.js`.

Add new projects to `window.APP_JUNKY_PROJECTS` with this shape:

```js
{
  title: "Focus Forge",
  date: "2026-06-04",
  type: "tool",
  status: "Prototype",
  summary: "A focused work-session tool with a timer, task list, and simple session score.",
  tags: ["productivity", "timer", "daily tool"],
  localPath: "../projects/2026-06-04-focus-forge/index.html",
  repoUrl: "",
  liveUrl: "",
  accent: "#0f766e"
}
```

Use `type` values such as `game` or `tool`, and use `status` values such as `Prototype`, `Polish Candidate`, or `Release Ready` so the hub filters continue to work.

## OSRS Restriction Modes

The hub has a dedicated OSRS restriction-mode subsection. Add or edit mode cards in `osrs-modes.js` using this shape:

```js
{
  name: "Chunkman",
  category: "Area",
  summary: "Unlock the world one map chunk at a time.",
  coreRule: "Use only content inside unlocked chunks until the next chunk is earned.",
  difficulty: "Demanding",
  bookkeeping: "High",
  appIdeas: ["chunk map tracker", "unlock goal planner"],
  accent: "#8a5a24"
}
```

Keep mode cards focused on playthrough ideas. Build real trackers, planners, and randomizers as separate App Junky prototypes.
