
import { motion } from 'framer-motion';

const History: React.FC = () => {
    return (
        <section className="py-24 bg-floral-white relative overflow-hidden" id="history">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-downriver/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-twenty-carat/20 rounded-full blur-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1590483254199-0a672322394a?q=80&w=1000"
                            alt="Independence Arch Ghana"
                            className="rounded-[60px] shadow-2xl relative z-10 border-8 border-white"
                        />
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
        </section>
    );
};

export default History;
