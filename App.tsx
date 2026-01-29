
import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, MeshDistortMaterial, Environment, Stars, PerspectiveCamera } from '@react-three/drei';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import AIConsultant from './components/AIConsultant';
import Courses from './components/Courses';
import Footer from './components/Footer';

// 3D Background Component with refined lighting
const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
      <Environment preset="night" />
      <Stars radius={100} depth={60} count={7000} factor={6} saturation={0} fade speed={1.5} />
      
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <Sphere args={[1, 100, 100]} position={[6, 3, -8]} scale={2.5}>
          <MeshDistortMaterial
            color="#c5a059"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.05}
            metalness={0.9}
            emissive="#c5a059"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.2}>
        <Sphere args={[1, 100, 100]} position={[-8, -4, -12]} scale={4}>
          <MeshDistortMaterial
            color="#0A1F3D"
            attach="material"
            distort={0.5}
            speed={1}
            roughness={0.1}
            metalness={1}
          />
        </Sphere>
      </Float>

      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#c5a059" />
      <spotLight position={[-20, 15, 10]} angle={0.2} penumbra={1} intensity={3} color="#ffffff" />
    </>
  );
};

const App: React.FC = () => {
  const [showConsultant, setShowConsultant] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[1000] gap-8">
        <div className="w-16 h-16 border-t-2 border-[#c5a059] rounded-full animate-spin" />
        <span className="text-[10px] tracking-[0.8em] font-bold uppercase gold-gradient animate-pulse">Initializing Excellence</span>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#c5a059] selection:text-black">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar onOpenAI={() => setShowConsultant(true)} />
        
        <main>
          <Hero onGetStarted={() => setShowConsultant(true)} />
          <Experience />
          <Courses />
        </main>

        <Footer />
      </div>

      {/* AI Assistant Overlay */}
      {showConsultant && (
        <AIConsultant onClose={() => setShowConsultant(false)} />
      )}
    </div>
  );
};

export default App;
