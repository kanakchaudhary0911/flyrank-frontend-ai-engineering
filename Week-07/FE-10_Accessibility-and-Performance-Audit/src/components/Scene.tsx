import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import Orb from './Orb'

export default function Scene() {
  const [active, setActive] = useState(false)

  const activateOrb = () => {
    setActive((value) => !value)
  }

  return (
    <div className="scene-accessible">
      <button
        type="button"
        className="orb-keyboard-control"
        onClick={activateOrb}
        aria-label={active ? 'Deactivate blue orbit' : 'Activate blue orbit'}
        aria-pressed={active}
      >
        {active ? 'Blue Orbit active' : 'Activate Blue Orbit'}
      </button>

      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#1C2B48']} />
        <ambientLight intensity={0.72} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <pointLight
          position={[-3, 1, 2]}
          intensity={10}
          distance={8}
          color="#A7C7E7"
        />
        <pointLight
          position={[2, -2, 1]}
          intensity={6}
          distance={7}
          color="#E8ECEF"
        />

        <Orb active={active} onActivate={activateOrb} />

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={6}
          enableDamping
          touches={{ ONE: 1, TWO: 2 }}
        />
      </Canvas>
    </div>
  )
}