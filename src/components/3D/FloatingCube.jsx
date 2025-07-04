import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingCube = ({ position = [0, 0, 0], scale = 1 }) => {
  const meshRef = useRef()
  
  // Create gradient material
  const material = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0ea5e9'),
      transparent: true,
      opacity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    })
    return mat
  }, [])

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.2
      
      // Subtle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5
    }
  })

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      scale={scale}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#0ea5e9"
        transparent
        opacity={0.7}
        roughness={0.2}
        metalness={0.8}
        envMapIntensity={1}
      />
      
      {/* Wireframe overlay */}
      <mesh>
        <boxGeometry args={[1.01, 1.01, 1.01]} />
        <meshBasicMaterial 
          color="#d946ef" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </mesh>
  )
}

export default FloatingCube