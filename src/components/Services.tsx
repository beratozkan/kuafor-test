"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Droplet } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Saç Kesimi & Şekillendirme",
    description: "Yüz hatlarınıza en uygun modern ve klasik saç kesimleri.",
    price: "₺450",
    icon: <Scissors className="w-6 h-6 text-rose-500" />,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Saç Boyama & Röfle",
    description: "En kaliteli boyalarla uzun süre kalıcı, canlı ve parlak renkler.",
    price: "₺1200",
    icon: <Sparkles className="w-6 h-6 text-rose-500" />,
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Keratin & Bakım",
    description: "Yıpranmış saçlar için derinlemesine onarıcı spa bakımı.",
    price: "₺800",
    icon: <Droplet className="w-6 h-6 text-rose-500" />,
    image: "https://images.unsplash.com/photo-1516975080661-46808df2be8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Salon <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">Hizmetlerimiz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Usta ellerde kendinizi yeniden keşfedin. Kişiselleştirilmiş saç tasarımlarıyla her zaman en iyi versiyonunuz olun.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 relative">
                <div className="w-14 h-14 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg flex items-center justify-center absolute -top-7 right-8 group-hover:rotate-12 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 mt-2">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-500 font-bold text-xl">{service.price}</span>
                  <button className="text-sm font-semibold uppercase tracking-wider text-zinc-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                    Randevu Al &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
