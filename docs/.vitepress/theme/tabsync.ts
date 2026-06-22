import { nextTick } from "vue";

const STORAGE_KEY = "repowiki-tab-prefs";
let isSyncing = false;
const processedLabels = new WeakSet<HTMLLabelElement>();

function getPrefs(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function savePref(title: string) {
  const prefs = getPrefs().filter(p => p !== title);
  prefs.push(title);
  
  if (prefs.length > 20) prefs.shift();
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

function syncTabs(targetTitle: string) {
  isSyncing = true;
  
  const labels = document.querySelectorAll<HTMLLabelElement>(".vp-code-group .tabs label[data-title]");
  for (const label of labels) {
    if (label.dataset.title === targetTitle) label.click();
  }
  
  isSyncing = false;
}

function applySavedPrefs() {
  const prefs = getPrefs();
  if (!prefs.length) return;

  isSyncing = true;
  const groups = document.querySelectorAll(".vp-code-group");
  
  for (const group of groups) {
    const labels = group.querySelectorAll<HTMLLabelElement>(".tabs label[data-title]");
    
    let bestLabel: HTMLLabelElement | undefined;
    let highestRank = -1;

    for (const label of labels) {
      const title = label.dataset.title;
      if (!title) continue;
      
      const rank = prefs.indexOf(title);
      if (rank > highestRank) {
        highestRank = rank;
        bestLabel = label;
      }
    }

    bestLabel?.click();
  }
  
  isSyncing = false;
}

export async function initTabSync() {
  await nextTick();

  requestAnimationFrame(applySavedPrefs);

  const labels = document.querySelectorAll<HTMLLabelElement>(".vp-code-group .tabs label[data-title]");
  for (const label of labels) {
    if (processedLabels.has(label)) continue;
    processedLabels.add(label);

    label.addEventListener("click", () => {
      if (isSyncing) return;
      
      const title = label.dataset.title;
      if (!title) return;

      savePref(title);
      requestAnimationFrame(() => syncTabs(title));
    });
  }
}