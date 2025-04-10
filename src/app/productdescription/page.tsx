import ConsultationRequest from "@/components/ConsultationRequest";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Nav from "@/components/Header";
import ProductBenefits from "@/components/ProductBenefits";
import RelatedProducts from "@/components/RelatedProducts";

export default function ProductDescription() {
  return (
    <div>
      <Nav />
      <Description />
      <ProductBenefits />
      <ConsultationRequest />
      <RelatedProducts />
      <Footer />
    </div>
  );
}
