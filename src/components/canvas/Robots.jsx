'use client';

import React, {Supense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import RobotLoader from './RobotLoader';

export const Robots = ({ isMobile, path, scale=0.6 }) => {
    const robot = useGLTF(path);
    return (
        <mesh>
            <hemisphereLight intensity={0.15} />
            {/* <ambientLight intensity={0.55} /> */}
            <directionalLight color="blue" position={[0, 0, 5]} />
            <pointLight intensity={1} />
            <spotLight 
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive 
                object={robot.scene}
                scale={isMobile ? 0.75 : scale}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -0]}
                rotation={[0.01, 0.2, 0.1]}
            />
        </mesh>
    )
}

const RobotsCanvas = ({ scene='./robot_model/scene.gltf', scale }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width:500px)')
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])
    

    return (
        <Canvas
            frameloop='demand'
            shadows
            // camera={{ position: [20, 3, 5], fov: 25 }}
            camera={{ 
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
              }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <OrbitControls 
                autoRotate
                enableZoom={false}
                maxPolarAngle={-Math.PI}
                minPolarAngle={Math.PI / 2}
            />
            <Robots isMobile={isMobile} path={scene} scale={scale} />
            <Preload all />
        </Canvas>
    )
} 

export default RobotsCanvas;
