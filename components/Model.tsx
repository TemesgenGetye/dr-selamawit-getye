import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/models/a_white_tooth_molar_t_0219081814_texture.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/models/a_white_tooth_molar_t_0219081814_texture.glb"
  );

  return (
    <group>
      <primitive object={scene} />;
    </group>
  );
}

export function ModelSmall() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/models/a_white_tooth_molar_t_0219081814_texture_small.glb"
  );

  return (
    <group>
      <primitive object={scene} />;
    </group>
  );
}
