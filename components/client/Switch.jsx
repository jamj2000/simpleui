'use client'

import { useOptimistic, useTransition } from "react"

export function Switch({
    labelOn,
    labelOff,
    value = false,
    onChange,
}) {
    const [isPending, startTransition] = useTransition()

    const [optimisticValue, setOptimisticValue] = useOptimistic(value)

    function handleClick(e) {
        e.stopPropagation()

        const newValue = !optimisticValue

        startTransition(async () => {
            setOptimisticValue(newValue)
            await onChange?.(newValue)
        })
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isPending}
            className={`
                relative flex w-31 cursor-pointer items-center rounded-full p-1
                transition-colors duration-300
                ${optimisticValue ? "bg-green-400" : "bg-red-400"}
            `}
        >
            <div
                className={`                    
                    absolute size-5 rounded-full bg-white shadow
                    transition-transform duration-300 ease-in-out
                    ${optimisticValue ? "translate-x-0" : "translate-x-24"}
                `}
            />

            <span className="truncate z-10 w-full text-center text-sm font-medium text-white">
                {optimisticValue ? labelOn : labelOff}
            </span>
        </button>
    )
}


