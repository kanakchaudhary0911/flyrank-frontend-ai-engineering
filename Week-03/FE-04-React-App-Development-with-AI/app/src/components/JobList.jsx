import JobCard from "./JobCard";

function JobList({ jobs, onEdit, onDelete, onAdd }) {
  if (jobs.length === 0) {
    return (
      <section className="empty-state">
        <div className="empty-icon">⌕</div>
        <h2>No applications found</h2>
        <p>Try changing your search/filter or add a new application.</p>
        <button className="primary-btn" onClick={onAdd}>+ Add Application</button>
      </section>
    );
  }

  return (
    <section className="job-list">
      <div className="section-heading">
        <h2>Your Applications</h2>
        <span>{jobs.length} {jobs.length === 1 ? "application" : "applications"}</span>
      </div>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </section>
  );
}

export default JobList;