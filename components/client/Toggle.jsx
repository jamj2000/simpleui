'use client'

import { useOptimistic, useTransition } from "react"
import { StarIcon, CrossIcon } from "../server/Icons"

export function Toggle({
    value = false,
    onChange,
    iconOn: IconOn = StarIcon,
    iconOff: IconOff = CrossIcon,
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
            role="switch"
            aria-checked={optimisticValue}
            onClick={handleClick}
            disabled={isPending}
            className={`relative flex h-8 w-8 cursor-pointer items-center rounded-full p-1`}
        >
            {optimisticValue
                ? <IconOn size={24} strokeWidth={2} color="green" />
                : <IconOff size={24} strokeWidth={2} color="red" />
            }
        </button>
    )
}
