import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import checker from "../../assets/checker.png";

const PLANE_SIZE = 20;

const CheckerBoard = () => {
  const checkerMap = useLoader(THREE.TextureLoader, checker);
  checkerMap.wrapS = THREE.RepeatWrapping;
  checkerMap.wrapT = THREE.RepeatWrapping;
  checkerMap.magFilter = THREE.NearestFilter;
  const repeats = PLANE_SIZE / 2;
  checkerMap.repeat.set(repeats, repeats);

  return (
    <mesh rotation-x={Math.PI * 0.5} position-y={-1}>
      <planeBufferGeometry args={[PLANE_SIZE, PLANE_SIZE]} />
      <meshPhongMaterial map={checkerMap} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CheckerBoard;
