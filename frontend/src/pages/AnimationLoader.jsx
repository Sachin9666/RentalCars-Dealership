import React, { useEffect, useState } from 'react';

const AnimationLoader = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        const timer = setTimeout(() => {
            finishLoading();
        }, 4000);
        return () => {
            clearTimeout(timeout);
            clearTimeout(timer);
        };
    }, [finishLoading]);

    return (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            {/* Background Image: BMW Illustration on White */}
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-[8000ms]"
                style={{
                    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/048/168/115/non_2x/bmw-3-series-car-illustration-white-background-cartoons-clipart-line-art-design-bmw-3-series-car-illustration-white-background-cartoons-clipart-line-art-design-free-vector.jpg")',
                    transform: isMounted ? 'scale(0.85)' : 'scale(1)',
                    filter: 'blur(8px) brightness(1)'
                }}
            >
            </div>

            {/* Dark Overlay for White Text visibility */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Typing Animation Text - White */}
                <div className="relative">
                    <h1 className="text-7xl md:text-9xl font-black text-white overflow-hidden border-r-8 border-white whitespace-nowrap animate-[typing_2.5s_steps(8)_forwards,blink_0.8s_infinite]"
                        style={{
                            width: '0',
                            letterSpacing: '-0.02em',
                            textShadow: '0 4px 30px rgba(0,0,0,0.5)'
                        }}>
                        LuxDrive
                    </h1>
                </div>

                <p className="mt-8 text-white/90 font-bold tracking-[0.8em] uppercase opacity-0 animate-[fadeIn_0.5s_ease-in_forwards_2s]">
                    Premium Car Rentals
                </p>
            </div>




            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes blink {
                    from, to { border-color: transparent }
                    50% { border-color: var(--color-brand-blue) }
                }
            `}} />
        </div>
    );
};

export default AnimationLoader;
