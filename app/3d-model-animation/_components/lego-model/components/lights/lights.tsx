const DIRECTIONAL_LIGHT_POSITION = {
  x: 2,
  y: 2,
  z: 4.28,
}

const SPOT_LIGHT_POSITION = {
  x: 0.2,
  y: 1.2,
  z: -0.7,
}

const SPOT_LIGHT_2_POSITION = {
  x: 2.1,
  y: 2.6,
  z: 1.1,
}

export const Lights = () => (
  <>
    <directionalLight
      visible
      castShadow
      receiveShadow
      intensity={1.3}
      position={[
        DIRECTIONAL_LIGHT_POSITION.x,
        DIRECTIONAL_LIGHT_POSITION.y,
        DIRECTIONAL_LIGHT_POSITION.z,
      ]}
      color={'#aeb7a8'}
    />
    <spotLight
      castShadow
      visible
      decay={2}
      intensity={1.6}
      position={[SPOT_LIGHT_POSITION.x, SPOT_LIGHT_POSITION.y, SPOT_LIGHT_POSITION.z]}
    />
    <spotLight
      visible
      castShadow
      decay={0.3}
      intensity={1}
      rotation={[Math.PI / -1, 0, 0]}
      position={[SPOT_LIGHT_2_POSITION.x, SPOT_LIGHT_2_POSITION.y, SPOT_LIGHT_2_POSITION.z]}
    />
  </>
)
