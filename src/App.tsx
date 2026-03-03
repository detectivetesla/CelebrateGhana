
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Gallery from './components/Gallery';
import Culture from './components/Culture';

function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <History />
      <Culture />
      <Gallery />

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-october/5 via-twenty-carat/5 to-ghana-green/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-12 text-downriver">
            Celebrating <span className="text-twenty-carat">70</span> Years
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-2xl text-downriver/70 font-light leading-relaxed">
              As we mark this historic milestone, let us celebrate the resilience,
              creativity, and unity that define the Ghanaian spirit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-xl px-12 py-5">
                Join the Movement
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-downriver text-floral-white/40 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="text-3xl font-display font-bold text-floral-white mb-2">GHANA<span className="text-twenty-carat">70</span></div>
              <p className="max-w-xs text-sm">Celebrating seventy years of peace, progress, and prosperity. The Black Star continues to shine bright across the globe.</p>
            </div>
            <div className="flex gap-12 text-sm font-medium">
              <div className="flex flex-col gap-3">
                <span className="text-floral-white font-bold mb-2">Heritage</span>
                <a href="#history" className="hover:text-twenty-carat transition-colors">Our History</a>
                <a href="#culture" className="hover:text-twenty-carat transition-colors">Culture</a>
                <a href="#explore" className="hover:text-twenty-carat transition-colors">Destinations</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-floral-white font-bold mb-2">Connect</span>
                <a href="#" className="hover:text-twenty-carat transition-colors">Twitter</a>
                <a href="#" className="hover:text-twenty-carat transition-colors">Instagram</a>
                <a href="#" className="hover:text-twenty-carat transition-colors">YouTube</a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs">
            <p>&copy; 2027 Ghana 70th Independence Anniversary Committee. Official Digital Experience.</p>
            <div className="flex gap-6">
              <a href="#">Privacy Framework</a>
              <a href="#">Terms of Celebration</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
