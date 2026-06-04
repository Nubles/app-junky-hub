(function () {
  var projects = Array.isArray(window.APP_JUNKY_PROJECTS) ? window.APP_JUNKY_PROJECTS : [];
  var grid = document.getElementById("project-grid");
  var totalStat = document.getElementById("stat-total");
  var gamesStat = document.getElementById("stat-games");
  var toolsStat = document.getElementById("stat-tools");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));

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

  function createLink(href, label, className) {
    if (!href) {
      return "";
    }

    return '<a class="' + className + '" href="' + href + '">' + label + "</a>";
  }

  function createCard(project) {
    var tags = Array.isArray(project.tags) ? project.tags : [];
    var links = [
      createLink(project.localPath, "Open local", "card-link primary"),
      createLink(project.liveUrl, "Live", "card-link"),
      createLink(project.repoUrl, "Repo", "card-link")
    ].filter(Boolean);

    return [
      '<article class="project-card">',
      '  <div class="project-visual" style="--project-accent: ' + (project.accent || "#0f766e") + '">',
      '    <span>' + getInitials(project.title) + "</span>",
      "  </div>",
      '  <div class="project-body">',
      '    <div class="project-meta">',
      '      <span>' + formatType(project.type) + "</span>",
      '      <span>' + (project.status || "") + "</span>",
      "    </div>",
      '    <h2>' + (project.title || "Untitled project") + "</h2>",
      '    <time datetime="' + (project.date || "") + '">' + (project.date || "") + "</time>",
      '    <p>' + (project.summary || "") + "</p>",
      '    <div class="tag-list" aria-label="Project tags">',
      tags.map(function (tag) {
        return "<span>" + tag + "</span>";
      }).join(""),
      "    </div>",
      links.length ? '    <div class="card-links">' + links.join("") + "</div>" : "",
      "  </div>",
      "</article>"
    ].join("");
  }

  function updateStats() {
    totalStat.textContent = projects.length;
    gamesStat.textContent = projects.filter(function (project) {
      return project.type === "game";
    }).length;
    toolsStat.textContent = projects.filter(function (project) {
      return project.type === "tool";
    }).length;
  }

  function matchesFilter(project, filter) {
    return filter === "all" || project.type === filter || project.status === filter;
  }

  function render(filter) {
    var selectedFilter = filter || "all";
    var visibleProjects = projects.filter(function (project) {
      return matchesFilter(project, selectedFilter);
    });

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

  updateStats();
  render("all");
})();
