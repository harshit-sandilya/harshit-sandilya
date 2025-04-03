"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface GLTFResult {
  scene: THREE.Group;
}

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url) as GLTFResult;
  useEffect(() => {
    scene.position.set(0, 0, 0);
    scene.rotation.set(0, -25, 0);
  }, [scene]);

  return <primitive object={scene} />;
}

function DebugAxes() {
  return (
    <>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([0, 0, 0, 1, 0, 0])}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="red" />
      </line>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([0, 0, 0, 0, 1, 0])}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="green" />
      </line>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([0, 0, 0, 0, 0, 1])}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="blue" />
      </line>
    </>
  );
}

function CameraController({ onPositionReached }: { onPositionReached: () => void }) {
  const { camera } = useThree();
  const [targetPosition] = useState({
    initialPos: new THREE.Vector3(0, 2, 5),
    secondPos: new THREE.Vector3(-3, 1, 2)
  });
  const [currentTarget, setCurrentTarget] = useState<'initialPos' | 'secondPos'>('initialPos');
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      if (scrollY.current > 300 && currentTarget === 'initialPos') {
        setCurrentTarget('secondPos');
      } else if (scrollY.current <= 300 && currentTarget === 'secondPos') {
        setCurrentTarget('initialPos');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentTarget]);

  useFrame(() => {
    const target = targetPosition[currentTarget];
    camera.position.lerp(target, 0.05);
    if (currentTarget === 'secondPos' &&
      camera.position.distanceTo(target) < 0.1) {
      onPositionReached();
    }
  });

  return null;
}

export default function ThreeScene() {
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    if (shouldNavigate) {
      console.log('Ready to navigate to next page');
    }
  }, [shouldNavigate]);

  return (
    <div style={{ height: "200vh" }}>
      <div style={{ position: "fixed", width: "100%", height: "100%" }}>
        <Canvas camera={{ position: [0, 2, 5] }} style={{ width: "100vw", height: "100vh" }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-5, 5, -5]} intensity={1} color="#ffffff" />
          <spotLight
            position={[0, 5, 0]}
            angle={0.6}
            penumbra={0.5}
            intensity={1.5}
            castShadow
          />

          <Suspense fallback={null}>
            <Model url="/Table_Chair.glb" />
          </Suspense>

          <DebugAxes />
          <CameraController onPositionReached={() => setShouldNavigate(true)} />
          <OrbitControls enabled={false} />
        </Canvas>
      </div>

      <div style={{ position: "fixed", bottom: "20px", left: "20px", color: "white" }}>
        Scroll down to change camera position
      </div>
    </div>
  );
}
