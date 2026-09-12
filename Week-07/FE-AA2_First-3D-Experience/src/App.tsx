import { lazy, Suspense } from 'react'
import './App.css'

const Experience = lazy(() => import('./components/Experience'))

function App() {
  return (
    <main className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">INTERACTIVE 3D EXPERIENCE</p>
          <h1>Shape your <span>imagination.</span></h1>
          <p className="description">
            A lightweight 3D space inspired by cool cerulean, soft blue,
            midnight blue and platinum tones.
          </p>
          <div className="meta">
            <span>Drag to explore</span>
            <span>Click the orb</span>
          </div>
        </div>

        <div className="scene-container">
          <Suspense fallback={<div className="scene-fallback">Loading 3D...</div>}>
            <Experience />
          </Suspense>
          <div className="scene-label">BLUE ORBIT / 01</div>
        </div>
      </section>
    </main>
  )
}

export default App