document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const checks = [...document.querySelectorAll("input[data-check]")];
const progress = document.querySelector("[data-progress]");
const progressLabel = document.querySelector("[data-progress-label]");

function updateProgress() {
  if (!checks.length) return;
  const key = "mgh900-checklist";
  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  checks.forEach((check) => { check.checked = Boolean(saved[check.dataset.check]); });
  const completed = checks.filter((check) => check.checked).length;
  const percent = Math.round((completed / checks.length) * 100);
  if (progress) progress.style.width = percent + "%";
  if (progressLabel) progressLabel.textContent = completed + " of " + checks.length + " complete";
  localStorage.setItem(key, JSON.stringify(Object.fromEntries(checks.map((check) => [check.dataset.check, check.checked]))));
}
checks.forEach((check) => check.addEventListener("change", updateProgress));
updateProgress();
