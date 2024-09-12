import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Cart = () => {

    let productItem = 0

    return (
        <>
            <Sheet>
                <SheetTrigger className="flex items-center group">
                    <ShoppingCart
                        className="w-6 h-6 items-center"
                    />
                    <span className="ml-2 text-gray-400 text-sm group-hover:text-gray-600">0</span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-center"> Cart (0) </SheetTitle>
                    </SheetHeader>

                    {
                        productItem > 0 ? (
                            <>
                                <div className="py-2 flex flex-col gap-2">
                                    <span className="text-bold">Cart items</span>
                                    <Separator className="my-4" />

                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Transation Fee</span>
                                        <span>$30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Total</span>
                                        <span>$300</span>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <Button className="w-full">
                                        <Link href={"/checkout"}>Go to checkout</Link>
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col justify-center items-center w-full h-full space-y-1">
                                <div>
                                    <Image
                                        src={"/images/empty-shopping-cart.png"}
                                        alt="empty cart image"
                                        height={100}
                                        width={100}
                                        priority={100}
                                    />
                                </div>
                                <div>
                                    <span>Your cart is empty</span>
                                </div>
                                <SheetTrigger asChild>
                                    <Link href={"/"}>
                                        Go to home
                                    </Link>
                                </SheetTrigger>
                            </div>
                        )
                    }


                </SheetContent>

            </Sheet>
        </>
    )
}

export default Cart
