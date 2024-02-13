import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Campfire from "./Campfire";

export default function index() {
  return (
    <div style={{ width: "50vw", height: "20vh" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Campfire />
        </Suspense>
      </Canvas>
    </div>
  );
}
