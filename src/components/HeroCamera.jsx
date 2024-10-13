import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Move camera smoothly to a target position
    easing.damp3(state.camera.position, [0, 0, 21], 0.25, delta);

    // Rotate the group if not in mobile view
    if (!isMobile && groupRef.current) {
      easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, state.pointer.x / 3, 0], 0.25, delta);
    }
  });

  return <group ref={groupRef}scale={isMobile?1:1.3}>{children}</group>;
};

export default HeroCamera;
