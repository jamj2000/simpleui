'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


const classBase = "w-full md:w-fit inline-flex gap-2 items-center align-middle transition duration-300"

export function MenuLink({
    href,
    children,
    classCheck = "bg-slate-600 text-white",
    classHover = "hover:underline hover:underline-offset-8 hover:bg-slate-200 dark:hover:bg-slate-500 hover:text-current",
    classActive = "active:decoration-2 active:decoration-blue-400",
    className = "px-4 py-2 rounded-md"
}) {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`${classBase} ${className} ${classActive} ${classHover}  ${pathname.endsWith(href) ? classCheck : ""}`}
        >
            {children}
        </Link>
    )
}
