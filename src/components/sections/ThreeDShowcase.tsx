"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, RoundedBox, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { RotateCw, ZoomIn } from "lucide-react";

/* ──────────────────────────────────────────────────────────────
   3D Scene Objects — Brightened with visible gold elements
   ────────────────────────────────────────────────────────────── */

/** A premium 3D business card with visible gold foil details */
function BusinessCard() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Main card body — dark with glossy finish */}
        <mesh castShadow>
          <RoundedBox args={[3.5, 2, 0.05]} radius={0.06} smoothness={4}>
            <meshPhysicalMaterial
              color="#1a1a1a"
              metalness={0.6}
              roughness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.05}
              reflectivity={0.9}
            />
          </RoundedBox>
        </mesh>

        {/* Gold stripe — thick and visible */}
        <mesh position={[0, -0.55, 0.03]}>
          <boxGeometry args={[2.8, 0.08, 0.01]} />
          <meshStandardMaterial color="#C9A84C" metalness={1} roughness={0.15} emissive="#C9A84C" emissiveIntensity={0.15} />
        </mesh>

        {/* Gold logo circle — prominent */}
        <mesh position={[-1.1, 0.5, 0.03]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#C9A84C" metalness={1} roughness={0.1} emissive="#C9A84C" emissiveIntensity={0.2} />
        </mesh>

        {/* Gold infinity symbol inside logo */}
        <mesh position={[-1.1, 0.5, 0.035]}>
          <torusGeometry args={[0.08, 0.02, 16, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Text line placeholders — visible light gray */}
        {[0.15, -0.05, -0.25].map((y, i) => (
          <mesh key={i} position={[0, y, 0.03]}>
            <boxGeometry args={[1.8 - i * 0.4, 0.06, 0.005]} />
            <meshStandardMaterial color="#555555" metalness={0.3} roughness={0.5} />
          </mesh>
        ))}

        {/* Edge highlight — thin gold border */}
        <mesh>
          <RoundedBox args={[3.56, 2.06, 0.04]} radius={0.07} smoothness={4}>
            <meshStandardMaterial
              color="#C9A84C"
              metalness={1}
              roughness={0.2}
              transparent
              opacity={0.3}
              side={THREE.BackSide}
            />
          </RoundedBox>
        </mesh>
      </group>
    </Float>
  );
}

/** Decorative floating shapes — visible gold and dark elements */
function FloatingGeometrics() {
  return (
    <>
      {/* Large gold sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2} position={[3, 1.2, -1.5]}>
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#C9A84C" metalness={1} roughness={0.1} emissive="#C9A84C" emissiveIntensity={0.1} />
        </mesh>
      </Float>

      {/* Distorted dark sphere with gold reflection */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8} position={[-3, -0.8, -1]}>
        <mesh>
          <sphereGeometry args={[0.5, 64, 64]} />
          <MeshDistortMaterial color="#2a2a3e" distort={0.25} speed={2} roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      {/* Gold torus knot — eye-catching */}
      <Float speed={1} rotationIntensity={1} floatIntensity={0.6} position={[2.8, -1.5, -0.5]}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.35, 0.1, 16, 32]} />
          <meshStandardMaterial color="#C9A84C" metalness={1} roughness={0.12} emissive="#C9A84C" emissiveIntensity={0.08} />
        </mesh>
      </Float>

      {/* Dark reflective cube */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.7} position={[-2.8, 1.5, -1.5]}>
        <mesh rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.45, 0.45, 0.45]} />
          <meshPhysicalMaterial color="#1a1a2e" metalness={0.7} roughness={0.15} clearcoat={1} clearcoatRoughness={0.1} />
        </mesh>
      </Float>

      {/* Small gold octahedron */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={0.9} position={[-1.5, -1.8, -0.8]}>
        <mesh>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color="#C9A84C" metalness={1} roughness={0.15} emissive="#C9A84C" emissiveIntensity={0.05} />
        </mesh>
      </Float>
    </>
  );
}

/* ──────────────────────────────────────────────────────────────
   Canvas — Studio-quality lighting
   ────────────────────────────────────────────────────────────── */

function ThreeDCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      {/* Increased ambient for visibility */}
      <ambientLight intensity={0.6} />

      {/* Key light — warm white from top-right */}
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        color="#ffffff"
      />

      {/* Gold fill light from left */}
      <spotLight
        position={[-5, 3, 3]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        color="#C9A84C"
      />

      {/* Rim light from back */}
      <pointLight position={[0, -2, -3]} intensity={0.5} color="#C9A84C" />

      {/* Bottom fill */}
      <pointLight position={[0, -3, 2]} intensity={0.3} color="#ffffff" />

      {/* Environment for realistic reflections */}
      <Environment preset="city" />

      {/* Objects */}
      <BusinessCard />
      <FloatingGeometrics />

      {/* Controls — smooth rotation */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        maxDistance={8}
        minDistance={3}
      />
    </Canvas>
  );
}

export default function ThreeDShowcase() {
  return (
    <section className="relative py-24 lg:py-32 bg-background-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,168,76,0.06),transparent)]" />

      <div className="container-premium">
        <SectionHeading
          label="Interactive Showcase"
          title="Experience Design in 3D"
          description="Get a feel for the premium quality of our work. Rotate, zoom, and explore our 3D mockup — because flat screenshots don't do justice to dimensional design."
        />

        <RevealOnScroll>
          <div className="relative max-w-4xl mx-auto">
            {/* 3D Canvas */}
            <div className="relative aspect-[16/10] rounded-2xl border border-border bg-[#0c0c0c] overflow-hidden shadow-2xl shadow-black/50">
              <Suspense
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-8 w-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm text-foreground-muted">Loading 3D Scene...</span>
                    </div>
                  </div>
                }
              >
                <ThreeDCanvas />
              </Suspense>
            </div>

            {/* Interaction hints */}
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2 text-sm text-foreground-muted">
                <RotateCw size={14} className="text-accent" />
                <span>Drag to rotate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-muted">
                <ZoomIn size={14} className="text-accent" />
                <span>Scroll to zoom</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
