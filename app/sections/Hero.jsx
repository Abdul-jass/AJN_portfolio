"use client"
import HackerRoom from '@/app/components/HackerRoom'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index'


const Hero = () => {
    const x = useControls("HackerRoom",
        { 
            positionX:{
                value: 2.5,
                min: -10,
                max: 10,
            },
            positionY:{
                value: 2.5,
                min: -20,
                max: 10,
            },
            positionZ:{
                value: 2.5,
                min: -100,
                max: 10,
            },
            rotationX:{
                value: 0,
                min: -10,
                max: 10,
            },
            rotationY:{
                value: 0,
                min: -10,
                max: 10,
            },
            rotationZ:{
                value: 0,
                min: -10,
                max: 10,
            },
            scale:{
                value: 0.5,
                min: -10,
                max: 10,
            },
        }
    );
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall = useMediaQuery({maxWidth: 440});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 
        c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium 
            text-white text-center font-generalsans">Hi, I am Ahmed
            <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Building products & brands</p>
        </div>
        <div className="w-full h-full absolute inset-0">
        <Leva/>
           <Canvas className="w-full h-full" antialias >
            <Suspense fallback={<CanvasLoader/>}>
            <perspectiveCamera makeDefault position={[0, 0, 30]}/>
            <HackerRoom 
            // scale={0.02}
            position={[1,isMobile ? -5 : -11, -15 ]}
            rotation={[0, Math.PI, 0]}
            scale={isMobile ? 0.08 : 0.1}
            />
          
            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Suspense>
           </Canvas>
        </div>
    </section>
  )
}

export default Hero