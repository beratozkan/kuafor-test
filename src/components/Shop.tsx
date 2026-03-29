"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Lumina Nemlendirici Serum",
    category: "Cilt Bakımı",
    price: "₺350",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Yeni",
  },
  {
    id: 2,
    name: "Organik Saç Bakım Yağı",
    category: "Saç Bakımı",
    price: "₺280",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Çok Satan",
  },
  {
    id: 3,
    name: "Gece Onarıcı Göz Kremi",
    category: "Cilt Bakımı",
    price: "₺420",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "",
  },
  {
    id: 4,
    name: "Parlaklık Veren Şampuan",
    category: "Saç Bakımı",
    price: "₺150",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "%10 İndirim",
  }
];

export default function Shop() {
  return (
    <section id="shop" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            >
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">Kozmetik</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 dark:text-gray-400 text-lg"
            >
              Güzellik rutininizi tamamlayacak özel seçilmiş kozmetik koleksiyonumuz.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-flex items-center gap-2 font-semibold text-rose-500 hover:text-rose-600 transition-colors">
              Tüm Ürünleri Gör &rarr;
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-[4/5] mb-4">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-white">
                    {product.badge}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Add to Cart Button */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                    <ShoppingCart className="w-4 h-4" />
                    Sepete Ekle
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.category}</p>
                <h3 className="font-semibold text-lg mb-2 truncate group-hover:text-rose-500 transition-colors">
                  {product.name}
                </h3>
                <div className="font-bold text-lg">{product.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
