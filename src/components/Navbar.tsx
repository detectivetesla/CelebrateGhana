import React from 'react';
import { User } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-black rounded-b-2xl z-[60] border-x border-b border-white/5"></div>

            <div className="w-full max-w-[1400px] flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-carol rounded-full flex items-center justify-center">
                        <div className="w-5 h-5 bg-white/40 rounded-full"></div>
                    </div>
                    <span className="text-white font-bold tracking-tight text-base lg:text-lg">Black Star Heritage</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-12">
                    <a href="#" className="text-white/90 hover:text-white text-sm lg:text-base font-semibold tracking-wide">Home</a>
                    <a href="#" className="text-white/60 hover:text-white text-sm lg:text-base font-semibold tracking-wide">About</a>
                    <a href="#" className="text-white/60 hover:text-white text-sm lg:text-base font-semibold tracking-wide">Contact</a>
                    <a href="#" className="text-white/60 hover:text-white text-sm lg:text-base font-semibold tracking-wide">Blog</a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-[#23262d] hover:bg-[#2c3038] cursor-pointer transition-colors px-6 py-2.5 rounded-full border border-white/5">
                        <span className="text-white text-[14px] lg:text-[15px] font-bold tracking-wide pl-1">Sign up</span>
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <User size={16} className="text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
