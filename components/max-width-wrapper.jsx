import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({ className, children }) => {
    return (
        <div
            className={cn("w-full mx-auto max-w-[1400px] px-2.5 md:px-20 sm:px-10")}
        >
            {children}
        </div>
    )
}

export default MaxWidthWrapper
