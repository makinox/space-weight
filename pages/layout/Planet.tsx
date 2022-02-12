import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function Base() {
  const meshRef = useRef<any>();

  const [map, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    '/textures/block/PavingStones092_1K_Color.jpg',
    '/textures/block/PavingStones092_1K_Displacement.jpg',
    '/textures/block/PavingStones092_1K_Normal.jpg',
    '/textures/block/PavingStones092_1K_Roughness.jpg',
    '/textures/block/PavingStones092_1K_AmbientOcclusion.jpg',
  ]);

  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <ambientLight intensity={0.3} />
      <mesh position={[-1.2, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          displacementScale={0.01}
          map={map}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

function Earth() {
  const meshRef = useRef<any>();

  const [map, bumpMap, specMap] = useLoader(TextureLoader, [
    '/textures/earth/earthmap1k.jpg',
    '/textures/earth/earthbump1k.jpg',
    '/textures/earth/earthspec1k.jpg',
  ]);

  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <ambientLight intensity={0.3} />
      <mesh position={[-1.2, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} bumpMap={bumpMap} envMap={specMap} />
      </mesh>
    </>
  );
}

function Moon() {
  const meshRef = useRef<any>();

  const [map, bumpMap] = useLoader(TextureLoader, ['/textures/moon/moonmap1k.jpg', '/textures/moon/moonbump1k.jpg']);

  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <ambientLight intensity={0.3} />
      <mesh position={[-1.2, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} bumpMap={bumpMap} />
      </mesh>
    </>
  );
}

function Planet({ name }: { name: 'earth' | 'moon' }) {
  const SelectedPlanet = () => {
    switch (name) {
      case 'earth':
        return <Earth />;
      case 'moon':
        return <Moon />;
      default:
        return <Base />;
    }
  };

  return (
    <Canvas style={{ height: '60vh' }}>
      <Suspense fallback={null}>
        <SelectedPlanet />
      </Suspense>
    </Canvas>
  );
}

export default Planet;
