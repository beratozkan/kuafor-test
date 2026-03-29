"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center object-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/70 dark:to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Premium Güzellik Deneyimi</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Güzelliğinizin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
                Yeni Adresi
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Uzman kuaför salonumuzda tarzınızı yenileyin ve seçkin yüz, saç ve vücut kozmetik ürünlerini tek tıkla kapınıza getirin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-medium transition-all hover:scale-105 active:scale-95 group"
              >
                Randevu Al
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#shop" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium transition-all hover:scale-105 active:scale-95"
              >
                Mağazayı Keşfet
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
