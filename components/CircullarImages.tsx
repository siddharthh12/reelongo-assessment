"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const profileImages = [
  "/images/social/avatar_1.png",
  "/images/social/avatar_2.png",
  "/images/social/avatar_3.png",
  "/images/social/avatar_4.png",
  "/images/social/avatar_5.png",
  "/images/social/avatar_1.png",
  "/images/social/avatar_2.png",
  "/images/social/avatar_3.png",
  "/images/social/avatar_4.png",
  "/images/social/avatar_5.png",
  "/images/social/avatar_1.png",
  "/images/social/avatar_2.png",
  "/images/social/avatar_3.png",
  "/images/social/avatar_4.png",
  "/images/social/avatar_5.png",
];

const clubImages = [
  "/images/circularcards/image1.avif",
  "/images/circularcards/image2.avif",
];

export default function CircullarImages() {
  const [currentClubImage, setCurrentClubImage] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<'show' | 'fast' | 'slow'>('show');
  const [mobileRadius, setMobileRadius] = useState(150);
  const sectionRef = useRef<HTMLElement>(null);
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const checkSize = () => setMobileRadius(window.innerWidth < 768 ? 170 : 260);
    checkSize();
    window.addEventListener('resize', checkSize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear any existing timers
          timers.current.forEach(clearTimeout);
          timers.current = [];
          
          setAnimationPhase('show');
          
          const t1 = setTimeout(() => {
            setAnimationPhase('fast');
          }, 500);
          
          const t2 = setTimeout(() => {
            setAnimationPhase('slow');
          }, 3500);
          
          timers.current.push(t1, t2);
        } else {
          setAnimationPhase('show');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Club image slideshow
    const interval = setInterval(() => {
      setCurrentClubImage((prev) => (prev + 1) % clubImages.length);
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkSize);
      observer.disconnect();
      clearInterval(interval);
      timers.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f9fafb] py-20 px-4 overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-[80px] font-black text-black mb-8 tracking-tight">
            Your Passion, Our Platform!
          </h2>
          <p className="text-zinc-500 text-lg md:text-[22px] max-w-4xl mx-auto font-medium leading-relaxed">
            Got a brilliant idea for a club? Or want to collaborate with a vibrant, growing community? <br className="hidden md:block" />
            Let&apos;s make it happen - tap in and build something amazing with us!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-8">
          
          {/* Circular Images Left Side */}
          <div className="relative w-[450px] h-[450px] md:w-[650px] md:h-[650px] flex items-center justify-center">
            {/* Logo Center */}
            <div className="z-10 text-center scale-90 md:scale-110">
              <h3 className="text-4xl md:text-5xl font-black text-black flex items-center justify-center tracking-tight">
                <span>Comm</span>
                <span className="bg-white border-2 border-black text-black px-2 py-0.5 mx-0.5 rounded-sm text-[0.75em] leading-none mb-1">u</span>
                <span>nitie.</span>
              </h3>
              <p className="tracking-[0.6em] text-base md:text-xl font-normal text-zinc-800 mt-1 lowercase">
                hyderabad
              </p>
            </div>

            {/* Rotating Container */}
            <div className={`absolute inset-0 transition-all duration-1000 ${
              animationPhase === 'show' ? '' : 
              animationPhase === 'fast' ? 'animate-[spin_2.5s_cubic-bezier(0.4,0,0.2,1)]' : 
              'animate-[spin_60s_linear_infinite]'
            }`}>
              {profileImages.map((img, i) => {
                const angle = (i * 360) / profileImages.length;
                return (
                  <div
                    key={i}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
                    style={{
                      transform: animationPhase === 'show'
                        ? `rotate(0deg) translate(${mobileRadius}px) rotate(0deg)`
                        : `rotate(${angle}deg) translate(${mobileRadius}px) rotate(-${angle}deg)`,
                      opacity: animationPhase === 'show' && i > 0 ? 0 : 1,
                      transitionDelay: `${i * 80}ms`,
                    }}
                  >
                    <div className={animationPhase === 'slow' ? 'animate-[spin_60s_linear_infinite_reverse]' : ''}>
                      <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white shadow-xl overflow-hidden bg-zinc-200">
                        <Image
                          src={img}
                          alt="Profile"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card Right Side - Apple Style Card Stack */}
          <div className="relative pr-12 lg:pr-20">
            {/* Handwritten Callout */}
            <div className="absolute -top-28 -right-4 lg:-right-12 z-40 hidden md:block">
              <div className="flex flex-col items-start">
                <p className="font-dancing text-3xl md:text-4xl font-bold text-black mb-4 flex items-center gap-3">
                  Partner <br /> with us 🤝
                </p>
                <svg className="w-24 h-24 text-black -mt-6" viewBox="0 0 100 120" fill="none">
                  <path d="M30 10 Q 70 20 75 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M65 75 L 75 90 L 85 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Background Card Left (Sliver) */}
            <div className={`absolute top-12 -left-4 w-full h-[85%] bg-white/40 rounded-[35px] -rotate-[5deg] -z-10 border border-zinc-200/30 ${
              animationPhase === 'show' ? 'opacity-0' : 'opacity-30'
            }`} />

            {/* Main Front Card */}
            <div className={`bg-white p-6 md:p-8 rounded-[35px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 max-w-[360px] relative z-30 transition-all duration-1000 hover:-translate-y-4 group animate-float ${
              animationPhase === 'show' ? 'translate-y-10' : 'translate-y-0'
            }`}>
              {/* Card Image */}
              <div className="relative w-full h-[210px] rounded-[25px] overflow-hidden mb-6 shadow-sm">
                {clubImages.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="Club"
                    fill
                    className={`object-cover transition-opacity duration-1000 ${i === currentClubImage ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>

              <h4 className="text-2xl md:text-3xl font-black text-black mb-3 leading-tight tracking-tight">
                Build Your Own Club
              </h4>
              <p className="text-zinc-600 font-medium leading-[1.6] mb-8 text-base md:text-[17px]">
                Have a passion that deserves its own community? Whether it&apos;s chess, fitness, or a niche hobby—create a space where people connect over shared interests.
              </p>

              <button className="w-full bg-black text-white font-bold py-4 rounded-full text-lg hover:bg-zinc-800 active:scale-[0.98] transition-all duration-300 shadow-lg">
                Start Something Awesome
              </button>
            </div>

            {/* Back Blurred Card - Shorter height to finish before front card */}
            <div className={`absolute top-10 -right-6 lg:-right-12 w-full h-[90%] bg-white rounded-[35px] rotate-[12deg] z-10 shadow-2xl border border-zinc-200 transition-all duration-1000 animate-float-slow p-6 overflow-hidden select-none pointer-events-none ${
              animationPhase === 'show' ? 'opacity-0 scale-95' : 'opacity-80 scale-100'
            }`}>
              <div className="blur-[1.5px] opacity-40">
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-5 bg-zinc-100">
                   <Image src={clubImages[1]} alt="Cafe" fill className="object-cover" />
                </div>
                <h4 className="text-xl font-black text-black mb-3 tracking-tight">Host Your Events</h4>
                <p className="text-sm font-medium text-zinc-600 leading-snug">
                  Planning a workshop, or even a meetup? Host your next go-to spot with us. <br /><br />
                  We provide the space, and you bring the excitement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
