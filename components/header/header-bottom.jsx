"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MaxWidthWrapper from "../max-width-wrapper"

const HeaderBottom = ({ lang }) => {

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

    const pathname = usePathname()

    return (
        <div className="pt-1 pb-8">
            <MaxWidthWrapper>
                <div className="flex justify-center items-center">
                    <ul className="flex items-center gap-6">
                        {
                            menus &&
                            menus?.map((menu) => {

                                const isActive = menu?.href === `/${lang}` ? pathname === menu.href : pathname.startsWith(menu?.href)

                                return (
                                    <li key={menu?.href}
                                        className={cn("text-[16px] font-normal", isActive ? "font-semibold bg-black text-white px-2 py-1 rounded-md" : "")}
                                    >
                                        <Link href={menu?.href}> {menu?.title} </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default HeaderBottom
