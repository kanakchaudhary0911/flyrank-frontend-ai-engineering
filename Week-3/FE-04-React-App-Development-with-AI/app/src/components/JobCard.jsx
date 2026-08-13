function JobCard({ job, onEdit, onDelete }) {
  return (
    <article className="job-card">
      <div className="company-avatar">{job.company.charAt(0).toUpperCase()}</div>

      <div className="job-info">
        <div className="job-heading">
          <div>
            <h3>{job.role}</h3>
            <p>{job.company}</p>
          </div>
          <span className={`status status-${job.status.toLowerCase()}`}>{job.status}</span>
        </div>
        <p className="location">⌖ {job.location}</p>
      </div>

      <div className="card-actions">
        <button onClick={() => onEdit(job)}>Edit</button>
        <button className="danger-btn" onClick={() => onDelete(job.id)}>Delete</button>
      </div>
    </article>
  );
}

export default JobCard;