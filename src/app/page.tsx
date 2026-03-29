import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      <Header />
      <Hero />
      <Services />
      <Shop />
      <Footer />
    </main>
  );
}
