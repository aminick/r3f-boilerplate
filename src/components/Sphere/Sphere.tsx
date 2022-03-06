const Sphere = () => {
  return (
    <mesh position={[2, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhongMaterial color="red" />
    </mesh>
  );
};

export default Sphere;
