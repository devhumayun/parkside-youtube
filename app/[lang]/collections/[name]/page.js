import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductCard from "@/components/product/product-card";
import Availablity from "../_component/availablity";
import PriceFilter from "../_component/price-filer";

const CategoryPage = ({ params: { name } }) => {
  const products = [
    {
      id: 1,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/12.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
    {
      id: 2,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/133778-12.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
    {
      id: 3,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/gcp6a63c4ef3881492f97ba148d77cdd723-600x450.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
    {
      id: 4,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/gcp27ff442ce7d44041bb2059c45bcad.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
    {
      id: 5,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/gcp386f003eab2c4ba9836b5b38af3e12.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
    {
      id: 6,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/gcp597f072a2abd4f19a1362cefa33db.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
    {
      id: 7,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/gcpc2c4247c719f4db0933ee7d58740d201.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
    {
      id: 8,
      title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
      image: "/images/motosierra-de-gasolina-zoom--1.webp",
      reg_price: 59.99,
      sale_price: 14.99,
      description:
        "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    },
  ];

  return (
    <div className="py-6">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-xl font-bold capitalize text-center">{name}</h2>
        </div>
        <div className="flex item-center gap-5 text-sm">
          <span>Filter</span>
          <Availablity />
          <PriceFilter />
        </div>
        <div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 pt-12 pb-4 justify-center items-center gap-3">
            {products?.length > 0 ? (
              products?.map((product) => (
                <div key={product?.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <span>No Products found</span>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CategoryPage;
