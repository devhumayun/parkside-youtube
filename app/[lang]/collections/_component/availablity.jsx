"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormField, FormItem } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown } from "lucide-react"
import { useForm } from "react-hook-form"

const Availablity = () => {

    const form = useForm()

    return (
        <>
            <Popover className="bg-white">
                <PopoverTrigger>
                    <div className="flex gap-1 items-center">
                        <span>Availablity</span>
                        <ChevronDown size={15} />
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="flex justify-between items-center border-b pb-2">
                        <div className="flex gap-2 text-sm cursor-pointer">
                            <span>0</span>
                            <span>selected</span>
                        </div>
                        <span className="text-sm font-semibold cursor-pointer hover:underline">Reset</span>
                    </div>
                    <div className="py-4">
                        <Form>
                            <form {...form}>
                                <div className="flex flex-col gap-3">
                                    <FormField
                                        control={form.control}
                                        name="instock"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="instock" />
                                                    <label
                                                        htmlFor="instock"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        In stock (0)
                                                    </label>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="outstock"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="outstock" />
                                                    <label
                                                        htmlFor="outstock"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Out of stock (0)
                                                    </label>
                                                </div>
                                            </FormItem>
                                        )}
                                    />


                                </div>
                            </form>
                        </Form>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default Availablity
