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




export const Card2 = ({ prefix, data, actions }) => (

    <div className="p-4 xl:p-2 flex flex-col xl:items-center xl:flex-row gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 not-xl:rounded-md not-xl:shadow-md not-xl:shadow-current/20 xl:bg-inherit xl:dark:bg-inherit">

        <Prefetch href={prefix && `${prefix}/${data.id}`}>

            Coloca aquí el contenido del Card

        </Prefetch>


        {actions &&
            <div className="flex gap-1 self-end" onClick={e => e.stopPropagation()}>
                {actions.map((Action, index) =>
                    <Action key={index} data={data} />
                )}
            </div>
        }
    </div>
)