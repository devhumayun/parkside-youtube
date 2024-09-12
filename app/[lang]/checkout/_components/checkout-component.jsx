"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useForm } from "react-hook-form"
import OrderSamary from "./order-samary"

const CheckoutComponent = () => {

    const form = useForm()

    return (
        <div className="py-6">
            <Card className="px-2 py-6">
                <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
                    <div>
                        <div>
                            <Form {...form}>
                                <form>
                                    <div className="flex flex-col gap-3">
                                        <span className="text-xl font-bold">Cantact details</span>
                                        <Separator className="my-1" />
                                        <FormField
                                            control={form.control}
                                            name="useremail"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input placeholder="email" {...form} />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Keep me informed about new products and exclusive offers
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 pt-3">
                                        <span className="text-xl font-bold">Delivery information</span>
                                        <Separator className="my-1" />
                                        <FormField
                                            control={form.control}
                                            name="firstname"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input placeholder="First Name" {...form} />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="surname"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input placeholder="Surname" {...form} />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input placeholder="Address" {...form} />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="city"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input placeholder="City" {...form} />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="postalcode"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input placeholder="Postal Code" {...form} />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input placeholder="Phone" {...form} />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" className="h-[45px]">FINALIZE THE PRUCHASE</Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                        <div className={"py-3 w-full flex justify-center items-center"}>
                            <Image
                                src={"/images/payment-image.png"}
                                alt="payment image"
                                height={100}
                                width={300}
                                className="object-cover"
                                priority={100}
                            />
                        </div>
                    </div>
                    <div> <OrderSamary /> </div>
                </div>
            </Card>
        </div>
    )
}

export default CheckoutComponent
