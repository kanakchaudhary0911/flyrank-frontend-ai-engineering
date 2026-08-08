const STORAGE_KEY = "job-application-tracker-applications";

const demoJobs = [
  {
    id: 1,
    company: "Microsoft",
    role: "Frontend Developer Intern",
    location: "Hyderabad / Remote",
    status: "Interview",
  },
  {
    id: 2,
    company: "Accenture",
    role: "Software Developer Intern",
    location: "Bengaluru",
    status: "Applied",
  },
];

export function loadJobs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : demoJobs;
  } catch {
    return demoJobs;
  }
}

export function saveJobs(jobs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}