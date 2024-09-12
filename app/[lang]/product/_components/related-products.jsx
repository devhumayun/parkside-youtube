import ProductCard from "@/components/product/product-card"

const RelatedProducts = () => {

    const products = [
        {
            id: 1,
            title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
            image: "/images/12.webp",
            reg_price: 59.99,
            sale_price: 14.99,
            description: "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable"
        },
        {
            id: 2,
            title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
            image: "/images/133778-12.webp",
            reg_price: 59.99,
            sale_price: 14.99,
            description: "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable"
        },
        {
            id: 3,
            title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
            image: "/images/motosierra-de-gasolina-zoom--1.webp",
            reg_price: 59.99,
            sale_price: 14.99,
            description: "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable"
        },
        {
            id: 4,
            title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
            image: "/images/gcp6a63c4ef3881492f97ba148d77cdd723-600x450.webp",
            reg_price: 59.99,
            sale_price: 14.99,
            description: "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable"
        },

    ]

    return (
        <>
            {
                products?.length > 0 &&
                <span className="pt-6 text-xl font-bold pb-2">More Products</span>
            }
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 pt-12 pb-4 justify-center items-center gap-3'>
                {
                    products?.length > 0 ? (
                        products?.map((product) => (
                            <div key={product?.id}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <span>No Products found</span>
                    )
                }
            </div>
        </>
    )
}

export default RelatedProducts
