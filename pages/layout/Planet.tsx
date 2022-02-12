import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box() {
  // This reference will give us direct access to the mesh
  const mesh = useRef<any>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      position={[-1.2, 0, 0]}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereBufferGeometry args={[1, 30, 30]} attach="geometry" />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} wireframe />
    </mesh>
  );
}

function Planet() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}

export default Planet;
