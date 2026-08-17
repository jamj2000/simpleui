'use client'
import { useRouter } from "next/navigation"


export function BackLink({ children, className = "" }) {
    const { back } = useRouter()

    return (

        <div
            onClick={back}
            className={`cursor-pointer inline-block hover:opacity-50 ${className}`}
        >
            {children}
        </div>

    )
}
