(function () {
  var projects = Array.isArray(window.APP_JUNKY_PROJECTS) ? window.APP_JUNKY_PROJECTS.slice() : [];
  var osrsModes = Array.isArray(window.APP_JUNKY_OSRS_MODES)
    ? window.APP_JUNKY_OSRS_MODES.filter(function (mode) {
      return mode && typeof mode === "object" && !Array.isArray(mode);
    })
    : [];
  var grid = document.getElementById("project-grid");
  var totalStat = document.getElementById("stat-total");
  var liveStat = document.getElementById("stat-live");
  var needsRepoStat = document.getElementById("stat-needs-repo");
  var gamesStat = document.getElementById("stat-games");
  var toolsStat = document.getElementById("stat-tools");
  var latestProject = document.getElementById("latest-project");
  var catalogCount = document.getElementById("catalog-count");
  var osrsModeGrid = document.getElementById("osrs-mode-grid");
  var osrsModeCount = document.getElementById("osrs-mode-count");
  var osrsFamilyCount = document.getElementById("osrs-family-count");
  var osrsAppHookCount = document.getElementById("osrs-app-hook-count");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));

  projects.sort(function (a, b) {
    return String(b.date || "").localeCompare(String(a.date || "")) || String(a.title || "").localeCompare(String(b.title || ""));
  });

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getInitials(title) {
    return String(title || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (word) {
        return word.charAt(0).toUpperCase();
      })
      .join("");
  }

  function formatType(type) {
    return String(type || "").charAt(0).toUpperCase() + String(type || "").slice(1);
  }

  function hasLiveProject(project) {
    return Boolean(project.liveUrl);
  }

  function needsRepo(project) {
    return !project.repoUrl || !project.liveUrl;
  }

  function createLink(href, label, className) {
    if (!href) return "";
    return '<a class="' + className + '" href="' + escapeHtml(href) + '">' + escapeHtml(label) + "</a>";
  }

  function createDisabledLink(label) {
    return '<span class="card-link disabled">' + escapeHtml(label) + "</span>";
  }

  function createCard(project) {
    var tags = Array.isArray(project.tags) ? project.tags : [];
    var live = hasLiveProject(project);
    var missingRepo = needsRepo(project);
    var links = [
      createLink(project.liveUrl, "Launch", "card-link primary"),
      createLink(project.repoUrl, "Source", "card-link"),
      createLink(project.localPath, "Local", "card-link"),
      missingRepo ? createDisabledLink("Needs repo") : ""
    ].filter(Boolean);

    return [
      '<article class="project-card">',
      '  <div class="project-visual" style="--project-accent: ' + escapeHtml(project.accent || "#0f766e") + '">',
      '    <span>' + escapeHtml(getInitials(project.title)) + "</span>",
      "  </div>",
      '  <div class="project-body">',
      '    <div class="project-meta">',
      '      <span class="badge">' + escapeHtml(formatType(project.type)) + "</span>",
      '      <span class="badge status">' + escapeHtml(project.status || "Prototype") + "</span>",
      live ? '      <span class="badge live">Live</span>' : '      <span class="badge needs-repo">Needs repo</span>',
      "    </div>",
      '    <h3>' + escapeHtml(project.title || "Untitled project") + "</h3>",
      '    <time datetime="' + escapeHtml(project.date || "") + '">' + escapeHtml(project.date || "") + "</time>",
      '    <p>' + escapeHtml(project.summary || "") + "</p>",
      '    <div class="tag-list" aria-label="Project tags">',
      tags.map(function (tag) {
        return "<span>" + escapeHtml(tag) + "</span>";
      }).join(""),
      "    </div>",
      links.length ? '    <div class="card-links">' + links.join("") + "</div>" : "",
      "  </div>",
      "</article>"
    ].join("");
  }

  function createModeCard(mode) {
    var appIdeas = Array.isArray(mode.appIdeas) ? mode.appIdeas : [];

    return [
      '<article class="osrs-mode-card" style="--mode-accent: ' + escapeHtml(mode.accent || "#8a5a24") + '">',
      '  <div class="mode-card-topline">',
      '    <span class="mode-category">' + escapeHtml(mode.category || "Mode") + "</span>",
      '    <span class="mode-bookkeeping">' + escapeHtml(mode.bookkeeping || "Medium") + " tracking</span>",
      "  </div>",
      '  <h3>' + escapeHtml(mode.name || "Unnamed mode") + "</h3>",
      '  <p class="mode-summary">' + escapeHtml(mode.summary || "") + "</p>",
      '  <div class="mode-rule">',
      "    <strong>Core rule</strong>",
      "    <p>" + escapeHtml(mode.coreRule || "") + "</p>",
      "  </div>",
      '  <div class="mode-footer">',
      '    <span class="mode-difficulty">' + escapeHtml(mode.difficulty || "Moderate") + "</span>",
      '    <div class="mode-app-ideas" aria-label="Future app ideas">',
      appIdeas.map(function (idea) {
        return "<span>" + escapeHtml(idea) + "</span>";
      }).join(""),
      "    </div>",
      "  </div>",
      "</article>"
    ].join("");
  }

  function renderOsrsModes() {
    if (!osrsModeGrid) return;

    var families = osrsModes.reduce(function (list, mode) {
      if (mode.category && list.indexOf(mode.category) === -1) list.push(mode.category);
      return list;
    }, []);
    var appHookCount = osrsModes.reduce(function (count, mode) {
      return count + (Array.isArray(mode.appIdeas) ? mode.appIdeas.length : 0);
    }, 0);

    if (osrsModeCount) osrsModeCount.textContent = osrsModes.length;
    if (osrsFamilyCount) osrsFamilyCount.textContent = families.length;
    if (osrsAppHookCount) osrsAppHookCount.textContent = appHookCount;

    osrsModeGrid.innerHTML = osrsModes.length
      ? osrsModes.map(createModeCard).join("")
      : '<p class="empty-state">No OSRS restriction modes have been added yet.</p>';
  }

  function updateStats() {
    totalStat.textContent = projects.length;
    liveStat.textContent = projects.filter(hasLiveProject).length;
    needsRepoStat.textContent = projects.filter(needsRepo).length;
    gamesStat.textContent = projects.filter(function (project) {
      return project.type === "game";
    }).length;
    toolsStat.textContent = projects.filter(function (project) {
      return project.type === "tool";
    }).length;

    var latest = projects[0];
    latestProject.textContent = latest
      ? "Latest launch: " + latest.title + " (" + formatType(latest.type) + ") - " + latest.summary
      : "No launches yet. The factory is ready for its first project.";
  }

  function matchesFilter(project, filter) {
    if (filter === "all") return true;
    if (filter === "live") return hasLiveProject(project);
    if (filter === "needs-repo") return needsRepo(project);
    return project.type === filter || project.status === filter;
  }

  function filterLabel(filter) {
    var labels = {
      all: "all projects",
      game: "games",
      tool: "tools",
      live: "live projects",
      "needs-repo": "projects needing repos"
    };
    return labels[filter] || filter;
  }

  function render(filter) {
    var selectedFilter = filter || "all";
    var visibleProjects = projects.filter(function (project) {
      return matchesFilter(project, selectedFilter);
    });

    catalogCount.textContent = "Showing " + visibleProjects.length + " of " + projects.length + " " + filterLabel(selectedFilter) + ".";
    grid.innerHTML = visibleProjects.length
      ? visibleProjects.map(createCard).join("")
      : '<p class="empty-state">No projects match this filter yet.</p>';
  }

  function setActiveFilter(filter) {
    filterButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.filter === filter);
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.dataset.filter;
      setActiveFilter(filter);
      render(filter);
    });
  });

  renderOsrsModes();
  updateStats();
  render("all");
})();
