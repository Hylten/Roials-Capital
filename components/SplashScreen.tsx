import React, { useEffect, useState } from 'react';
import { ASSETS, handleImageFallback } from '../constants/assets';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'text-enter' | 'text-exit' | 'lion-enter' | 'lion-exit' | 'complete'>('text-enter');
  
  const text = "ROIALS CAPITAL".split('');

  useEffect(() => {
    const textExitTimer = setTimeout(() => {
      setStage('text-exit');
    }, 900);

    const lionEnterTimer = setTimeout(() => {
      setStage('lion-enter');
    }, 1500);

    const lionExitTimer = setTimeout(() => {
      setStage('lion-exit');
    }, 2600);

    const completeTimer = setTimeout(() => {
      setStage('complete');
      onComplete(); 
    }, 2800);

    return () => {
      clearTimeout(textExitTimer);
      clearTimeout(lionEnterTimer);
      clearTimeout(lionExitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  const isLionVisible = stage === 'lion-enter' || stage === 'lion-exit' || stage === 'complete';
  const isLionAnimating = stage === 'lion-enter' || stage === 'lion-exit' || stage === 'complete';

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center transition-opacity duration-[1000ms] ease-in-out pointer-events-none ${
        stage === 'complete' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        
        {(stage === 'text-enter' || stage === 'text-exit') && (
            <div className="flex items-center gap-[0.1em] md:gap-[0.2em] z-20">
                {text.map((char, index) => (
                    <span
                        key={index}
                        className={`font-display text-2xl md:text-5xl tracking-widest text-[#C5A059] inline-block uppercase will-change-transform ${
                            stage === 'text-enter' ? 'splash-char-enter' : 'splash-char-exit'
                        }`}
                        style={{
                            animationDelay: stage === 'text-enter' ? `${index * 30}ms` : `${index * 15}ms`,
                            minWidth: char === ' ' ? '0.5em' : 'auto'
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        )}

        <div 
            className={`splash-lion-layer absolute inset-0 flex items-center justify-center z-10 ${
                isLionVisible ? 'splash-lion-layer--visible' : 'splash-lion-layer--hidden'
            }`}
        >
            <img 
                src={ASSETS.lion.local}
                alt=""
                aria-hidden="true"
                onError={(e) => handleImageFallback(e, ASSETS.lion.remote)}
                className={`h-32 md:h-56 w-auto object-contain ${
                    isLionAnimating ? 'splash-lion-zoom' : 'splash-lion-settled'
                }`}
            />
        </div>

      </div>
    </div>
  );
};
