import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isCelebrating, setIsCelebrating] = useState(false);

    const triggerCelebrate = () => {
        if (isCelebrating) return;
        setIsCelebrating(true);
        setTimeout(() => setIsCelebrating(false), 2000);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-10">
            {/* Celebration Overlay */}
            <AnimatePresence>
                {isCelebrating && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center overflow-hidden"
                    >
                        {/* The Big Expanding Heart */}
                        <motion.div
                            initial={{ scale: 0, opacity: 1, rotate: 0 }}
                            animate={{ scale: 8, opacity: 0, rotate: 15 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <Heart size={120} fill="#E21D24" className="text-red-october filter drop-shadow-[0_0_30px_rgba(226,29,36,0.5)]" />
                        </motion.div>

                        {/* Particles Burst */}
                        {[...Array(50)].map((_, i) => {
                            const angle = Math.random() * Math.PI * 2;
                            const distance = 100 + Math.random() * 600;
                            const colors = ['#E21D24', '#FCD34D', '#006B3D']; // Ghana Red, Gold, Green
                            const color = colors[i % 3];
                            const size = 6 + Math.random() * 12;

                            return (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full"
                                    style={{
                                        backgroundColor: color,
                                        width: size,
                                        height: size,
                                        boxShadow: `0 0 15px ${color}`
                                    }}
                                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                    animate={{
                                        x: Math.cos(angle) * distance,
                                        y: Math.sin(angle) * distance,
                                        scale: 0,
                                        opacity: 0,
                                        rotate: Math.random() * 360
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.23, 1, 0.32, 1],
                                        delay: 0.1 + Math.random() * 0.1
                                    }}
                                />
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Glass Notch Navigation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-10 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-b-[2rem] z-[60] border-x border-b border-white/[0.08] flex items-center gap-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20">
                <a href="#" className="text-white/90 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">Home</a>
                <a href="#history" className="text-white/50 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">History</a>
                <a href="#culture" className="text-white/50 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">Culture</a>
                <a href="#explore" className="text-white/50 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">Explore</a>
            </div>

            <div className="w-full max-w-[1400px] flex items-center justify-between relative z-10">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center p-[2px]"
                        style={{
                            background: `linear-gradient(135deg, #E21D24 0% 25%, #FCD34D 25% 75%, #006B3D 75% 100%)`
                        }}
                    >
                        <div className="w-full h-full bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-gradient-to-br from-white to-black rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
                        </div>
                    </div>
                    <span className="text-white font-black tracking-tighter text-lg lg:text-xl uppercase">Black Star <span className="text-twenty-carat">Heritage</span></span>
                </div>

                {/* Main navbar space */}
                <div className="hidden md:block w-1/3"></div>

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                    <div
                        onClick={triggerCelebrate}
                        className="flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer transition-all duration-300 px-7 py-3 rounded-full border border-white/10 group active:scale-95 shadow-lg active:shadow-none"
                    >
                        <span className="text-white text-sm font-black tracking-widest uppercase">Celebrate</span>
                        <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
                            <Heart size={18} fill="currentColor" className="text-red-october" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
