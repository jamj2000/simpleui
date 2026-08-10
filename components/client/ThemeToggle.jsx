"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const colorBase = "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`rounded-full p-2 cursor-pointer hover:outline hover:outline-slate-600 transition ${colorBase}`}
            aria-label="Cambiar tema"
        >
            {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </button>
    );
}


const MoonIcon = () => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.017 2.802a9.25 9.25 0 1010.181 10.181A7.25 7.25 0 1111.017 2.802zM1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026.059.438-.103.995-.606 1.299a5.75 5.75 0 107.894 7.894c.304-.503.861-.665 1.299-.606.455.062 1.026.42 1.026 1.137 0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12z"
            fill="black"
        />
    </svg>
)


const SunIcon = () => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zM3.669 3.716a.75.75 0 011.06-.047L6.95 5.7a.75.75 0 11-1.012 1.107L3.716 4.776a.75.75 0 01-.047-1.06zm16.662 0a.75.75 0 01-.047 1.06l-2.222 2.031A.75.75 0 0117.05 5.7l2.222-2.031a.75.75 0 011.06.047zM12 7.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM6.25 12a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0zm-5 0a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75zm18 0a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zm-2.224 5.025a.75.75 0 011.06 0l2.222 2.223a.75.75 0 01-1.06 1.06l-2.223-2.222a.75.75 0 010-1.06zm-10.051 0a.75.75 0 010 1.061l-2.223 2.222a.75.75 0 01-1.06-1.06l2.222-2.223a.75.75 0 011.06 0zM12 19.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75z"
            fill="white"
        />
    </svg>
)