import { useState } from "react";
import { TrendingUp, ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                        {/* LOGO */}
                        <a href="#" className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b2341] text-yellow-400">
                                <TrendingUp size={25} />
                            </div>

                            <div>
                                <h1 className="text-xl font-extrabold tracking-tight">
                                    Core<span className="text-blue-600">Digital</span>
                                </h1>
                                <p className="text-[10px] font-medium tracking-[0.2em] text-slate-500">
                                    DIGITAL MARKETING
                                </p>
                            </div>
                        </a>

                        {/* DESKTOP MENU */}
                        <div className="hidden items-center gap-8 md:flex">
                            <a
                                href="#home"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Home
                            </a>

                            <a
                                href="#events"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Events
                            </a>

                            <a
                                href="#about"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Tentang Kami
                            </a>

                            <a
                                href="#benefits"
                                className="text-sm font-medium text-slate-600 hover:text-blue-600"
                            >
                                Program
                            </a>
                        </div>

                        {/* CTA */}
                        <a
                            href="#events"
                            className="hidden items-center gap-2 rounded-full bg-[#0b2341] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 md:flex"
                        >
                            Lihat Event
                            <ArrowUpRight size={17} />
                        </a>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="rounded-lg p-2 md:hidden"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    {menuOpen && (
                        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
                            <div className="flex flex-col gap-4">
                                <a href="#home" onClick={() => setMenuOpen(false)}>
                                    Home
                                </a>
                                <a href="#events" onClick={() => setMenuOpen(false)}>
                                    Events
                                </a>
                                <a href="#about" onClick={() => setMenuOpen(false)}>
                                    Tentang Kami
                                </a>
                                <a href="#benefits" onClick={() => setMenuOpen(false)}>
                                    Program
                                </a>
                            </div>
                        </div>
                    )}
                </nav>
    </>
      
    
  )
}

export default Navbar
