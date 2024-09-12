"use client"

import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const Coupon = () => {

    const form = useForm()

    return (
        <>
            <Form {...form}>
                <form>
                    <div className="flex w-full justify-center items-center max-w-sm space-x-2">
                        <div className="w-[80%]">
                            <FormField
                                control={form.control}
                                name="coupon"
                                render={({ field }) => (
                                    <FormItem className="bg-white">
                                        <Input placeholder="email" {...form} />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-[20%]">
                            <Button type="submit" className=" bg-[#4CAF50]"> Apply </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </>
    )
}

export default Coupon
