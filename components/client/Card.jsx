'use client'
import Link from "next/link"


export const Prefetch = ({ href, children }) => {

    if (href) return (
        <Link href={href} prefetch className="grow">
            {children}
        </Link>
    )
    return children
}




export const Card = ({ prefix, data, actions }) => (
    <div className="p-4 flex flex-col gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 rounded-md shadow-md shadow-current/20">

        <Prefetch href={prefix && `${prefix}/${data.id}`}>

            Coloca aquí el contenido del Card

        </Prefetch >


        {actions &&
            <div className="flex gap-1 self-end" onClick={e => e.stopPropagation()}>
                {actions.map((Action, index) =>
                    <Action key={index} data={data} />
                )}
            </div>
        }
    </div >
)