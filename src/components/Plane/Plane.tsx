import fragmentShader from "../../shaders/basic/fragment.glsl?raw";
import vertexShader from "../../shaders/basic/vertex.glsl?raw";

const customShader = {
  uniforms: {},
  vertexShader,
  fragmentShader,
};

const Plane = () => {
  return (
    <mesh>
      <planeBufferGeometry args={[1, 1]} />
      <shaderMaterial attach="material" args={[customShader]} />
    </mesh>
  );
};

export default Plane;
