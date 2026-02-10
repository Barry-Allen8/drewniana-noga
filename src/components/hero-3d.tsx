"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
      <meshStandardMaterial
        color="#a8a29e"
        metalness={0.3}
        roughness={0.7}
        emissive="#57534e"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

const PARTICLE_POSITIONS = (() => {
  const count = 150;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    pos[i] = ((i * 7) % 100) / 5 - 10;
    pos[i + 1] = ((i * 13) % 100) / 5 - 10;
    pos[i + 2] = ((i * 11) % 50) / 5 - 5;
  }
  return pos;
})();

function AmbientParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#fafaf9"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0c0a09"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} />
        <FloatingMesh />
        <AmbientParticles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
