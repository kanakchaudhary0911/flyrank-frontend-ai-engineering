function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
      title="Toggle dark mode"
    >
      {darkMode ? "☀" : "☾"}
    </button>
  );
}

export default ThemeToggle;