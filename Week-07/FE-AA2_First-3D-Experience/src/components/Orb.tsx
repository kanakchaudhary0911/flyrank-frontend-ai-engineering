import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export default function Orb() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    meshRef.current.rotation.x += delta * 0.22
    meshRef.current.rotation.y += delta * 0.35
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.15) * 0.1

    const targetScale = active ? 1.24 : 1
    const scale = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.08)
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <mesh
      ref={meshRef}
      onClick={() => setActive((value) => !value)}
      onPointerOver={() => { document.body.style.cursor = 'pointer' }}
      onPointerOut={() => { document.body.style.cursor = 'default' }}
    >
      <icosahedronGeometry args={[1.2, 3]} />
      <meshStandardMaterial
        color={active ? '#8EB1D1' : '#6F9BC2'}
        roughness={0.22}
        metalness={0.58}
        emissive={active ? '#C4D8E5' : '#8EB1D1'}
        emissiveIntensity={active ? 0.65 : 0.18}
      />
    </mesh>
  )
}