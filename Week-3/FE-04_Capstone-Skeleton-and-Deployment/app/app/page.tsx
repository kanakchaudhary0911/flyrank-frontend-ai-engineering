const skills=["Python","Java","JavaScript","React","Next.js","SQL","Git","AI/ML"];
export default function HomePage(){return <>
<section className="hero shell"><div>
<p className="eyebrow">Backend Developer · AI · Web</p>
<h1>Building practical software with a <span>backend-first</span> mindset.</h1>
<p className="hero-description">I&apos;m Kanak Chaudhary, a BCA student focused on backend development, AI, and modern web applications. I enjoy turning ideas into clean, useful, deployable products.</p>
<div className="hero-actions"><a href="/projects" className="button">View Projects</a><a href="/contact" className="button secondary">Contact Me</a></div>
</div><div className="hero-card"><div className="status-dot">● Available for opportunities</div><p className="card-label">CURRENT FOCUS</p><h2>Backend + AI Engineering</h2><p>APIs, databases, automation, data-driven applications, and thoughtful frontend experiences.</p></div></section>
<section className="section shell"><p className="eyebrow">Toolkit</p><h2 className="section-title">Technologies I work with</h2><div className="skill-grid">{skills.map(s=><div className="skill-card" key={s}>{s}</div>)}</div></section>
<section className="section shell callout"><div><p className="eyebrow">Explore the work</p><h2>Projects that show the process, not just the result.</h2></div><a className="text-link" href="/projects">See case studies →</a></section>
</>}