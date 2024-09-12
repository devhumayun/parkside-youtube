import MaxWidthWrapper from "../max-width-wrapper"
import Cart from "./cart"
import Logo from "./logo"
import MobileNav from "./mobile-nav"
import SearchBar from "./searchbar"

const MobileHeader = ({ lang }) => {
    return (
        <div className="bg-white py-4 border-b shadow-sm">
            <MaxWidthWrapper>

                <div className="flex items-center justify-between px-2">
                    <div>
                        <MobileNav lang={lang} />
                    </div>
                    <div>
                        <Logo />
                    </div>
                    <div className="flex gap-2">
                        <SearchBar />
                        <Cart />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MobileHeader
