import { useThree, useFrame, extend } from "@react-three/fiber"
import { OrbitControls, TransformControls, PivotControls, Html } from '@react-three/drei'
import { useRef } from 'react'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// extend({ OrbitControls })
import CustomObject from "./CustomObject"
export default function Experience() {
    const cubeRef = useRef()
    const sphare = useRef()
    const groupRef = useRef()

    // once it everythings is ready 
    // evey sigle frame
    useFrame((state, delta) => {
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0, 0, 0)
        // cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })

    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Html>Test</Html>
            <group ref={groupRef}>
                {/* PivotControl not working in group */}
                <PivotControls
                    anchor={[0, 1, 0]}
                    depthTest={false}
                    lineWidth={4}
                    axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
                    scale={1}>
                    <mesh position-x={- 2} ref={sphare}>
                        <sphereGeometry />
                        <meshStandardMaterial color="orange" />
                        <Html
                            position={[1, 1, 0]}
                            wrapperClass="label"
                            center
                            distanceFactor={8}
                            occlude={[sphare]}
                        >
                            That's a sphere 👍
                        </Html>
                    </mesh>
                </PivotControls>

                <TransformControls position-x={2} mode="rotate">
                    <mesh scale={1.5}>
                        <boxGeometry />
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                </TransformControls>
            </group>

            <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
            {/* <CustomObject /> */}
        </>
    )
}