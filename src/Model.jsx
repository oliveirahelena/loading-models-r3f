// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/Addons.js'
// import { DRACOLoader } from 'three/examples/jsm/Addons.js'

// export default function Model() {
//     const model = useLoader(GLTFLoader, '/FlightHelmet/glTF/FlightHelmet.gltf', (loader) => {
//         const dracoLoader = new DRACOLoader()
//         dracoLoader.setDecoderPath('/draco/')
//         loader.setDRACOLoader(dracoLoader)
//     })

//     return <primitive object={model.scene} position-y={- 1} scale={5} />;
// }

// import { useGLTF } from '@react-three/drei'

// export default function Model() {
//     const model = useGLTF('/hamburger-draco.glb')

//     return <primitive object={model.scene} position-y={- 1} scale={0.35} />;
// }

import { Clone, useGLTF } from '@react-three/drei'

export default function Model() {
    const model = useGLTF('/hamburger-draco.glb')

    return <>
        <Clone object={model.scene} scale={0.35} position-x={- 4} />
        <Clone object={model.scene} scale={0.35} position-x={0} />
        <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
}

useGLTF.preload('/hamburger-draco.glb')