import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Orb from './Orb'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#1C2B48']} />
      <ambientLight intensity={0.72} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <pointLight position={[-3, 1, 2]} intensity={10} distance={8} color="#A7C7E7" />
      <pointLight position={[2, -2, 1]} intensity={6} distance={7} color="#E8ECEF" />

      <Orb />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={6}
        enableDamping
        touches={{ ONE: 1, TWO: 2 }}
      />
    </Canvas>
  )
}