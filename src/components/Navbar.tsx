import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics';

const Navbar: React.FC = () => {
    const [isCelebrating, setIsCelebrating] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const triggerCelebrate = () => {
        if (isCelebrating) return;
        setIsCelebrating(true);
        track('celebrate_tap');
        setTimeout(() => setIsCelebrating(false), 2000);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 md:py-6 px-4 md:px-10">
            {/* Celebration Overlay */}
            {/* ... keep celebration logic ... */}
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

            {/* Glass Notch Navigation - Desktop */}
            <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 px-10 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-b-[2rem] z-[60] border-x border-b border-white/[0.08] items-center gap-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] group transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20">
                <a href="#" className="text-white/90 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">Home</a>
                <a href="#history" className="text-white/50 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">History</a>
                <a href="#culture" className="text-white/50 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">Culture</a>
                <a href="#explore" className="text-white/50 hover:text-white text-xs lg:text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 active:scale-95">Explore</a>
            </div>

            <div className="w-full max-w-[1400px] flex items-center justify-between relative z-10">
                {/* Logo */}
                <div className="flex items-center gap-2 md:gap-3">
                    <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center p-[2px]"
                        style={{
                            background: `linear-gradient(135deg, #E21D24 0% 25%, #FCD34D 25% 75%, #006B3D 75% 100%)`
                        }}
                    >
                        <div className="w-full h-full bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-br from-white to-black rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
                        </div>
                    </div>
                    <span className="text-white font-black tracking-tighter text-sm md:text-lg lg:text-xl uppercase whitespace-nowrap">
                        Black Star <span className="text-twenty-carat">Heritage</span>
                    </span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[70] bg-white/5 rounded-full border border-white/10"
                >
                    <motion.span animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white rounded-full" />
                    <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-white rounded-full" />
                    <motion.span animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white rounded-full" />
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-20 left-0 right-0 p-6 bg-black/90 backdrop-blur-3xl rounded-3xl border border-white/10 lg:hidden flex flex-col gap-6 z-[65]"
                        >
                            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-bold tracking-widest uppercase">Home</a>
                            <a href="#history" onClick={() => setIsMenuOpen(false)} className="text-white/60 text-lg font-bold tracking-widest uppercase">History</a>
                            <a href="#culture" onClick={() => setIsMenuOpen(false)} className="text-white/60 text-lg font-bold tracking-widest uppercase">Culture</a>
                            <a href="#explore" onClick={() => setIsMenuOpen(false)} className="text-white/60 text-lg font-bold tracking-widest uppercase">Explore</a>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="hidden sm:flex items-center gap-6">
                    <div
                        onClick={triggerCelebrate}
                        className="flex items-center gap-3 md:gap-4 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer transition-all duration-300 px-4 md:px-7 py-2 md:py-3 rounded-full border border-white/10 group active:scale-95 shadow-lg active:shadow-none"
                    >
                        <span className="text-white text-[10px] md:text-sm font-black tracking-widest uppercase">Celebrate</span>
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white text-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
                            <Heart size={14} md:size={18} fill="currentColor" className="text-red-october" />
                        </div>
                    </div>
                </div>

                {/* Mobile Celebrate (Icon Only) */}
                <div
                    onClick={triggerCelebrate}
                    className="sm:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center text-black active:scale-90 transition-transform"
                >
                    <Heart size={18} fill="currentColor" className="text-red-october" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
