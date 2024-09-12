import Image from "next/image"

const Info = () => {
    return (
        <div className="py-6 lg:py-10 grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-4 ga-0">
            <Image
                src={"/images/info.png"}
                alt="info"
                width={400}
                height={400}
                priority={100}
                className="w-full lg:h-[500px] h-[300px] object-contain"
            />
            <div className="flex flex-col justify-center px-2">
                <h3 className="text-3xl font-bold  lg:w-[60%] w-[80%]">Available on iOS and Android</h3>
                <span className="py-1 text-[15px] leanding-[25px] w-[90%]">The PARKSIDE app is ready for you! With this app, you can connect your battery via Bluetooth and your charger via Wi-Fi, then set them up perfectly for your next project. Are you ready to connect?</span>
            </div>
        </div>
    )
}

export default Info
