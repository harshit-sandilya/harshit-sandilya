"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

interface GLTFResult {
  scene: THREE.Group;
}

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url) as GLTFResult;
  return <primitive object={scene} />;
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }} style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model url="/room.glb" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
