import Link from "next/link"
import MaxWidthWrapper from "./max-width-wrapper"
import { Button } from "./ui/button"

const HeroSection = () => {
    return (
        <div
            style={{ backgroundImage: `url(/images/Banner_image.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="py-40 sm:py-40 lg:py-[310px] bg-no-repeat bg-center"
        >
            <MaxWidthWrapper>

                <div className="lg:pl-72 pl-0 flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-4xl text-white font-bold lg:text-5xl text-center lg:text-left">You have the tools to win.</h1>
                    </div>
                    <div className="text-center lg:text-left">
                        <Button variant={"outline"} className="px-5 py-3 text-[16px]"><Link href={"#"}>Buy All</Link> </Button>
                    </div>
                </div>

            </MaxWidthWrapper>
        </div>
    )
}

export default HeroSection
