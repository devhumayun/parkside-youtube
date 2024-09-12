import MaxWidthWrapper from "../max-width-wrapper"
import Cart from "./cart"
import Logo from "./logo"
import SearchBar from "./searchbar"

const HeaderTop = ({ lang }) => {
    return (
        <>
            <div className="py-5">
                <MaxWidthWrapper>
                    <div className="flex justify-between items-center">
                        <SearchBar />
                        <Logo lang={lang} />
                        <Cart />
                    </div>
                </MaxWidthWrapper>
            </div>
        </>
    )
}

export default HeaderTop
