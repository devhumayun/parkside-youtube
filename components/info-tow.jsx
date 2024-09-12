import Image from "next/image"
import MaxWidthWrapper from "./max-width-wrapper"

const InfoTwo = () => {
    return (
        <MaxWidthWrapper>
            <div className="grid lg:grid-cols-2  sm:grid-cols-1 grid-cols-1 lg:gap-16 gap-6 justify-center items-center py-6">
                <div className="lg:px-0 px-1 lg:order-first order-last">
                    <h2 className="lg:text-[40px] text-[30px] font-bold lg:leading-[46px] leading-[37px] w-[80%] mb-3">The greatest success is achieved by doing it nyourself.</h2>
                    <span className="text-sm leading-7 font-light">No other person embodies success like Arnold Schwarzenegger. That is why he is a perfect fit for our PARKSIDE team! Take inspiration from Arnold Schwarzenegger and take charge. It is really easy to do with PARKSIDE tools.</span>
                </div>
                <div className="rounded-md overflow-hidden order-first lg:order-last">
                    <Image
                        src={"/images/image1.webp"}
                        alt="infoone"
                        height={350}
                        width={700}
                        priority={100}
                        className="w-[700px] lg:h-[350px] h-[250px] object-cover"
                    />
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default InfoTwo
