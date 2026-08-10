'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



export function MenuLink({ href, children }) {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`peer-not-checked:hidden flex gap-2 items-center px-4 py-2 rounded-full active:bg-amber-700  hover:bg-slate-600 hover:text-white transition duration-300 ${pathname.endsWith(href) && 'bg-slate-700 text-white'}`}
        >
            {children}
        </Link>
    )
}
