"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const ChevronLeftIcon = () => (
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
        <path d="M15 18l-6-6 6-6" />
    </svg>
);

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
);

export function Pagination({ pages }) {
    const searchParams = useSearchParams();

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const sort = searchParams.get("sort") || "";
    const direction = searchParams.get("direction") || "asc";

    const createUrl = (newPage) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", String(newPage));

        if (limit) {
            params.set("limit", String(limit));
        } else {
            params.delete("limit");
        }

        if (sort) {
            params.set("sort", sort);
        } else {
            params.delete("sort");
        }

        if (direction) {
            params.set("direction", direction);
        } else {
            params.delete("direction");
        }

        return `?${params.toString()}`;
    };

    return (
        <div className="w-fit self-center p-2 flex justify-center gap-2 shadow-md rounded-md bg-slate-100 dark:bg-slate-700">

            {page > 1 ? (
                <Link
                    href={createUrl(page - 1)}
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
                {Array.from(
                    { length: pages },
                    (_, i) => i + 1
                ).map((numPage) => (
                    <PageNumber
                        key={numPage}
                        numPage={numPage}
                        href={createUrl(numPage)}
                        selected={numPage === page}
                    />
                ))}
            </div>

            {page < pages ? (
                <Link
                    href={createUrl(page + 1)}
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
    );
}

const PageNumber = ({
    numPage = 1,
    href,
    selected = false,
}) => {
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
            href={href}
            className={`p-2 rounded-md hover:bg-slate-500 hover:text-slate-100 ${selected ? "bg-black text-white" : ""
                }`}
        >
            {numPage}
        </Link>
    );
};

// 'use client'

// import Link from "next/link"
// import { useEffect, useRef } from "react"
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'



// const ChevronLeftIcon = () => (
//     < svg
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//     >
//         <path d="M15 18l-6-6 6-6" />
//     </svg >
// )


// const ChevronRightIcon = () => (
//     <svg
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//     >
//         <path d="M9 18l6-6-6-6" />
//     </svg>
// )



// export function Pagination({ pages, page, limit }) {
//     const router = useRouter()
//     const pathname = usePathname()
//     const searchParams = useSearchParams()

//     const nextSearchParams = new URLSearchParams(searchParams.toString())
//     nextSearchParams.delete('foo')



//     const page = searchParams.get('page') || 1;
//     const limit = searchParams.get('limit') || 10;
//     const sort = searchParams.get('sort') || '';
//     const direction = searchParams.get('direction') || 'asc';



//     return (
//         <div className="w-fit self-center p-2 flex justify-center gap-2 shadow-md rounded-md bg-slate-100 dark:bg-slate-700">

//             {page > 1
//                 ? (
//                     <Link href={`?page=${page - 1}&limit=${limit}&sort=${sort}&direction=${direction}`}
//                         className="p-2 rounded-md grid place-content-center hover:bg-slate-500 hover:text-slate-100 bg-slate-200 dark:bg-slate-800"
//                     >
//                         <ChevronLeftIcon />
//                     </Link>
//                 ) : (
//                     <div className="p-2 rounded-md text-slate-400 grid place-content-center">
//                         <ChevronLeftIcon />
//                     </div>
//                 )}


//             <div className="max-w-60 flex items-center overflow-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-slate-100 dark:scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-500">
//                 {Array.from({ length: pages }, (_, i) => i + 1).map((numPage) => (
//                     <PageNumber key={numPage} numPage={numPage} limit={limit} sort={sort} direction={direction} selected={numPage == page} />
//                 ))}
//             </div>


//             {page < pages
//                 ? (
//                     <Link href={`?page=${page + 1}&limit=${limit}&sort=${sort}&direction=${direction}`}
//                         className="p-2 rounded-md grid place-content-center hover:bg-slate-500 hover:text-slate-100 bg-slate-200 dark:bg-slate-800"
//                     >
//                         <ChevronRightIcon />
//                     </Link>
//                 ) : (
//                     <div className="p-2 rounded-md text-slate-400 grid place-content-center">
//                         <ChevronRightIcon />
//                     </div>
//                 )}
//         </div>
//     )
// }



// const PageNumber = ({ numPage = 1, limit, sort, direction, selected = false }) => {
//     const ref = useRef(null);

//     useEffect(() => {
//         if (selected) {
//             ref.current?.scrollIntoView({
//                 behavior: "smooth",
//                 block: "center",
//                 inline: "center",
//             });
//         }
//     }, [selected]);

//     return (
//         <Link
//             ref={ref}
//             href={`?page=${numPage}&limit=${limit}&sort=${sort}&direction=${direction}`}
//             className={`p-2 rounded-md hover:bg-slate-500 hover:text-slate-100 ${selected ? "bg-black text-white" : ""}`}
//         >
//             {numPage}
//         </Link>
//     )

// }