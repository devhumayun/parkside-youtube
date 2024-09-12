import { Check } from "lucide-react"
import Image from "next/image"
import AddToCart from "./add-to-cart"
import ProductDescription from "./product-description"

const ProductDetails = ({ product }) => {
    return (
        <>
            <div>
                <span className="text-3xl font-bold leading-10">{product?.title}</span>
                <div className="flex gap-2 justify-cneter items-center py-2">
                    {
                        product?.sale_price &&
                        <span className="lg:text-[24px] text-[#2E704C] sm:text-[18px] font-semibold">€{product?.sale_price}</span>
                    }
                    {
                        product?.reg_price &&
                        <span className="lg:text-[18px] text-[#000] sm:text-[12px] font-semibold line-through">€{product?.reg_price}</span>
                    }
                    <span className="text-white bg-[#CD272B] text-[12px] font-medium px-2 py-1 rounded-md">Clearance sale</span>
                </div>
                <div className="flex flex-col gap-3 py-2">
                    <div className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-[#2E704C] text-white flex justify-center items-center rounded-full"> <Check size={15} /> </span>
                        <span className="text-[16px] font-semibold">Free shipping in EU</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-[#2E704C] text-white flex justify-center items-center rounded-full"> <Check size={15} /> </span>
                        <span className="text-[16px] font-semibold">Easy returns for 30 days</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-[#2E704C] text-white flex justify-center items-center rounded-full"> <Check size={15} /> </span>
                        <span className="text-[16px] font-semibold">2 year warranty</span>
                    </div>
                </div>
                <AddToCart />
                <div className="w-full flex justify-center items-center py-3">
                    <Image
                        src={"/images/payment-image.png"}
                        width={300}
                        height={100}
                        priority={100}
                        alt="payment-image"
                    />
                </div>
                <div>
                    <ProductDescription description={product?.description} />
                </div>
            </div>
        </>
    )
}

export default ProductDetails
