import HeaderBottom from "./header-bottom"
import HeaderTop from "./header-top"
import MobileHeader from "./mobile-header"

const Header = ({ lang }) => {
    return (
        <div className='bg-white sticky z-[99] top-0 inset-x-0'>
            <div className="hidden sm:block border-b shadow-sm">
                <HeaderTop lang={lang} />
                <HeaderBottom lang={lang} />
            </div>
            <div className="block sm:hidden">
                <MobileHeader lang={lang} />
            </div>
        </div>
    )
}

export default Header
