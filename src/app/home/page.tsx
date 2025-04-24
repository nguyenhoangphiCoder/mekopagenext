import About from "@/app/home/components/About";
import Category from "@/components/Category";
import Certificate from "@/app/home/components/Certificate";
import Contact from "@/app/home/components/Contact";
import Feature from "@/app/home/components/Feature";
import Footer from "@/app/home/components/Footer";
import Nav from "@/app/home/components/Header";
import Hero from "@/app/home/components/Hero";
import NewsEvent from "@/app/home/components/NewsEnvent";
import Product from "@/app/home/components/Product";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      <div className="bg-[#fbfbfb] flex flex-col">
        <Hero />
        <Feature />
        <About />
        {/* <Category /> */}
        <Product />
        <Contact />
        <NewsEvent />
        <Certificate />
        <Footer />
      </div>
    </div>
  );
}
