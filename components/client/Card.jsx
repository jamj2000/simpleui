'use client'


export const Card = ({ data, actions }) => (
    <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 flex flex-col h-full shadow-md shadow-current/20">

        Coloca aquí el contenido del Card

        {actions &&
            <div className="flex gap-1 self-end" onClick={e => e.stopPropagation()}>
                {actions.map((Action, index) => (
                    <Action
                        key={index}
                        data={data}
                    />
                ))}
            </div>
        }
    </div>
)