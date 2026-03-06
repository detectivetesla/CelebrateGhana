import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const History: React.FC = () => {
    const images = [
        '/assets/history-1.jpg',
        '/assets/history-2.jpg',
        '/assets/history-3.jpg',
        '/assets/history-4.jpg',
        '/assets/history-5.jpg',
        '/assets/history-6.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (selectedImage) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length, selectedImage]);

    return (
        <section className="py-24 bg-floral-white relative overflow-hidden" id="history">
            {/* Background Wallpapers */}
            <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center opacity-[0.08]"
                    style={{ backgroundImage: `url('/assets/bg-adinkra-symbols.jpg')` }}
                />
            </div>
            <div
                className="absolute top-0 right-0 w-1/2 h-full -skew-x-12 translate-x-1/4 pointer-events-none overflow-hidden"
            >
                <div
                    className="w-full h-full bg-cover bg-center opacity-[0.15]"
                    style={{ backgroundImage: `url('/assets/bg-heritage-art.jpg')` }}
                />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center"
                    >
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-twenty-carat/20 rounded-full blur-3xl"></div>

                        {/* Image Container */}
                        <div
                            className="relative w-full max-w-[450px] h-[550px] rounded-[60px] shadow-2xl z-10 border-8 border-white overflow-hidden bg-downriver/5 group mx-auto cursor-zoom-in"
                            onClick={() => setSelectedImage(images[currentIndex])}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`History Image ${currentIndex + 1}`}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </AnimatePresence>

                            {/* Pagination Dots (Eclipses) */}
                            <div
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                                            ? "bg-twenty-carat w-6"
                                            : "bg-white/50 hover:bg-white"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ghana-green/10 rounded-full blur-3xl"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-downriver"
                    >
                        <span className="text-red-october font-bold tracking-widest uppercase text-sm mb-4 block">Our Story Since 1957</span>
                        <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">A Legacy of <br /><span className="text-twenty-carat">Self-Reliance</span></h2>
                        <p className="text-xl text-downriver/70 mb-8 leading-relaxed">
                            On March 6th, 1957, Ghana became the first country in sub-Saharan Africa
                            to break free from colonial rule. Led by Dr. Kwame Nkrumah, our nation
                            inspired a continent to rise and claim its destiny as the "Black Star of Africa."
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    id: "01",
                                    title: "Pan-African Leadership",
                                    desc: "Ghana has always been at the forefront of African unity, harboring the sparks of liberation and development.",
                                    color: "bg-ghana-green/10 text-ghana-green"
                                },
                                {
                                    id: "02",
                                    title: "Cultural Renaissance",
                                    desc: "A vibrant blend of tradition and modernity, from the rhythmic kente weaves to the pulse of highlife music.",
                                    color: "bg-red-october/10 text-red-october"
                                },
                                {
                                    id: "03",
                                    title: "Democratic Peace",
                                    desc: "Celebrated as a beacon of stability and the gateway to Africa, fostering growth and hospitality.",
                                    color: "bg-twenty-carat/10 text-twenty-carat"
                                }
                            ].map((item) => (
                                <div key={item.id} className="flex gap-4 group cursor-default">
                                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center font-bold shrink-0 transition-transform group-hover:scale-110`}>
                                        {item.id}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1 group-hover:text-twenty-carat transition-colors">{item.title}</h4>
                                        <p className="text-downriver/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors border border-white/10 z-10"
                            onClick={() => setSelectedImage(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-7xl h-full flex items-center justify-center pointer-events-none"
                        >
                            <img
                                src={selectedImage}
                                alt="Ghana History Detail"
                                className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border-4 border-white/10"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default History;


