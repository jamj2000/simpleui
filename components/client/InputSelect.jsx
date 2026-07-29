'use client'

import { useEffect, useState } from "react";


const classInput = `disabled:text-zinc-400 placeholder-zinc-400
                    text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800                     
                    font-semibold text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all`
const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                     text-sm md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full
                    `

const capitalize = (texto) => texto && texto.at(0).toUpperCase() + texto.slice(1).toLowerCase()



export const InputSelect = ({ label = "", name, values, disabled, multiple, className = "" }) => {

    const getSelected = () =>
        multiple
            ? values.filter(([, checked]) => checked).map(([v]) => v)
            : values.findLast(([, checked]) => checked)?.[0] ?? "";

    const [selected, setSelected] = useState(getSelected);

    useEffect(() => {
        setSelected(getSelected());
    }, [values, multiple])


    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSelected(
            multiple
                ? values.filter(([, checked]) => checked).map(([v]) => v)
                : values.findLast(([, checked]) => checked)?.[0] ?? values[0][0]
        );
    }, [values, multiple]);



    const Head = ({ value, disabled }) => (
        <>
            <input
                type="text"
                value={value}
                readOnly
                disabled={disabled}
                className={`peer ${classInput}`}
            />
            <span className={`peer-disabled:text-zinc-400 ${classLabel}`}>{multiple ? "Seleccione opciones" : label}</span>
        </>

    )



    const Input = ({ value }) => {

        const checked = multiple
            ? selected.includes(value)
            : selected === value;

        const onChange = () => {
            if (multiple) {
                setSelected(prev => prev.includes(value)
                    ? prev.filter(v => v !== value)
                    : [...prev, value]
                )
            } else {
                setSelected(value)
                setOpen(false)
            }
        };

        return (
            <label className="flex items-center gap-2 w-full">
                <input
                    type={multiple ? "checkbox" : "radio"}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className="hidden peer"
                />
                <span className="mt-1 p-2 rounded-md peer-disabled:text-zinc-400 peer-checked:bg-slate-200 dark:peer-checked:bg-slate-700 w-full">
                    {capitalize(value)}
                </span>
            </label>
        );
    };



    return (
        <div className={`group relative ${className}`}>

            <div tabIndex={0} role="button"
                onClick={() => setOpen(o => !o)}
                className={`cursor-pointer ${className}`}
            >
                <Head
                    value={multiple
                        ? selected.map(capitalize).join(", ")
                        : capitalize(selected)
                    }
                    disabled={disabled}
                />
            </div>

            <div className={`z-10 absolute top-full left-0 mt-1 w-full ${open ? "block" : "hidden"} focus-within:block group-focus-within:block rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl`}>
                {values.map(([value, _]) => <Input key={value} value={value} />)}
            </div>
        </div>

    )
}