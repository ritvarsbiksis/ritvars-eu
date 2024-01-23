'use client'

import { Canvas } from '@react-three/fiber'
import { Fragment, PropsWithChildren, Suspense } from 'react'

import { Lights } from './components/lights/lights'

export const LegoModel = ({ children }: PropsWithChildren) => (
  <Canvas
    style={{
      width: 200,
      height: 200,
      overflow: 'visible',
    }}
    gl={{ preserveDrawingBuffer: true }}
    dpr={[1, 1.5]}
    camera={{ position: [0, 2, 6], fov: 33 }}
    shadows
  >
    <Suspense fallback={<Fragment />}>
      <Lights />
      {children}
    </Suspense>
  </Canvas>
)
