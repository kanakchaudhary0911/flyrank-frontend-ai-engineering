function Header({ onAdd }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">J</div>
        <div>
          <h1>Job Application Tracker</h1>
          <p>Keep your job search organized in one place.</p>
        </div>
      </div>
      <button className="primary-btn" onClick={onAdd}>+ Add Application</button>
    </header>
  );
}

export default Header;