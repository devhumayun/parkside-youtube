import Image from "next/image"
import Link from "next/link"
import MaxWidthWrapper from "../max-width-wrapper"
import FooterSlider from "./footer-slider"

const Footer = () => {
    return (
        <>
            <FooterSlider />
            <div className="bg-black py-2">
                <MaxWidthWrapper>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 py-4">
                        <div className="flex justify-center items-center">
                            <Image
                                src={"/images/parksideblanc_e685f0ff-2f5b-44e7.png"}
                                alt="logo"
                                height={100}
                                width={200}
                                priority={100}
                            />
                        </div>
                        <div className="text-white flex flex-col gap-2 text-sm justify-center lg:items-start sm:items-center items-center font-noraml">
                            <span
                                className="text-center"
                                dangerouslySetInnerHTML={{
                                    __html: 'Heures d\'ouverture: Lundi - Vendredi : 9h00 - 17h00 (heure CET)',
                                }}
                            />
                            <span>72 Rue Compans, 75019 Paris, France</span>
                            <span>Contactez-nous : info@parkside-fr.com</span>
                        </div>
                    </div>
                </MaxWidthWrapper>
                <div className="py-4 border-t border-gray-800 text-sm text-white">
                    <MaxWidthWrapper>
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src="/images/payment-image.png"
                                    alt="payment-image"
                                    height={100}
                                    width={300}
                                    priority={100}
                                />
                            </div>
                            <div className="flex justify-center items-center lg:gap-6 gap-3 flex-wrap">
                                <Link href={"#"}>2024. Parkalde</Link>
                                <Link href={"#"}>Refund Policy</Link>
                                <Link href={"#"}>Privacy Policy</Link>
                                <Link href={"#"}>Terms of Use</Link>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </div>
        </>
    )
}

export default Footer
