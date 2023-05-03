import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './Experience';
import * as THREE from 'three'

function App() {
  return (
    <Canvas
      // flat
      // dpr={ [ 1, 2 ] } //pixel min max ratio control 
      gl={{
        antialias: true,
        // toneMapping: THREE.ACESFilmicToneMapping
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 4]
      }}>
      <Experience> </Experience>
    </Canvas >

  );
}

export default App;
