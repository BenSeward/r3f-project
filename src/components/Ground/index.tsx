import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useTrimesh } from '@react-three/cannon'
import React, { useRef } from 'react'

export function Ground() {
  const result = useLoader(GLTFLoader, '/models/new-map.glb') as any
  const geometry = result.scene.children[0].geometry
  const vertices = geometry.attributes.position.array
  const indices = geometry.index.array

  const [] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      type: 'Static',
    }),
    useRef(null),
  )

  return <></>
}
