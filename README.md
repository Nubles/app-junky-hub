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
