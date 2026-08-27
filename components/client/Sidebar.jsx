'use client'

import { useState, useRef, useLayoutEffect } from "react"

export function Sidebar({
    children,
    className = "",
    width = "w-20 md:w-80",
    duration = 300,
    permanent = false
}) {
    const [open, setOpen] = useState(permanent)
    const [isRight, setIsRight] = useState(false)
    const panelRef = useRef(null)

    useLayoutEffect(() => {
        const updateSide = () => {
            if (!panelRef.current) return
            const rect = panelRef.current.getBoundingClientRect()

            const panelCenter = rect.left + rect.width / 2
            const screenCenter = window.innerWidth / 2

            setIsRight(panelCenter >= screenCenter)
        }
        updateSide()
        window.addEventListener("resize", updateSide)
        return () => window.removeEventListener("resize", updateSide)
    }, [])

    return (
        <div className={`${isRight ? 'flex' : 'flex  flex-row-reverse'}`}>
            <div
                ref={panelRef}
                className={`min-h-0 shrink-0 overflow-x-hidden ${open ? width : 'w-0'}`}
                style={{
                    transition: `width ${duration}ms ease-in-out`,
                }}
            >
                <aside
                    className={`
                    h-full overflow-y-auto
                    bg-slate-100
                    dark:bg-slate-800
                    shadow-xl
                    outline-none
                    scrollbar-thin
                    scrollbar-track-transparent
    
                    ${className}
                `}
                >
                    {children}
                </aside>
            </div>

            {!permanent &&
                <div
                    onClick={() => { setOpen(prev => !prev) }}
                    className="w-2 md:w-4 cursor-ew-resize"
                    aria-label="Abrir sidebar"
                >
                    <div className={'w-full h-full bg-slate-300 dark:bg-slate-700'} />
                </div>
            }

        </div>
    )
}