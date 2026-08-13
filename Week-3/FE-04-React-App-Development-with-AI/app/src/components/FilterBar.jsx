function FilterBar({ value, onChange }) {
  return (
    <select
      className="filter-select"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Filter applications by status"
    >
      <option>All</option>
      <option>Applied</option>
      <option>Interview</option>
      <option>Selected</option>
      <option>Rejected</option>
    </select>
  );
}

export default FilterBar;