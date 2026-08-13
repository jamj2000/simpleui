'use client'

// const classBase = "place-self-stretch p-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 rounded-md shadow-md shadow-current/20"
// const classXl = "xl:p-2 xl:grid xl:grid-cols-[2fr_3fr_1fr_1fr] xl:border-none xl:rounded-none xl:items-center xl:gap-4 xl:bg-inherit xl:dark:bg-inherit"

export const Card2 = ({ data, actions }) => (

    <div className={`
        place-self-stretch p-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 rounded-md shadow-md shadow-current/20
        xl:p-2 xl:grid xl:grid-cols-[2fr_3fr_1fr_1fr] xl:border-none xl:rounded-none xl:items-center xl:gap-4 xl:bg-inherit xl:dark:bg-inherit
        `}
    >
        Coloca aquí el contenido del Card

        <div className="mt-3 xl:mt-0 flex justify-end">
            {actions &&
                <div className="flex gap-1" onClick={e => e.stopPropagation()}>
                    {actions.map((Action, index) =>
                        <Action key={index} data={data} />
                    )}
                </div>
            }
        </div>
    </div>
)