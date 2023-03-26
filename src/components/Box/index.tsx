import React, { useRef, useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { Physics, useCompoundBody, useBox, useRaycastAny } from '@react-three/cannon'
import { Raycaster, Vector3 } from 'three'

export default function Box(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))

  return (
    <mesh ref={ref as any}>
      <boxGeometry />
    </mesh>
  )
}

const useForwardRaycast = (obj) => {
  const raycaster = useMemo(() => new Raycaster(), [])
  const pos = useMemo(() => new Vector3(), [])
  const dir = useMemo(() => new Vector3(), [])
  const scene = useThree((state) => state.scene)

  return () => {
    if (!obj.current) return []
    raycaster.set(obj.current.getWorldPosition(pos), obj.current.getWorldDirection(dir))
    return raycaster.intersectObjects(scene.children)
  }
}
