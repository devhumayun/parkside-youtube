import MaxWidthWrapper from "@/components/max-width-wrapper";
import Info from "../_components/info";
import ProductDetails from "../_components/product-details";
import ProductImageGallery from "../_components/product-image-gallery";
import RelatedProducts from "../_components/related-products";

const ProductPage = () => {
  const product = {
    id: 1,
    title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
    image: "/images/133778-12.webp",
    gallery: [
      "/images/gcp6a63c4ef3881492f97ba148d77cdd723-600x450.webp",
      "/images/gcp27ff442ce7d44041bb2059c45bcad.webp",
      "/images/gcp386f003eab2c4ba9836b5b38af3e12.webp",
      "/images/gcpc2c4247c719f4db0933ee7d58740d201.webp",
    ],
    reg_price: 59.99,
    sale_price: 14.99,
    description:
      "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
  };

  return (
    <div className="bg-white">
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 py-8">
          <div>
            <ProductImageGallery
              cover={product?.image}
              gallery={product?.gallery}
            />
          </div>
          <div>
            <ProductDetails product={product} />
          </div>
        </div>
        <Info />
        <RelatedProducts />
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductPage;
