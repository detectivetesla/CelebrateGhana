import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
    {
        id: 1,
        title: "NKRUMAH MAUSOLEUM",
        subtitle: "Heritage",
        category: "Monument",
        description: "The final resting place of Dr. Kwame Nkrumah, Ghana's first president and a pioneer of Pan-Africanism.",
        image: "/assets/hero-1.png"
    },
    {
        id: 2,
        title: "INDEPENDENCE ARCH",
        subtitle: "Freedom",
        category: "Landmark",
        description: "Built in 1961, this iconic arch celebrates Ghana's victory over colonial rule.",
        image: "/assets/hero-2-premium.png"
    },
    {
        id: 3,
        title: "BLACK STAR GATE",
        subtitle: "Justice",
        category: "Architecture",
        description: "A symbol of African pride and the quest for unity among all nations.",
        image: "/assets/hero-3-premium.png"
    },
    {
        id: 4,
        title: "CAPE COAST CASTLE",
        subtitle: "History",
        category: "Fortress",
        description: "A profound historical site featuring centuries-old cannons pointing towards the Atlantic Ocean.",
        image: "/assets/cape-coast-hero.png"
    },
    {
        id: 5,
        title: "JUBILEE HOUSE",
        subtitle: "Leadership",
        category: "Landmark",
        description: "The presidential palace of Ghana, featuring distinctive modern architecture inspired by the golden stool.",
        image: "/assets/jubilee-house-hero.png"
    },
    {
        id: 6,
        title: "ELMINA CASTLE",
        subtitle: "Heritage",
        category: "Fortress",
        description: "A monumental historical fort featuring its iconic white walls and striking coastal views.",
        image: "/assets/elmina-castle-hero.png"
    }
];

const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20
        }
    }
};

const Hero: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = HERO_SLIDES.length;

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // Auto-slide every 10 seconds for a more relaxed feel
    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentSlide = HERO_SLIDES[activeIndex];

    // The active card is the background/content on the left.
    // The cards on the right should only show the strictly 3 upcoming slides.
    const orderedSlides = [
        ...HERO_SLIDES.slice(activeIndex + 1),
        ...HERO_SLIDES.slice(0, activeIndex)
    ].slice(0, 3);

    return (
        <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
            {/* Dynamic Background */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${currentSlide.image})`
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col xl:flex-row items-center justify-between h-[80vh] pt-24">
                {/* Left Side: Content */}
                <motion.div
                    key={`content-${activeIndex}`}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full xl:w-[42%] text-center xl:text-left z-20 shrink-0"
                >
                    <motion.span
                        variants={itemVariants}
                        className="text-white/60 text-sm font-semibold tracking-[0.3em] uppercase mb-6 block"
                    >
                        {currentSlide.subtitle}
                    </motion.span>

                    <div className="flex flex-col gap-2 mb-8">
                        <motion.h1
                            variants={itemVariants}
                            className="text-[60px] md:text-[90px] xl:text-[110px] 2xl:text-[130px] leading-[0.8] font-display font-black uppercase tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-br from-red-october via-twenty-carat to-ghana-green"
                        >
                            GHANA
                        </motion.h1>
                        <motion.h1
                            variants={itemVariants}
                            className="text-[60px] md:text-[90px] xl:text-[110px] 2xl:text-[130px] leading-[0.8] font-display font-black uppercase tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-r from-red-october via-twenty-carat to-ghana-green"
                        >
                            70 YEARS
                        </motion.h1>
                    </div>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/60 text-sm md:text-base max-w-[85%] xl:max-w-[400px] mx-auto xl:mx-0 mb-10 leading-relaxed font-medium"
                    >
                        {currentSlide.description}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="btn-plus-explore cursor-pointer group inline-flex"
                    >
                        <div className="btn-circle-plus group-hover:bg-carol/80 transition-all duration-300">
                            <span>+</span>
                        </div>
                        <div className="btn-pill-outline group-hover:bg-white/5 transition-all duration-300 border-white/30 text-[11px]">
                            EXPLORE FULL GALLERY
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Rotational Navigation Cards (First larger, rest uniform) */}
                <div className="hidden xl:flex gap-5 items-end justify-end xl:w-[58%] z-30 translate-y-12 translate-x-12">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {orderedSlides.map((item, i) => {
                            const originalIndex = HERO_SLIDES.findIndex(s => s.id === item.id);

                            // First card bigger, others uniformly smaller
                            const dimensions = i === 0 ? { w: 320, h: 450 } : { w: 240, h: 340 };

                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    onClick={() => setActiveIndex(originalIndex)}
                                    initial={{ opacity: 0, x: 150 }}
                                    animate={{
                                        opacity: 1,
                                        width: dimensions.w,
                                        height: dimensions.h,
                                        x: 0,
                                        zIndex: 30 - i
                                    }}
                                    exit={{ opacity: 0, x: -100, transition: { duration: 0.4 } }}
                                    transition={{
                                        layout: { type: "spring" as const, stiffness: 200, damping: 25 },
                                        opacity: { duration: 0.6 },
                                        width: { duration: 0.6 },
                                        height: { duration: 0.6 }
                                    }}
                                    className={`rounded-sm overflow-hidden relative group cursor-pointer shadow-none`}
                                >
                                    <motion.img
                                        layoutId={`img-${item.id}`}
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105`}
                                    />
                                    <motion.div
                                        className={`absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-24`}
                                    >
                                        <span className="text-white/80 text-[11px] font-medium tracking-wider">{item.category}</span>
                                        <h3 className={`text-white font-black leading-tight tracking-wide mt-1 uppercase text-2xl max-w-[200px]`}>
                                            {item.title}
                                        </h3>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-16 left-0 right-0 z-20">
                <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between gap-16">
                    <div className="flex gap-6">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        >
                            <ChevronLeft size={28} />
                        </motion.button>
                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight size={28} />
                            </motion.button>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-12 flex-1 relative pr-[120px]">
                        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
                                className="absolute top-0 left-0 h-full bg-carol"
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                        <motion.span
                            key={`index-${activeIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white text-6xl font-display font-black tracking-tighter opacity-100 absolute right-0 font-display"
                        >
                            0{activeIndex + 1}
                        </motion.span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
