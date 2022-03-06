import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere";
import CheckerBoard from "./components/CheckerBoard";
import Plane from "./components/Plane";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Canvas dpr={2}>
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={1} />
          <Plane />
          <Sphere />
          <CheckerBoard />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
