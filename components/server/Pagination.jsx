'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"




const ChevronLeftIcon = () => (
    < svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15 18l-6-6 6-6" />
    </svg >
)


const ChevronRightIcon = () => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 18l6-6-6-6" />
    </svg>
)



export function Pagination({ pages, page, limit }) {


    return (
        <div className="w-fit self-center p-2 flex justify-center gap-2 shadow-md rounded-md bg-slate-100 dark:bg-slate-700">

            {page > 1
                ? (
                    <Link href={`?page=${page - 1}&limit=${limit}`}
                        className="p-2 rounded-md grid place-content-center hover:bg-slate-500 hover:text-slate-100 bg-slate-200 dark:bg-slate-800"
                    >
                        <ChevronLeftIcon />
                    </Link>
                ) : (
                    <div className="p-2 rounded-md text-slate-400 grid place-content-center">
                        <ChevronLeftIcon />
                    </div>
                )}


            <div className="max-w-60 flex items-center overflow-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-slate-100 dark:scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-500">
                {Array.from({ length: pages }, (_, i) => i + 1).map((numPage) => (
                    <PageNumber key={numPage} numPage={numPage} limit={limit} selected={numPage == page} />
                ))}
            </div>


            {page < pages
                ? (
                    <Link href={`?page=${page + 1}&limit=${limit}`}
                        className="p-2 rounded-md grid place-content-center hover:bg-slate-500 hover:text-slate-100 bg-slate-200 dark:bg-slate-800"
                    >
                        <ChevronRightIcon />
                    </Link>
                ) : (
                    <div className="p-2 rounded-md text-slate-400 grid place-content-center">
                        <ChevronRightIcon />
                    </div>
                )}
        </div>
    )
}



const PageNumber = ({ numPage = 1, limit, selected }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (selected) {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    }, [selected]);

    return (
        <Link
            ref={ref}
            href={`?page=${numPage}&limit=${limit}`}
            className={`p-2 rounded-md hover:bg-slate-500 hover:text-slate-100 ${selected ? "bg-black text-white" : ""}`}
        >
            {numPage}
        </Link>
    )

}