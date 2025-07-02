
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei';
import { Skeleton } from '@/components/ui/skeleton';

interface Artist3DProps {
  modelPath?: string;
  staticImagePath?: string;
  autoRotate?: boolean;
  className?: string;
}

function ArtistModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Center>
      <primitive 
        ref={meshRef}
        object={scene} 
        scale={[2, 2, 2]}
        position={[0, -1, 0]}
      />
    </Center>
  );
}

function Artist3DFallback({ staticImagePath }: { staticImagePath: string }) {
  return (
    <div className="w-full h-full bg-glass-strong rounded-2xl flex items-center justify-center">
      <img 
        src={staticImagePath} 
        alt="Artist 3D Portrait"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}

const Artist3D = ({ 
  modelPath = '/models/artist.glb', 
  staticImagePath = '/images/artist-3d.jpg',
  autoRotate = true,
  className = ''
}: Artist3DProps) => {
  return (
    <div className={`relative w-full h-[400px] lg:h-[500px] ${className}`}>
      <div className="absolute inset-0 glass-strong rounded-2xl overflow-hidden">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <Environment preset="studio" />
            
            <ArtistModel modelPath={modelPath} />
            
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={3}
              maxDistance={8}
              maxPolarAngle={Math.PI / 2}
              autoRotate={autoRotate}
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </Suspense>
      </div>
      
      {/* Static fallback positioned behind 3D viewer */}
      <div className="absolute inset-0 -z-10">
        <Artist3DFallback staticImagePath={staticImagePath} />
      </div>
    </div>
  );
};

export default Artist3D;
