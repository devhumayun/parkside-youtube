"use client"
import Autoplay from "embla-carousel-autoplay"
import { CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

const FooterSlider = () => {
    const slideText = [
        {
            id: 1,
            title: "Free returns within 30 days"
        },
        {
            id: 2,
            title: "⭐23,900+ happy customers"
        },
        {
            id: 3,
            title: "2 year warranty"
        },
        {
            id: 4,
            title: "Free returns within 30 days"
        },
        {
            id: 5,
            title: "Free returns within 30 days"
        },
        {
            id: 6,
            title: "23,900+ happy customers"
        },
        {
            id: 7,
            title: "2 year warranty"
        },
        {
            id: 8,
            title: "Free returns within 30 days"
        },
    ]
    return (
        <Carousel className="w-full bg-black overflow-hidden py-4"
            plugins={[
                Autoplay({
                    delay: 2000
                })
            ]}
        >
            <CarouselContent>
                {
                    slideText?.map((text) => (
                        <CarouselItem key={text?.id} className="pl-1 md:basis-1/2 lg:basis-1/6">
                            <div>
                                <CardContent className="flex justify-center items-center">
                                    <span className="text-white text-[16px] font-medium">{text?.title}</span>
                                </CardContent>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}

export default FooterSlider
