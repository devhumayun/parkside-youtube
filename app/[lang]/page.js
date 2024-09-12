import FooterImage from "@/components/footer-image";
import HeroSection from "@/components/hero-section";
import InfoOne from "@/components/info-one";
import InfoTwo from "@/components/info-tow";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductList from "@/components/product/product-list";

const Welcome = () => {
  return (
    <>
      <HeroSection />
      <MaxWidthWrapper>
        <ProductList />
      </MaxWidthWrapper>
      <InfoOne />
      <InfoTwo />
      <FooterImage />
    </>
  );
};

export default Welcome;
