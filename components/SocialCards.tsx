'use client';
import Image from 'next/image';
import React from 'react';

const SocialCards = () => {
  const avatars = [
    '/images/social/avatar_1.png',
    '/images/social/avatar_2.png',
    '/images/social/avatar_3.png',
    '/images/social/avatar_4.png',
    '/images/social/avatar_5.png',
  ];

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden selection:bg-purple-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:pl-12 md:pr-20 lg:pr-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-6 max-w-xl z-50 lg:-ml-12">
            {/* Instagram Handle Header */}
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 relative">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-black">communitie.hyd</span>
            </div>

            <h1 className="text-4xl md:text-[70px] font-black leading-[0.95] tracking-tight text-black">
              Your Social Circle, <br /> Just a Click Away!
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-snug font-medium max-w-md">
              Stay in the loop with our latest club moments, event highlights, and behind-the-scenes fun. Follow us on Instagram and be part of the story
            </p>

            <div className="space-y-6 pt-4">
              {/* Avatars below paragraph */}
              <div className="flex items-center -space-x-3">
                {avatars.map((src, i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden bg-gray-100 relative shadow-sm"
                  >
                    <Image 
                      src={src} 
                      alt={`Avatar ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-1">
                <p className="font-bold text-black text-xl tracking-tight">
                  Family of 60k and adding 💜
                </p>
                <div className="flex items-start text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                  <span className="mt-2 w-1 h-1 bg-gray-300 rounded-full shrink-0"></span>
                  <span>Welcoming a new member every day - join our growing family of 52K+ and counting! 🚀</span>
                </div>
              </div>
            </div>

            <button className="group w-fit mt-8 px-10 py-4 bg-white border border-gray-100 rounded-full flex items-center space-x-4 text-black font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative ring-[12px] ring-gray-100/50">
              <span className="text-xl tracking-tight">Follow Us</span>
              <svg 
                className="w-7 h-7 text-[#9ca3af] fill-[#9ca3af] transition-colors group-hover:text-red-500 group-hover:fill-red-500" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>

          {/* RIGHT COLUMN - 4 Card Cascade with 3D Effect */}
          <div className="relative h-[600px] lg:h-[800px] w-full flex items-center justify-end perspective-[2000px]">
            <div className="relative w-full h-full flex items-center justify-end transition-transform duration-1000 -mt-20 lg:mt-0">
              
              {/* Card 4: READY TO STEP INTO (Top Right) */}
              <div className="absolute top-[5%] right-[5%] md:right-[-5%] lg:right-[-40%] w-[230px] md:w-[290px] aspect-[2/3] rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.45)] rotate-[-5deg] rotate-y-[10deg] rotate-x-[5deg] z-10 transition-all hover:scale-105 duration-500 overflow-hidden bg-zinc-950 flex flex-col">
                {/* Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">C</div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white leading-none">communitie.hyd</span>
                      <span className="text-[9px] text-white/50 leading-tight">♫ Original Audio</span>
                    </div>
                  </div>
                  <div className="text-white/40 text-lg leading-none">...</div>
                </div>
                
                {/* Main Image Area */}
                <div className="relative flex-1 w-full overflow-hidden">
                  <Image 
                    src="/images/social/bw_portrait.png"
                    alt="B&W"
                    fill
                    className="object-cover opacity-100 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-center">
                    <p className="text-white font-black text-xl lg:text-2xl leading-none tracking-tighter uppercase italic text-center drop-shadow-lg">
                      READY TO <br /> STEP INTO <br /> THE ?
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-zinc-950">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-white text-base">
                      <span>❤️</span> <span>💬</span> <span>↗️</span>
                    </div>
                    <div className="text-white text-base">🔖</div>
                  </div>
                  <div className="text-white text-[10px] mb-1">
                    <span className="font-bold">861 likes</span>
                  </div>
                  <p className="text-white text-[10px] leading-tight line-clamp-2">
                    <span className="font-bold">communitie.hyd</span> The only club you need to be in. 🖤
                  </p>
                </div>
              </div>

              {/* Card 3: Valentines (Upper Middle) */}
              <div className="absolute top-[18%] right-[15%] md:right-[10%] lg:right-[-0%] w-[230px] md:w-[290px] aspect-[2/3] rounded-[40px] shadow-[0_50px_140px_rgba(0,0,0,0.55)] rotate-[10deg] rotate-y-[-20deg] rotate-x-[5deg] z-20 transition-all hover:scale-105 duration-500 overflow-hidden bg-white flex flex-col">
                {/* Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-[10px] text-black">C</div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-black leading-none">communitie.hyd</span>
                      <span className="text-[9px] text-black/50 leading-tight">♫ Valentine Special</span>
                    </div>
                  </div>
                  <div className="text-black/40 text-lg leading-none">...</div>
                </div>

                {/* Main Content Area */}
                <div className="relative flex-1 w-full overflow-hidden bg-white">
                  <Image 
                    src="/images/social/valentines.png"
                    alt="Valentines"
                    fill
                    className="object-cover opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                    <p className="font-cursive text-red-500 text-3xl drop-shadow-sm">What&apos;s</p>
                    <p className="font-cursive text-red-500 text-4xl -mt-2 drop-shadow-sm">Happening</p>
                    <h2 className="text-black font-black text-3xl leading-[0.9] mt-2 uppercase italic drop-shadow-md">
                      THIS <br /> VALENTINES
                    </h2>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-white border-t border-black/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-black text-base">
                      <span>❤️</span> <span>💬</span> <span>↗️</span>
                    </div>
                    <div className="text-black text-base">🔖</div>
                  </div>
                  <div className="text-black text-[10px] mb-1">
                    <span className="font-bold">Liked by sathwik and others</span>
                  </div>
                  <p className="text-black text-[10px] leading-tight line-clamp-2">
                    <span className="font-bold">communitie.hyd</span> Spread the love! ❤️ #Valentines
                  </p>
                </div>
              </div>

              {/* Card 2: Hyderabad Food (Lower Middle) */}
              <div className="absolute top-[38%] right-[35%] md:right-[25%] lg:right-[45%] w-[230px] md:w-[290px] aspect-[2/3] rounded-[40px] shadow-[0_60px_160px_rgba(0,0,0,0.65)] rotate-[-5deg] rotate-y-[-20deg] rotate-x-[0deg] z-30 transition-all hover:scale-105 duration-500 overflow-hidden bg-white flex flex-col">
                {/* Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-[10px] text-black">C</div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-black leading-none">communitie.hyd</span>
                      <span className="text-[9px] text-black/50 leading-tight">♫ Food Street</span>
                    </div>
                  </div>
                  <div className="text-black/40 text-lg leading-none">...</div>
                </div>

                {/* Main Content Area */}
                <div className="relative flex-1 w-full overflow-hidden bg-white">
                  <Image 
                    src="/images/social/hyderabad_food.png"
                    alt="Food"
                    fill
                    className="object-cover opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-center text-center">
                    <h2 className="text-[#E63946] font-black text-2xl leading-tight mb-4 tracking-tighter drop-shadow-md">
                      What all <br /> <span className="text-black">can you eat in</span> <br /> Hyderabad !
                    </h2>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-white border-t border-black/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-black text-base">
                      <span className="text-red-500">❤️</span> <span>💬</span> <span>↗️</span>
                    </div>
                    <div className="text-black text-base">🔖</div>
                  </div>
                  <div className="text-black text-[10px] mb-1">
                    <span className="font-bold">1,245 likes</span>
                  </div>
                  <p className="text-black text-[10px] leading-tight line-clamp-2">
                    <span className="font-bold">communitie.hyd</span> Foodies, assemble! 🍔 #HyderabadEats
                  </p>
                </div>
              </div>

              {/* Card 1: And i thought... (Bottom Left) */}
              <div className="absolute top-[58%] right-[55%] md:right-[40%] lg:right-[95%] w-[230px] md:w-[290px] aspect-[2/3] rounded-[40px] shadow-[0_70px_180px_rgba(0,0,0,0.75)] rotate-[17deg] rotate-y-[-30deg] rotate-x-[5deg] z-40 transition-all hover:scale-105 duration-500 overflow-hidden bg-black flex flex-col">
                {/* Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">C</div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white leading-none">communitie.hyd</span>
                      <span className="text-[9px] text-white/50 leading-tight">♫ Jhené Aiko • Eternal Sunshine</span>
                    </div>
                  </div>
                  <div className="text-white/40 text-lg leading-none">...</div>
                </div>

                {/* Main Image Area */}
                <div className="relative flex-1 w-full overflow-hidden">
                  <Image 
                    src="/images/social/cinematic_woman.png"
                    alt="Cinematic"
                    fill
                    className="object-cover opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="mt-4">
                      <p className="font-cursive text-white text-4xl leading-tight drop-shadow-lg">
                        And i thought <br /> they were the
                      </p>
                      <div className="inline-block border border-white rounded-full px-6 py-1.5 mt-2 bg-white/10 backdrop-blur-sm">
                        <span className="font-cursive text-white text-3xl">one</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-black">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-white text-base">
                      <span className="text-red-500">❤️</span> <span>💬</span> <span>↗️</span>
                    </div>
                    <div className="text-white text-base">🔖</div>
                  </div>
                  <div className="text-white text-[10px] mb-1">
                    <span className="font-bold">Liked by sathwik and others</span>
                  </div>
                  <p className="text-white text-[10px] leading-tight line-clamp-3 italic">
                    <span className="font-bold not-italic">communitie.hyd</span> you don&apos;t need instant love. you deserve the kind that stays, grows, and chooses you even on the hard days.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&family=Dancing+Script:wght@700&display=swap');
        h1 { font-family: 'Outfit', sans-serif; }
        .font-cursive { font-family: 'Dancing Script', cursive; }
      `}</style>
    </section>
  );
};

export default SocialCards;
