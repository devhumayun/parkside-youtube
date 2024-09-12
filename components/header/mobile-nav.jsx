"use client"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Separator } from "../ui/separator"

const MobileNav = ({ lang }) => {

    const pathname = usePathname()

    const menus = [
        {
            title: "Welcome",
            href: `/${lang}`
        },
        {
            title: "Garden",
            href: `/${lang}/collections/garden`
        },
        {
            title: "Workshop",
            href: `/${lang}/collections/workshop`
        },
        {
            title: "Tools",
            href: `/${lang}/collections/tools`
        },
        {
            title: "Contact us",
            href: `/${lang}/collections/contact-us`
        }
    ]

    return (
        <>
            <Sheet>
                <SheetTrigger className="flex items-center">
                    <Menu />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left">Menu</SheetHeader>
                    <Separator className="my-4" />
                    <div className="">
                        <ul className="flex flex-col gap-6">
                            {
                                menus &&
                                menus?.map((menu) => {

                                    const isActive = menu?.href === `/${lang}` ? pathname === menu.href : pathname.startsWith(menu?.href)

                                    return (
                                        <li key={menu?.href}
                                            className={cn("text-[16px] font-normal", isActive ? "font-semibold bg-[#ECECEC] text-black px-2 py-3 rounded-md" : "")}
                                        >
                                            <SheetTrigger asChild>
                                                <Link href={menu?.href}> {menu?.title} </Link>
                                            </SheetTrigger>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileNav
