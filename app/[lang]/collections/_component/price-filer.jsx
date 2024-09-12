"use client"
import { Form, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown } from "lucide-react"
import { useForm } from "react-hook-form"

const PriceFilter = () => {

    const form = useForm()

    return (
        <Popover>
            <PopoverTrigger>
                <div className="flex gap-1 items-center">
                    <span>Price</span>
                    <ChevronDown size={15} />
                </div>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex gap-2 text-sm cursor-pointer">
                        <span>The highest price is
                            €54.00</span>
                    </div>
                    <span className="text-sm font-semibold cursor-pointer hover:underline">Reset</span>
                </div>
                <div className="py-4">
                    <Form>
                        <form {...form}>
                            <div className="flex gap-3">
                                <FormField
                                    control={form.control}
                                    name="of"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex item-center gap-1 justify-center">
                                                <span> €</span>
                                                <Input placeholder="Of" type="number text-sm font-normal" />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="has"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex item-center gap-1 justify-center">
                                                <span> €</span>
                                                <Input placeholder="Has" type="number text-sm font-normal" />
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
    )
}

export default PriceFilter
