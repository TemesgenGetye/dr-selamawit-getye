"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
import Model, { ModelSmall } from "./Model";
import Loader from "./Loader";
import { LoaderCircle } from "lucide-react";

function MovingModel() {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (ref.current) {
      // Auto Rotate
      ref.current.rotation.y += 0.01;

      // Scroll-based Movement (up/down)
      ref.current.position.y = -scroll.offset * 5; // Moves up/down as you scroll
    }
  });

  return (
    <group ref={ref} scale={[3, 3, 3]}>
      <Model />
    </group>
  );
}

function MovingModelSmall() {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (ref.current) {
      // Auto Rotate
      ref.current.rotation.y += 0.01;

      // Scroll-based Movement (up/down)
      ref.current.position.y = -scroll.offset * 5; // Moves up/down as you scroll
    }
  });

  return (
    <group ref={ref} scale={[1.5, 1.5, 1.5]}>
      <ModelSmall />
    </group>
  );
}

export function ToothModel() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Model with Scroll Controls */}
      <Suspense fallback={null}>
        <ScrollControls pages={2} damping={1.5}>
          {/* Increases scroll effect */}
          <MovingModel />
        </ScrollControls>
      </Suspense>

      {/* Orbit Controls (without zoom) */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export function ToothModelSmall() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Model with Scroll Controls */}
      <Suspense fallback={null}>
        <ScrollControls pages={2} damping={1.5}>
          {/* Increases scroll effect */}
          <MovingModelSmall />
        </ScrollControls>
      </Suspense>

      {/* Orbit Controls (without zoom) */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
