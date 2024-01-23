'use client'

import { animated, useSpring } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

export const OBJECT_POSITIONS = {
  step1: (-Math.PI / 180) * 120,
  step2: (-Math.PI / 180) * 240,
  step3: (-Math.PI / 180) * 360,
}

// const STEP_DURATION = 1500

export type LegoGLTFResult = GLTF & {
  nodes: {
    group19341521: THREE.Mesh
    group185796132: THREE.Mesh
    group280668622: THREE.Mesh
    group543582572: THREE.Mesh
    group1110155316: THREE.Mesh
    group1665140085: THREE.Mesh
    group1760307026: THREE.Mesh
    group1804543626: THREE.Mesh
    group2038704105: THREE.Mesh
  }
  materials: {
    mat8: THREE.MeshStandardMaterial
  }
}

const COLOR = '#d7556d'

export const Lego = () => {
  const { nodes } = useGLTF('/lego-brick.gltf') as LegoGLTFResult

  const [springs] = useSpring(() => ({
    from: {
      scaleObj1: 1,
      carouselRotation: 0,
    },
    to: [
      {
        carouselRotation: OBJECT_POSITIONS.step1,
        scaleObj1: 1,
      },
      {
        carouselRotation: OBJECT_POSITIONS.step2,
        scaleObj1: 1,
      },
      {
        carouselRotation: OBJECT_POSITIONS.step3,
        scaleObj1: 1,
      },
    ],

    config: key => {
      switch (key) {
        case 'carouselRotation':
          return {
            duration: 4000,
            // mass: 12,
            // tension: 120,
            // friction: 40,
          }
        case 'scaleObj1':
          return { mass: 15, friction: 60, tension: 380 }
        default:
          return {}
      }
    },
    loop: true,
    immediate: true,
  }))

  return (
    <animated.group
      dispose={null}
      rotation-y={springs.carouselRotation}
      castShadow
      receiveShadow
      scale={15}
    >
      {Object.entries(nodes).map(([meshName, { geometry }]) => {
        return (
          <mesh castShadow receiveShadow key={meshName} geometry={geometry}>
            <meshStandardMaterial color={COLOR} />
          </mesh>
        )
      })}
    </animated.group>
  )
}

useGLTF.preload('/lego-brick.gltf')
