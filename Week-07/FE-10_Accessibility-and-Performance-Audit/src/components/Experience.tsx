import { lazy, Suspense, useEffect, useState } from 'react'

const Scene = lazy(() => import('./Scene'))

function StaticFallback() {
  return (
    <div className="static-fallback">
      <div className="fallback-orb" />
      <p>3D simplified for this device.</p>
    </div>
  )
}

export default function Experience() {
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lowPower =
      navigator.hardwareConcurrency !== undefined &&
      navigator.hardwareConcurrency <= 4

    setUseFallback(reducedMotion || lowPower)
  }, [])

  if (useFallback) return <StaticFallback />

  return (
    <Suspense fallback={<div className="scene-fallback">Loading 3D...</div>}>
      <Scene />
    </Suspense>
  )
}