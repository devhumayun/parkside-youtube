import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

const ProductCard = ({ product }) => {

    console.log(product?.image);


    return (
        <>
            <Card className="lg:w-[300px] md:w-[300px] sm:w-[200px] w-full overflow-hidden group">
                <CardContent>
                    <Link href={`/product/${product?.id}`}>
                        <div className="relative">
                            <Image
                                src={`${product?.image}`}
                                alt={product?.title}
                                height={200}
                                width={300}
                                priority={100}
                                className="w-[300px] lg:h-[200px] h-[150px] object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                            <span className="text-white bg-[#CD272B] text-[12px] font-medium px-2 py-1 rounded-md rounded-bl-none rounded-tl-none absolute left-[-25px]">Clearece sale</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 pt-10">
                            <span className="text-center py-2 font-semibold lg:text-[16px] lg:leading-6 text-sm group-hover:underline">{product?.title}</span>
                            <div className="flex justify-center items-center gap-2">
                                {
                                    product?.sale_price &&
                                    <span className="lg:text-[16px] sm:text-[14px] text-[14px] font-semibold">€{product?.sale_price}</span>
                                }
                                {
                                    product?.reg_price &&
                                    <span className="lg:text-[12px] sm:text-[12px] text-[12px] font-semibold line-through">€{product?.reg_price}</span>
                                }
                            </div>
                        </div>
                    </Link>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductCard
