"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const desktopCards = [
  { id: 1, src: "/images/posters/poster1.avif", rotate: "-10deg", zIndex: 70, x: -540, y: -180 },
  { id: 2, src: "/images/posters/poster2.avif", rotate: "-6deg", zIndex: 60, x: -360, y: -120 },
  { id: 3, src: "/images/posters/poster3.avif", rotate: "-2deg", zIndex: 50, x: -180, y: -60 },
  { id: 4, src: "/images/posters/poster4.avif", rotate: "2deg", zIndex: 40, x: 0, y: 0 },
  { id: 5, src: "/images/posters/poster5.avif", rotate: "6deg", zIndex: 30, x: 180, y: 60 },
  { id: 6, src: "/images/posters/poster6.avif", rotate: "10deg", zIndex: 20, x: 360, y: 120 },
  { id: 7, src: "/images/posters/poster7.avif", rotate: "14deg", zIndex: 10, x: 540, y: 180 },
];

const mobileCards = [
  { id: 1, src: "/images/posters/poster1.avif", rotate: "-10deg", zIndex: 70, x: -110, y: -120 }, // Top Left
  { id: 2, src: "/images/posters/poster2.avif", rotate: "2deg", zIndex: 60, x: 20, y: -180 },   // Top Middle
  { id: 3, src: "/images/posters/poster3.avif", rotate: "8deg", zIndex: 50, x: 140, y: -50 },   // Top Right
  { id: 4, src: "/images/posters/poster4.avif", rotate: "-2deg", zIndex: 80, x: 0, y: 0 },      // CENTER
  { id: 5, src: "/images/posters/poster5.avif", rotate: "-8deg", zIndex: 30, x: -130, y: 90 },  // Left
  { id: 6, src: "/images/posters/poster6.avif", rotate: "5deg", zIndex: 40, x: -10, y: 180 },   // Bottom
  { id: 7, src: "/images/posters/poster7.avif", rotate: "12deg", zIndex: 20, x: 130, y: 150 },  // Bottom Right
];

export default function LayeredCards() {
  const [isFanned, setIsFanned] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsFanned(true), 300);
        } else {
          setIsFanned(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  const currentCards = isMobile ? mobileCards : desktopCards;

  const RegisterButton = ({ className = "" }: { className?: string }) => (
    <div className={`flex flex-col items-center relative ${className}`}>
      <div className="relative inline-block">
        <button className="bg-black border-2 border-zinc-800 shadow-2xl animate-rainbow px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
          Register Now
        </button>

        {/* Desktop Callout (Side) */}
        <div className="absolute left-[110%] top-[65%] -translate-y-1/2 w-[400px] hidden md:flex items-center gap-4">
          <svg className="w-24 h-12 text-black shrink-0" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 25 Q 50 18 10 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 15 L 10 25 L 25 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="rotate-[6deg]">
            <p className="text-xl font-dancing font-bold text-black leading-tight">
              😳 Your presence here is <br />
              making this button blush! <br />
              Click to calm it. 😉
            </p>
          </div>
        </div>

        {/* Mobile Callout (Bottom) */}
        <div className="mt-8 flex flex-col items-center md:hidden">
          <svg className="w-12 h-16 text-black mb-2" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 90 Q 35 50 25 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 25 L 25 10 L 35 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-xl font-dancing font-bold text-black text-center leading-tight">
            😳 Your presence here is <br />
            making this button blush! <br />
            Click to calm it. 😉
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 px-4 overflow-hidden bg-white">
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-4 md:mb-8 relative z-10 w-full">
          <h2 className="text-5xl md:text-[80px] font-extrabold tracking-tight text-black mb-6">
            Events this Week
          </h2>
          <p className="text-zinc-600 max-w-6xl mx-auto text-lg md:text-[20px] font-semibold leading-snug">
            From thought-provoking meetups to wild adventure clubs, there&apos;s always something happening at Communitie! Check <br className="hidden md:block" />
            out what&apos;s coming up and save your spot before FOMO hits!
          </p>

          {/* Desktop Button Only */}
          <RegisterButton className="mt-12 hidden md:flex" />
        </div>

        {/* Layered Cards Section */}
        <div className="relative mt-12 md:mt-0 h-[600px] md:h-[800px] flex justify-center items-center w-full">
          <div className="relative w-full flex justify-center items-center scale-[0.85] md:scale-90 lg:scale-100">
            {currentCards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute w-52 md:w-72 h-[320px] md:h-[400px] rounded-[1.2rem] md:rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] group`}
                style={{
                  transform: isFanned 
                    ? `translateX(${card.x}px) translateY(${card.y}px) rotate(${card.rotate})`
                    : `translateX(${index * -4}px) translateY(${index * -2}px) rotate(${index * -2}deg)`,
                  zIndex: card.zIndex,
                }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={(card as any).src}
                    alt={`Event ${card.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-black/10 transition-colors`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Button Only */}
        <div className="mt-24 mb-16 md:hidden w-full">
          <RegisterButton />
        </div>
      </div>
    </section>
  );
}
