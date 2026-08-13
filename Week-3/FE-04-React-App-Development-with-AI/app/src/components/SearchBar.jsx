function SearchBar({ value, onChange }) {
  return (
    <label className="search-box">
      <span>⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by company or job role..."
      />
    </label>
  );
}

export default SearchBar;