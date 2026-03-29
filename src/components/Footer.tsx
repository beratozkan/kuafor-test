import { Scissors, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white mb-6">
              <Scissors className="w-8 h-8 text-rose-500" />
              <span>
                Lumina<span className="text-rose-500">.</span>
              </span>
            </div>
            <p className="mb-6 max-w-xs">
              Güzelliğinizin yeni adresi. Profesyonel kuaför hizmetleri ve seçkin kozmetik ürünlerini tek bir çatıda harmanladık.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                <span className="font-bold text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                <span className="font-bold text-sm">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                <span className="font-bold text-sm">FB</span>
              </a>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-rose-500 transition-colors">Ana Sayfa</a></li>
              <li><a href="#services" className="hover:text-rose-500 transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#shop" className="hover:text-rose-500 transition-colors">Mağaza</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Mağaza & Destek */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Mağaza & Destek</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">İade Politikası</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Kargo Takibi</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Şartlar ve Koşullar</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Gizlilik Politikası</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Moda Caddesi No: 123 Kadıköy / İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>+90 555 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>hello@luminasalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Lumina Salon & Cosmetics. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <span>Güvenli Ödeme:</span>
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-white/20 rounded"></div>
              <div className="w-8 h-5 bg-white/20 rounded"></div>
              <div className="w-8 h-5 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
