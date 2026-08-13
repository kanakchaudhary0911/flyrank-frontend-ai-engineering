import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ThemeToggle from "./components/ThemeToggle";
import { loadJobs, saveJobs } from "./utils/localStorage";

const initialJobs = [
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

function App() {
  const [jobs, setJobs] = useState(loadJobs);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("jat-theme") === "dark";
  });

  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("jat-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.role.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "All" || job.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [jobs, search, status]);

  function handleSave(formData) {
    if (editingJob) {
      setJobs((current) =>
        current.map((job) =>
          job.id === editingJob.id ? { ...formData, id: editingJob.id } : job
        )
      );
    } else {
      setJobs((current) => [{ ...formData, id: Date.now() }, ...current]);
    }
    setEditingJob(null);
    setShowForm(false);
  }

  function handleDelete(id) {
    setJobs((current) => current.filter((job) => job.id !== id));
  }

  function handleEdit(job) {
    setEditingJob(job);
    setShowForm(true);
  }

  return (
    <div className="app-shell">
      <Header onAdd={() => { setEditingJob(null); setShowForm(true); }} />
      <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((value) => !value)} />

      <main className="main-content">
        <section className="hero">
          <div>
            <p className="eyebrow">CAREER ORGANIZER</p>
            <h2>Stay on top of every opportunity.</h2>
            <p className="hero-text">
              Track applications, follow your progress, and keep your job search organized.
            </p>
          </div>
          <div className="stats">
            <div className="stat-card">
              <span>Total</span>
              <strong>{jobs.length}</strong>
            </div>
            <div className="stat-card">
              <span>Interviews</span>
              <strong>{jobs.filter((job) => job.status === "Interview").length}</strong>
            </div>
            <div className="stat-card">
              <span>Selected</span>
              <strong>{jobs.filter((job) => job.status === "Selected").length}</strong>
            </div>
          </div>
        </section>

        <section className="toolbar">
          <SearchBar value={search} onChange={setSearch} />
          <FilterBar value={status} onChange={setStatus} />
        </section>

        <JobList
          jobs={filteredJobs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAdd={() => { setEditingJob(null); setShowForm(true); }}
        />
      </main>

      {showForm && (
        <JobForm
          initialData={editingJob}
          onSave={handleSave}
          onClose={() => { setEditingJob(null); setShowForm(false); }}
        />
      )}
    </div>
  );
}

export default App;