import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ lang }) => {
    return (
        <Link href={`/${lang}`}>
            <Image
                src={"/images/parksidenoir black logo.png"}
                alt='logo'
                width={180}
                height={150}
                priority={100}
            />
        </Link>
    )
}

export default Logo
