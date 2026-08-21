"use client";

import { useEffect, useRef, useState } from "react";

const classInput = `
    disabled:text-zinc-400 placeholder-zinc-400
    text-zinc-800 dark:text-zinc-100
    bg-zinc-50 dark:bg-zinc-800
    font-semibold text-xl w-full px-4 py-3 rounded-xl
    border border-zinc-200 dark:border-zinc-700
    focus:outline-none focus:ring-2 focus:ring-amber-500/20
    focus:border-amber-500 transition-all
`;

const classLabel = `
    absolute left-3.75 top-0 -translate-y-1/2
    text-current bg-zinc-50 dark:bg-zinc-800
    text-sm @md:text-lg shadow-xs shadow-current/30
    pointer-events-none px-2 rounded-full
`;

export const InputSelect = ({
    label = "",
    name,
    options = [],
    disabled,
    multiple,
    className = "",
}) => {
    const containerRef = useRef(null);

    const getSelected = () =>
        multiple
            ? options
                .filter(([, value, checked]) => checked)
                .map(([, value]) => value)
            : options.findLast(([, value, checked]) => checked)?.[1] ?? null;

    const [selected, setSelected] = useState(getSelected);
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     setSelected(getSelected());
    // }, [options, multiple]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const displayLabel = multiple
        ? options
            .filter(([, value]) => selected.includes(value))
            .map(([lbl]) => lbl)
            .join(", ")
        : options.find(([, value]) => value === selected)?.[0] ?? "";

    return (
        <div
            ref={containerRef}
            className={`group relative ${className}`}
        >

            {/* div que hace foco para el label */}
            <div
                tabIndex={disabled ? -1 : 0}
                role="button"
                aria-expanded={open}
                aria-disabled={disabled}
                onClick={() => {
                    if (!disabled) {
                        setOpen((o) => !o);
                    }
                }}
                onKeyDown={(e) => {
                    if (
                        !disabled &&
                        (e.key === "Enter" || e.key === " ")
                    ) {
                        e.preventDefault();
                        setOpen((o) => !o);
                    }
                }}
                className={`cursor-pointer ${className}`}
            >
                <input
                    type="text"
                    value={displayLabel}
                    readOnly
                    disabled={disabled}
                    className={`peer ${classInput}`}
                />

                <span
                    className={`peer-disabled:text-zinc-400 ${classLabel}`}
                >
                    {label}
                </span>
            </div>


            {/* dropdown */}
            <div
                className={`
                    z-10 absolute top-full left-0 mt-1 w-full
                    ${open ? "block" : "hidden"}
                    rounded-lg bg-white dark:bg-zinc-800
                    border border-slate-200 dark:border-slate-700
                    p-4 shadow-xl
                `}
            >
                {options.map(([optionLabel, value]) => {
                    const checked = multiple
                        ? selected.includes(value)
                        : selected === value;

                    const onChange = () => {
                        if (multiple) {
                            setSelected((prev) =>
                                prev.includes(value)
                                    ? prev.filter((v) => v !== value)
                                    : [...prev, value]
                            );
                        } else {
                            setSelected(value);
                            setOpen(false);
                        }
                    };

                    return (
                        <label
                            key={value}
                            className="flex items-center gap-2 w-full"
                        >
                            <input
                                type={multiple ? "checkbox" : "radio"}
                                name={name}
                                value={value}
                                checked={checked}
                                onChange={onChange}
                                disabled={disabled}
                                className="hidden peer"
                            />

                            <span
                                className="
                                    mt-1 p-2 rounded-md
                                    peer-disabled:text-zinc-400
                                    peer-checked:bg-slate-200
                                    dark:peer-checked:bg-slate-700
                                    w-full
                                "
                            >
                                {optionLabel}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

// 'use client'

// import { useEffect, useRef, useState } from "react";


// const classInput = `disabled:text-zinc-400 placeholder-zinc-400
//                     text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800                     
//                     font-semibold text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 
//                     focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all`
// const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
//                     text-current bg-zinc-50 dark:bg-zinc-800 
//                     text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none 
//                     px-2 rounded-full
//                     `

// // const capitalize = (texto) => texto && texto.at(0).toUpperCase() + texto.slice(1).toLowerCase()



// export const InputSelect = ({ label = "", name, options, disabled, multiple, className = "" }) => {

//     const containerRef = useRef(null);

//     const labelSelect = label


//     const getSelected = () =>
//         multiple
//             ? options
//                 .filter(([_label, value, checked]) => checked)
//                 .map(([_label, value]) => value)
//             : options.findLast(([_label, value, checked]) => checked)?.[1] ?? null;

//     const [selected, setSelected] = useState(getSelected);
//     const [open, setOpen] = useState(false);


//     useEffect(() => {
//         setSelected(getSelected());
//     }, [options, multiple])

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (containerRef.current && !containerRef.current.contains(e.target)) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);




//     const Head = ({ label, disabled }) => (
//         <>
//             <input
//                 type="text"
//                 value={label}
//                 readOnly
//                 disabled={disabled}
//                 className={`peer ${classInput}`}
//             />
//             <span className={`peer-disabled:text-zinc-400 ${classLabel}`}>{labelSelect}</span>
//         </>

//     )



//     const Input = ({ label, value }) => {

//         const checked = multiple
//             ? selected.includes(value)
//             : selected === value;

//         const onChange = () => {
//             if (multiple) {
//                 setSelected(prev => prev.includes(value)
//                     ? prev.filter(v => v !== value)
//                     : [...prev, value]
//                 )
//             } else {
//                 setSelected(value)
//                 setOpen(false)
//             }
//         };

//         return (
//             <label className="flex items-center gap-2 w-full">
//                 <input
//                     type={multiple ? "checkbox" : "radio"}
//                     name={name}
//                     value={value}
//                     checked={checked}
//                     onChange={onChange}
//                     disabled={disabled}
//                     className="hidden peer"
//                 />
//                 <span className="mt-1 p-2 rounded-md peer-disabled:text-zinc-400 peer-checked:bg-slate-200 dark:peer-checked:bg-slate-700 w-full">
//                     {label}
//                 </span>
//             </label>
//         );
//     };



//     return (
//         <div ref={containerRef} className={`group relative ${className}`}>

//             <div tabIndex={0} role="button"
//                 onClick={() => setOpen(o => !o)}
//                 className={`cursor-pointer ${className}`}
//             >
//                 <Head
//                     label={multiple
//                         ? options
//                             .filter(([_label, value]) => selected.includes(value))
//                             .map(([lbl]) => lbl)
//                             .join(", ")
//                         : options.find(([_label, value]) => value === selected)?.[0] ?? ""
//                     }
//                     disabled={disabled}
//                 />
//             </div>

//             <div className={`z-10 absolute top-full left-0 mt-1 w-full ${open ? "block" : "hidden"} rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl`}>
//                 {options.map(([label, value, _]) => <Input key={value} label={label} value={value} />)}
//             </div>
//         </div>

//     )
// }