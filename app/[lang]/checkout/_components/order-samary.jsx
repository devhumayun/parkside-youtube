import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Coupon from "./coupon";

const OrderSamary = () => {

    const product = {
        id: 1,
        title: "PARKSIDE PERFORMANCE® PONCEUSE EXCENTRIQUE PPEXS 750 A1, 750 W",
        image: "/images/motosierra-de-gasolina-zoom--1.webp",
        gallery: [
            "/images/133778-1.webp",
            "/images/motosierra-de-gasolina-zoom--1.webp",
            "/images/133778-1.webp",
            "/images/motosierra-de-gasolina-zoom--1.webp",
        ],
        reg_price: 59.99,
        sale_price: 14.99,
        description:
            "Moteur puissant de 750 watts avec entraînement direct viaune plaque activable",
    };

    const savingPrice = product?.reg_price - product?.sale_price

    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <>
                <span className="text-xl font-bold">Order Sumary</span>
                <Separator className="my-2" />

                <div className="flex  gap-10 w-full pt-4 pb-5">
                    <div className="rounded-lg overflow-hidden w-[30%]">
                        <Image
                            src={product?.image}
                            alt={product?.title}
                            height={90}
                            width={90}
                            priority={100}
                            className="w-[90px] h-[90px] object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3 w-[70%]">
                        <span className="text-xl font-bold">{product?.title}</span>
                        <span className="font-semibold">Quantity : 1</span>
                        <span>€{product?.sale_price ? product?.sale_price : product?.reg_price}</span>
                    </div>
                </div>
                <Coupon />
                <div className="py-3 flex flex-col gap-3">
                    <div className="flex justify-between">
                        <span className="text-md">Usual price</span>
                        <span className="text-sm font-semibold">€{product?.reg_price}</span>
                    </div>
                    {
                        savingPrice &&
                        <div className="flex justify-between">
                            <span className="text-md">Savings</span>
                            <span className="text-sm font-semibold">€{savingPrice}</span>
                        </div>
                    }
                    <div className="flex justify-between">
                        <span className="text-md">Discount</span>
                        <span className="text-sm font-semibold">€0</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-md">Shipping</span>
                        <span className="text-sm font-semibold">€0</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-md">Sales tax</span>
                        <span className="text-sm font-semibold">€0</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-md font-bold">Total</span>
                        <span className="text-sm font-semibold">€{product?.sale_price}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 py-4">
                    <span className="text-xl font-bold">Why choose us?</span>
                    <div className="flex gap-4 py-2">
                        <div>
                            <Image
                                src={"/images/money_back.webp"}
                                alt="money_back"
                                height={120}
                                width={120}
                                priority={100}

                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col text-md font-bold">
                                <span>30 Day Money Back</span>
                                <span>Satisfaction Guarantee</span>
                            </div>
                            <span className="text-sm">f you are not satisfied with your products, we will give you a full refund, no questions asked.</span>
                        </div>
                    </div>
                    <div className="flex gap-4 py-2">
                        <div>
                            <Image
                                src={"/images/mail_truck.webp"}
                                alt="mail_truck"
                                height={120}
                                width={120}
                                priority={100}

                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col text-md font-bold">
                                <span>
                                    Over 45,579 orders</span>
                                <span>successfully shipped</span>
                            </div>
                            <span className="text-sm">We have made as many satisfied customers as orders we have shipped. All you need to do is join our big family.</span>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default OrderSamary
