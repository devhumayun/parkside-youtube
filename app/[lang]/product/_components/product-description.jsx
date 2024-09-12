import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"
const ProductDescription = ({ description }) => {
    return (
        <>
            <div className="py-6 px-2">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex gap-3 items-center">
                                <span className="w-5 h-5 flex justify-center items-center border-2 border-gray-400"> <Check size={16} /> </span>
                                <span className="text-[18px] font-bold">Product Description</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            {description}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className="flex gap-3 items-center">
                                <span className="w-5 h-5 flex justify-center items-center border-2 border-gray-400"> <Check size={16} /> </span>
                                <span className="text-[18px] font-bold">Delivery Times</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="pl-5">
                                <h3 className="py-4 text-xl font-bold">Delivery times in Europe</h3>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-normal">Please note: All orders require 1-2 business days processing
                                        time before shipping.</span>
                                    <ul className="flex flex-col gap-1">
                                        <li>• United Kingdom: 3-5 working days</li>
                                        <li>• Germany: 2-4 working days.</li>
                                        <li>• France: 3-5 working days</li>
                                        <li>• Spain: 3-6 working days</li>
                                        <li>• Italy: 3-6 working days</li>
                                        <li>• Netherlands: 2-4 working days</li>
                                        <li>• Belgium: 2-4 working days</li>
                                        <li>• Sweden: 3-5 working days</li>
                                        <li>• Denmark: 3-5 working days</li>
                                        <li>• Poland: 3-6 working days</li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Delivery :</span>
                                    <ul className="flex flex-col gap-1">
                                        <li>• Delivery times are estimates and begin from the date of
                                            shipment.</li>
                                        <li>• Delivery may be delayed due to unforeseen circumstances
                                            (e.g. weather conditions, carrier delays).</li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Follow up :</span>
                                    <ul className="flex flex-col gap-1">
                                        <li>• A shipping confirmation email with tracking information
                                            will be sent once your order has shipped.
                                        </li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Missed deliveries:</span>
                                    <ul>
                                        <li>• If a delivery is missed, the carrier will leave a notice with
                                            instructions for redelivery or collection.
                                        </li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Damaged or lost packages:</span>
                                    <ul>
                                        <li>• If your parcel arrives damaged or is lost, please contact
                                            our customer service at info@parkside-uk.com within 5 days
                                            of the delivery date.
                                        </li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Contact details:
                                    </span>
                                    <span>For any questions regarding delivery, please contact us:</span>
                                    <ul>
                                        <li>• Email: info@parkside-uk.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className="flex gap-3 items-center">
                                <span className="w-5 h-5 flex justify-center items-center border-2 border-gray-400"> <Check size={16} /> </span>
                                <span className="text-[18px] font-bold">Free returns within 30 days</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="pl-5">
                                <h3 className="py-4 text-xl font-bold">Parkside 30 Day Free Return Policy</h3>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Eligibility:</span>
                                    <ul className="flex flex-col gap-1">
                                        <li>• Return within 30 days of delivery.</li>
                                        <li>• Item must be unused, in original packaging, with receipt.</li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Non-returnable items:</span>
                                    <ul>
                                        <li>• Perishable goods, downloadable software, personal care
                                            items.</li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">How to return:</span>
                                    <ul className="flex flex-col gap-1">
                                        <li>1. <strong>Contact us</strong>: Email Returns@Parkside-uk.com with your
                                            order number and reason for return.</li>
                                        <li>2. <strong>Prepare the package</strong>: Pack the item securely with all
                                            original labels and documentation.</li>
                                        <li>3. <strong>Shipping</strong>: We will provide you with a prepaid shipping
                                            label for return.</li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Refunds:</span>
                                    <ul className="flex flex-col gap-1">
                                        <li>• We will notify you once your return has been received and
                                            processed.
                                        </li>
                                        <li>• Approved refunds will be credited to your original payment
                                            method within 5 business days.</li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Exchanges:</span>
                                    <ul>
                                        <li>• Email Returns@parkside-uk.com for exchanges. Use the
                                            prepaid label to return your item.
                                        </li>
                                    </ul>
                                </div>
                                <div className="pb-3 flex flex-col gap-3">
                                    <span className="font-semibold">Sale items:</span>
                                    <ul>
                                        <li>• Only regular priced items are refundable.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default ProductDescription
