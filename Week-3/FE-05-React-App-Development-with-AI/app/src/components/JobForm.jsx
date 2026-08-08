import { useEffect, useState } from "react";

const emptyForm = {
  company: "",
  role: "",
  location: "",
  status: "Applied",
};

function JobForm({ initialData, onSave, onClose }) {
  const [form, setForm] = useState(initialData || emptyForm);

  useEffect(() => {
    setForm(initialData || emptyForm);
  }, [initialData]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.company.trim() || !form.role.trim()) return;

    onSave({
      ...form,
      company: form.company.trim(),
      role: form.role.trim(),
      location: form.location.trim() || "Not specified",
    });
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="eyebrow">APPLICATION</p>
            <h2>{initialData ? "Edit Application" : "Add Application"}</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">×</button>
        </div>

        <form onSubmit={handleSubmit} className="job-form">
          <label>
            Company Name
            <input name="company" value={form.company} onChange={handleChange} placeholder="e.g. Google" required />
          </label>

          <label>
            Job Role
            <input name="role" value={form.role} onChange={handleChange} placeholder="e.g. Software Developer Intern" required />
          </label>

          <label>
            Location
            <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Remote / Bengaluru" />
          </label>

          <label>
            Status
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Applied</option>
              <option>Interview</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>
          </label>

          <div className="form-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="primary-btn">
              {initialData ? "Save Changes" : "Add Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;