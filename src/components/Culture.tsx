
import { motion } from 'framer-motion';

const Culture: React.FC = () => {
    return (
        <section className="py-32 bg-downriver relative overflow-hidden" id="culture">
            {/* Decorative BG */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={`h-full border-r ${i % 3 === 0 ? 'border-twenty-carat' : 'border-white/10'}`}></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="ghana-gradient-text font-black tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Spirit of the People
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-display font-black text-white leading-[0.9] flex flex-col items-center"
                    >
                        <span className="flex gap-4">
                            <span className="white-gradient-text">The</span>
                            <span className="red-gradient-text">Heart</span>
                            <span className="white-gradient-text px-2">of</span>
                        </span>
                        <span className="flex gap-4 mt-2">
                            <span className="green-gradient-text">Our</span>
                            <span className="gold-gradient-text">Nation</span>
                        </span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Kente Weaving",
                            tag: "Artistry",
                            img: "/assets/culture-kente.jpg",
                            desc: "Every thread tells a story of royalty, bravery, and ancestral wisdom.",
                            color: "text-ghana-green",
                            shadow: "hover:shadow-ghana-green/20"
                        },
                        {
                            title: "Jollof & Flavors",
                            tag: "Gastronomy",
                            img: "/assets/culture-jollof.jpg",
                            desc: "Taste the soul of West Africa in every bite of our legendary cuisine.",
                            color: "text-red-october",
                            shadow: "hover:shadow-red-october/20"
                        },
                        {
                            title: "Rythyms & Dance",
                            tag: "Performance",
                            img: "/assets/culture-dance.jpg",
                            desc: "From Adowa to Azonto, our spirits move to the beat of the talking drum.",
                            color: "text-twenty-carat",
                            shadow: "hover:shadow-twenty-carat/20"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card group hover:bg-white/10 transition-all duration-500 overflow-hidden hover:shadow-2xl ${item.shadow}`}
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <span className={`${item.color} text-xs font-bold uppercase tracking-widest mb-2 block`}>{item.tag}</span>
                                <h3 className="text-2xl font-bold mb-4 text-floral-white">{item.title}</h3>
                                <p className="text-floral-white/50 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Culture;
