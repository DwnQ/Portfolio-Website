/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\customCamp.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Model(props) {
  const particles = 10;
  const { nodes, materials, animations } = useGLTF(
    "/models/Campfire/customCamp.gltf"
  );

  const particleObjects = Array.from({ length: particles }, (_, index) =>
    useRef()
  );

  useFrame((state, delta) => {
    particleObjects.forEach((particleRef, index) => {
      // Update particle position in a circular motion
      // generate random decimal number between 0 and 10
      const randomNumber = Math.random() * 10;

      // generate random decimal number between -5 and 5
      const min = 0;
      const max = 5;
      const diff = max - min;
      const randomDecimal = Math.random() * diff + min;

      const elapsedTime = state.clock.getElapsedTime();
      const radius = 1;
      const speed = 2;

      const xPos = Math.cos(elapsedTime * speed * randomDecimal) * radius;
      const yPos = Math.sin(elapsedTime * speed) * radius + 1;
      const zPos = Math.sin(elapsedTime * speed * randomDecimal) * radius;

      if (yPos >= 100) particleRef.current.position.y = 0;

      particleRef.current.position.x = xPos;
      particleRef.current.position.y = yPos;
      particleRef.current.position.z = zPos;
    });
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
        position={[0.425, 0.171, -1.827]}
        rotation={[0.858, 0.363, 0.243]}
        scale={1.477}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.004"]}
        position={[-0.168, -0.007, 0.886]}
        rotation={[2.99, -0.516, 0.39]}
        scale={0.727}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.001"]}
        position={[-1.654, 0.248, 0.224]}
        rotation={[2.677, -0.053, 1.03]}
        scale={-1.139}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.001"]}
        position={[0.491, 0.442, 1.925]}
        rotation={[1.847, -0.741, -0.394]}
        scale={1.182}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.002"]}
        position={[0.522, -0.1, -0.638]}
        rotation={[2.031, -1.37, -1.828]}
        scale={0.639}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.002"]}
        position={[0.728, -0.495, 1.052]}
        rotation={[2.772, -0.496, 2.34]}
        scale={-0.683}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.001"]}
        position={[0.121, -0.032, -0.059]}
        rotation={[-3.047, 0.243, -2.399]}
        scale={-0.683}
      />
      <mesh
        geometry={nodes.Cylinder007.geometry}
        material={materials["Material.003"]}
        position={[2.04, -0.137, -0.046]}
        rotation={[0.921, -0.566, 1.093]}
        scale={1.477}
      />
      <mesh
        geometry={nodes.Cylinder008.geometry}
        material={materials["Material.002"]}
        position={[1.364, -0.02, 1.405]}
        rotation={[1.751, -0.753, -0.835]}
        scale={1.182}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.001"]}
        position={[-1.18, 0.025, -1.129]}
        rotation={[2.993, 0.753, 1.042]}
        scale={-1.139}
      />
      <mesh
        geometry={nodes.Cylinder010.geometry}
        material={materials["Material.001"]}
        position={[-1.264, 0.695, 1.13]}
        rotation={[2.47, -0.453, 0.915]}
        scale={-1.139}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.005"]}
        position={[3.515, 3.884, 0.25]}
        rotation={[0, 0.228, 0]}
        scale={[1.109, 1.109, 2.101]}
      />
      <mesh
        geometry={nodes.Object.geometry}
        material={materials["Material.005"]}
        position={[-0.058, 3.896, -5.221]}
        rotation={[0, -1.368, 0]}
        scale={[1.109, 1.109, 2.101]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["Material.005"]}
        position={[-2.196, 4.009, -4.108]}
        rotation={[0, -0.519, 0]}
        scale={[1.109, 1.109, 2.101]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Material.005"]}
        position={[-2.483, 3.768, -1.284]}
        rotation={[Math.PI, -0.464, Math.PI]}
        scale={[1.109, 1.109, 2.101]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials["Material.005"]}
        position={[-1.709, 3.807, 2.052]}
        rotation={[Math.PI, -1.316, Math.PI]}
        scale={[1.109, 1.109, 2.101]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["Material.005"]}
        position={[-0.232, 4.079, 2.528]}
        rotation={[-0.253, -1.498, -0.25]}
        scale={[1.236, 1.236, 3.478]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials["Material.005"]}
        position={[1.325, 3.229, 2.641]}
        rotation={[-0.058, -0.72, -0.119]}
        scale={[1.35, 0.926, 2.695]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.005"]}
        position={[2.649, 3.301, 1.123]}
        rotation={[-0.064, -0.317, -0.102]}
        scale={[1.35, 0.926, 2.695]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.005"]}
        position={[-2.209, 4.187, 0.993]}
        rotation={[Math.PI, -0.418, Math.PI]}
        scale={[1.236, 1.236, 3.478]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.005"]}
        position={[2.352, 4.178, -4.807]}
        rotation={[Math.PI, -1.355, Math.PI]}
        scale={[1.236, 1.236, 3.478]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.005"]}
        position={[4.816, 4.137, -2.517]}
        rotation={[Math.PI, -0.418, Math.PI]}
        scale={[1.236, 1.236, 3.478]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials["Material.005"]}
        position={[-1.722, 4.233, -1.82]}
        rotation={[-Math.PI, 0.618, -Math.PI]}
        scale={[1.236, 1.236, 3.478]}
      />
      <mesh
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.006"]}
        scale={0.771}
      />
      {particleObjects.map((particleRef, index) => (
        <mesh
          key={index} // Use the index as the key
          ref={particleRef}
          geometry={nodes.particle.geometry}
          material={new THREE.MeshBasicMaterial({ color: 0xf93f18 })}
          position={[
            Math.sqrt(0.158 + index),
            Math.sqrt(1.522 + index),
            Math.sqrt(0.079 + index),
          ]}
          scale={0.108}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/models/Campfire/customCamp.gltf");