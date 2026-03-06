
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        title: "Boti Falls",
        location: "Eastern Region",
        image: "/assets/gallery-boti.png",
        category: "Adventure"
    },
    {
        id: 2,
        title: "Cape Coast Castle",
        location: "Central Region",
        image: "/assets/gallery-cape-coast.jpg",
        category: "Historical"
    },
    {
        id: 3,
        title: "Larabanga Mosque",
        location: "Savannah Region",
        image: "/assets/gallery-larabanga.png",
        category: "Religious"
    },
    {
        id: 4,
        title: "Manhyia Palace Museum",
        location: "Ashanti Region",
        image: "/assets/gallery-manhyia.png",
        category: "Historical"
    },
    {
        id: 5,
        title: "Mole National Park",
        location: "Savannah Region",
        image: "/assets/gallery-mole.jpg",
        category: "Nature"
    }
];

const Gallery: React.FC = () => {
    return (
        <section className="py-24 bg-downriver overflow-hidden" id="explore">
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-twenty-carat font-bold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
                        <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
                            <span className="white-gradient-text">Discover the</span> <span className="gold-gradient-text">Gold Coast</span>
                        </h2>
                        <p className="text-floral-white/60 text-lg leading-relaxed">
                            From the historic castles of the coast to the majestic mountains of the east,
                            explore the diverse landscapes and rich history of Ghana.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 text-xl font-bold bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                    >
                        Full Catalog <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Horizontal Scroll Area */}
            <div className="relative group">
                <div className="flex overflow-x-auto pb-12 px-6 scrollbar-hide gap-8 snap-x">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-none w-[350px] md:w-[450px] aspect-[4/5] relative rounded-[40px] overflow-hidden group/card cursor-pointer snap-center"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                                <div className="mb-4">
                                    <span className="px-4 py-1 rounded-full bg-twenty-carat/20 border border-twenty-carat/30 text-twenty-carat text-xs font-bold backdrop-blur-md uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-2">{item.title}</h3>
                                <div className="flex items-center gap-2 text-white/70 italic">
                                    <MapPin size={16} />
                                    <span>{item.location}</span>
                                </div>

                                {/* Expand effect */}
                                <div className="h-0 group-hover/card:h-12 transition-all duration-500 overflow-hidden mt-4 opacity-0 group-hover/card:opacity-100">
                                    <button className="text-white font-bold flex items-center gap-2">
                                        Learn More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {galleryItems.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-twenty-carat' : 'bg-white/20'}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
