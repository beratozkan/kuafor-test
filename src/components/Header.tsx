"use client";

import { ShoppingBag, Scissors, Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <Scissors className="w-8 h-8 text-rose-500" />
          <span>
            Lumina<span className="text-rose-500">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#hero" className="hover:text-rose-500 transition-colors">
            Ana Sayfa
          </a>
          <a href="#services" className="hover:text-rose-500 transition-colors">
            Hizmetler
          </a>
          <a href="#shop" className="hover:text-rose-500 transition-colors">
            Kozmetik Mağazası
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
              2
            </span>
          </button>
          
          <button 
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-b border-gray-100 dark:border-white/10"
          >
            <nav className="flex flex-col py-4 px-4 gap-4 pb-6">
              <a href="#hero" className="text-lg font-medium hover:text-rose-500" onClick={() => setIsMobileMenuOpen(false)}>Ana Sayfa</a>
              <a href="#services" className="text-lg font-medium hover:text-rose-500" onClick={() => setIsMobileMenuOpen(false)}>Hizmetler</a>
              <a href="#shop" className="text-lg font-medium hover:text-rose-500" onClick={() => setIsMobileMenuOpen(false)}>Kozmetik Mağazası</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
