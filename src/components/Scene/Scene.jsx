import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import { Logo } from '../Logo'
import { Ground } from '../Ground'
import { Physics, useCompoundBody, Debug } from '@react-three/cannon'
import Box from '../Box'

export function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21])

  return (
    <Canvas {...props}>
      <Physics broadphase='SAP' gravity={[0, -2.6, 0]}>
        <Debug>
          <directionalLight intensity={0.75} />
          <ambientLight intensity={0.75} />
          {/* <Logo /> */}
          <Box />
          <Ground />
          <OrbitControls />
        </Debug>
      </Physics>
    </Canvas>
  )
}
