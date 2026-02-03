import React from 'react';

const CarLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12">
            <div className="relative">
                {/* Outer Ring */}
                <div className="w-20 h-20 border-4 border-brand-blue/20 rounded-full"></div>
                {/* Spinning Ring */}
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-t-brand-blue rounded-full animate-spin"></div>
                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue rounded-full animate-pulse"></div>
            </div>

            <p className="mt-8 text-text-muted font-bold tracking-widest uppercase animate-pulse text-sm">
                Optimizing for you...
            </p>
        </div>
    );
};

export default CarLoading;
