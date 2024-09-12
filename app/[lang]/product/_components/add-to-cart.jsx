import { Button } from "@/components/ui/button"
import Link from "next/link"

const AddToCart = () => {
    return (
        <div className="py-3">
            <Button className={"w-full bg-[#2E704C] h-12 text-md font-semibold"}>
                <Link href={`/checkout`}>Add to cart</Link>
            </Button>
        </div>
    )
}

export default AddToCart
