'use client'

import { useState } from "react"

export function Sidebar({
    children,
    className = "",
    width = 320,
    duration = 300,
}) {
    const [open, setOpen] = useState(false)

    const toggleSidebar = () => {
        setOpen((value) => !value)
    }

    return (
        <>

            <div
                className="min-h-0 shrink-0 overflow-y-auto overflow-x-hidden"
                style={{
                    width: open ? width : 0,
                    transition: `width ${duration}ms ease-in-out`,
                }}
            >
                <aside
                    style={{ width }}
                    className={`
                        overflow-y-auto
                        bg-slate-100
                        dark:bg-slate-800
                        shadow-xl
                        p-6
                        ${className}
                    `}
                >
                    {children}
                </aside>
            </div>

            <button onClick={toggleSidebar} className="w-4 bg-blue-500 cursor-pointer" />

        </>
    )
}