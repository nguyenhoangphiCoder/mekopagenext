import About from "@/components/About";
import Category from "@/components/Category";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Nav from "@/components/Header";
import Hero from "@/components/Hero";
import NewsEvent from "@/components/NewsEnvent";
import Product from "@/components/Product";

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
