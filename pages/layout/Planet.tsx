import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function getName(type: string) {
  return `/textures/block/PavingStones092_1K_${type}.jpg`;
}

function Box() {
  const mesh = useRef<any>();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    getName('Color'),
    getName('Displacement'),
    getName('Normal'),
    getName('Roughness'),
    getName('AmbientOcclusion'),
  ]);
  // const colorMap = useLoader(TextureLoader, '/textures/matcaps/2.png');

  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <>
      <ambientLight intensity={0.3} />
      <mesh
        position={[-1.2, 0, 0]}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          displacementScale={0.01}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

function Planet() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  );
}

export default Planet;
