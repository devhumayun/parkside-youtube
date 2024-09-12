"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ProductImageGallery = ({ cover, gallery }) => {

    const [currentImage, setCurrentImage] = useState(cover)

    return (
        <div>
            <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Image

                    src={currentImage}
                    alt="product-image"
                    height={300}
                    width={300}
                    priority={100}
                    className="w-[100%] lg:h-[500px] h-[250px] object-contain"
                />
            </motion.div>
            <div className="flex gap-4 py-1">
                {
                    gallery &&
                    gallery?.map((item, i) => {

                        console.log("Hello world" + item);


                        return (
                            <div key={i}>
                                <Image
                                    onClick={() => setCurrentImage(item)}
                                    src={item}
                                    alt="image"
                                    height={100}
                                    width={100}
                                    priority={100}
                                    className="w-[100%] lg:h-[100px] h-[80px] object-cover cursor-pointer"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductImageGallery
