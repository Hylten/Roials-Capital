import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'text-enter' | 'text-exit' | 'lion-enter' | 'lion-exit' | 'complete'>('text-enter');
  
  const text = "ROIALS CAPITAL".split('');

  useEffect(() => {
    // ACCELERATED TIMELINE (~3 Seconds Total)
    
    // 0ms: Text Enter
    
    // 1000ms: Text Exit (Faster reading time)
    const textExitTimer = setTimeout(() => {
      setStage('text-exit');
    }, 1000);

    // 1600ms: Lion Enter (Quick cut to logo)
    const lionEnterTimer = setTimeout(() => {
      setStage('lion-enter');
    }, 1600);

    // 2800ms: Lion Exit
    const lionExitTimer = setTimeout(() => {
      setStage('lion-exit');
    }, 2800);

    // 3000ms: Complete (Trigger website reveal)
    const completeTimer = setTimeout(() => {
      setStage('complete');
      onComplete(); 
    }, 3000);

    return () => {
      clearTimeout(textExitTimer);
      clearTimeout(lionEnterTimer);
      clearTimeout(lionExitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center transition-opacity duration-[1000ms] ease-in-out pointer-events-none ${
        stage === 'complete' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        
        {/* PHASE 1 & 2: TEXT ANIMATION */}
        {(stage === 'text-enter' || stage === 'text-exit') && (
            <div className="flex items-center gap-[0.1em] md:gap-[0.2em] z-20">
                {text.map((char, index) => (
                    <span
                        key={index}
                        className={`font-display text-2xl md:text-5xl tracking-widest text-[#C5A059] inline-block uppercase will-change-transform ${
                            stage === 'text-enter' 
                                ? 'opacity-0 animate-[fallChar_0.5s_cubic-bezier(0.25,1,0.5,1)_forwards]' 
                                : 'opacity-100 animate-[pirouette_0.4s_ease-in_forwards]'
                        }`}
                        style={{
                            // Much tighter staggering
                            animationDelay: stage === 'text-enter' ? `${index * 30}ms` : `${index * 15}ms`,
                            minWidth: char === ' ' ? '0.5em' : 'auto'
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        )}

        {/* PHASE 3: LION ANIMATION */}
        <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out z-10 ${
                stage === 'lion-enter' ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <img 
                src="https://i.postimg.cc/rFZDjGDT/Lion-King-ROIALS-Chat-GPT-Image-Mar-26-2025-09-42-11-AM-removebg-preview.png" 
                alt="Roials Capital Lion" 
                className={`h-32 md:h-56 w-auto object-contain ${
                    (stage === 'lion-enter' || stage === 'lion-exit') ? 'animate-[slowZoom_1.5s_ease-out_forwards]' : 'scale-90'
                }`}
            />
        </div>

      </div>

      <style>{`
        @keyframes fallChar {
          0% { 
            opacity: 0; 
            transform: translateY(-50px) scale(1.3); 
            filter: blur(8px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            filter: blur(0);
          }
        }

        @keyframes pirouette {
            0% {
                opacity: 1;
                transform: translateY(0) rotateY(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-50px) rotateY(180deg);
                filter: blur(4px);
            }
        }

        @keyframes slowZoom {
          from { 
            transform: scale(0.85); 
            filter: brightness(0.9);
          }
          to { 
            transform: scale(1.3); 
            filter: brightness(1.1);
          }
        }
      `}</style>
    </div>
  );
};