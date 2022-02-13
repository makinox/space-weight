import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Image from 'next/image';

import { PlanetType } from '../../public/constants';
import { PlanetBlur, PlanetCanvas, PlanetStars } from './Planet.styles';

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
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
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
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
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
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} bumpMap={bumpMap} />
      </mesh>
    </>
  );
}

function Mars() {
  const meshRef = useRef<any>();
  const [map, bumpMap, normalMap] = useLoader(TextureLoader, [
    '/textures/mars/marsmap1k.jpg',
    '/textures/mars/marsbump1k.jpg',
    '/textures/mars/marsnormal1k.jpg',
  ]);
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} bumpMap={bumpMap} normalMap={normalMap} />
      </mesh>
    </>
  );
}

function Jupiter() {
  const meshRef = useRef<any>();
  const [map] = useLoader(TextureLoader, ['/textures/jupiter/jupiter1k.jpg']);
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} />
      </mesh>
    </>
  );
}

function Neptune() {
  const meshRef = useRef<any>();
  const [map] = useLoader(TextureLoader, ['/textures/neptune/neptunemap.jpg']);
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} />
      </mesh>
    </>
  );
}

function Pluto() {
  const meshRef = useRef<any>();
  const [map, bumpMap] = useLoader(TextureLoader, ['/textures/pluto/plutomap1k.jpg', '/textures/pluto/plutobump1k.jpg']);
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} bumpMap={bumpMap} />
      </mesh>
    </>
  );
}

function Sun() {
  const meshRef = useRef<any>();
  const [map] = useLoader(TextureLoader, ['/textures/sun/sunmap.jpg']);
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <ambientLight intensity={1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} />
      </mesh>
    </>
  );
}

function Mercury() {
  const meshRef = useRef<any>();
  const [map, bumpMap] = useLoader(TextureLoader, ['/textures/mercury/mercurymap.jpg', '/textures/mercury/mercurybump.jpg']);
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} bumpMap={bumpMap} />
      </mesh>
    </>
  );
}

function Venus() {
  const meshRef = useRef<any>();
  const [map, bumpMap] = useLoader(TextureLoader, ['/textures/venus/venusmap.jpg', '/textures/venus/venusbump.jpg']);
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <>
      <pointLight position={[-10, 9, 10]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0, 0]} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial displacementScale={0.01} map={map} bumpMap={bumpMap} />
      </mesh>
    </>
  );
}

function Planet({ name }: { name: PlanetType }) {
  const SelectedPlanet = useMemo(() => {
    switch (name) {
      case 'earth':
        return <Earth />;
      case 'moon':
        return <Moon />;
      case 'mars':
        return <Mars />;
      case 'jupiter':
        return <Jupiter />;
      case 'neptune':
        return <Neptune />;
      case 'pluto':
        return <Pluto />;
      case 'sun':
        return <Sun />;
      case 'mercury':
        return <Mercury />;
      case 'venus':
        return <Venus />;
      default:
        return <Base />;
    }
  }, [name]);

  return (
    <>
      <div className={PlanetStars()}>
        <Image src="/images/stars.jpg" alt="Stars image" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
      </div>
      <Canvas className={PlanetCanvas()}>
        <Suspense fallback={null}>{SelectedPlanet}</Suspense>
      </Canvas>
      <div className={PlanetBlur()} />
    </>
  );
}

export default Planet;
