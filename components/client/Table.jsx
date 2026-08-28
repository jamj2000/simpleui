"use client";


import { useState } from "react";
import { useRouter } from 'next/navigation'


const classTD = "px-2"


export function Table({
    data = [],
    columns = [],
    sort,
    direction = "asc",
    width = 1200,
    actions,
    prefix,
    children,

}) {

    const router = useRouter()

    const [orden, setOrden] = useState({
        columna: sort,
        direccion: direction,
    });

    const [busqueda, setBusqueda] = useState("")

    const originalData = data ?? [];

    const orderedData = [...originalData].sort((a, b) => {
        if (!orden.columna) return 0;

        const valorA = a[orden.columna] ?? "";
        const valorB = b[orden.columna] ?? "";

        let resultado = 0;

        if (
            typeof valorA === "string" &&
            typeof valorB === "string"
        ) {
            resultado = valorA.localeCompare(
                valorB,
                undefined,
                { sensitivity: "base" }
            );
        } else {
            resultado =
                valorA > valorB ? 1 :
                    valorA < valorB ? -1 :
                        0;
        }

        return orden.direccion === "asc"
            ? resultado
            : -resultado;
    });

    function ordenar(columna) {
        setOrden(actual => ({
            columna,
            direccion:
                actual.columna === columna &&
                    actual.direccion === "asc"
                    ? "desc"
                    : "asc",
        }));
    }


    return (
        <div className="container mx-auto my-4 overflow-hidden overflow-x-auto">

            <div style={{ minWidth: width + 'px' }} className="w-full mx-auto" >
                {children}
            </div>

            {/* Buscador y Ordenación */}
            <div className="@container">
                <div className="my-2 flex flex-col-reverse items-end gap-2 @3xl:flex-row @3xl:justify-between px-4 py-2 bg-zinc-200 dark:bg-zinc-600 rounded-md w-full  ">
                    <div className="w-fit flex gap-4 px-4 py-2 bg-zinc-100 dark:bg-zinc-700 rounded-md border border-current/20">
                        {columns.map(({ name, label }) => (
                            <div key={name} onClick={() => ordenar(name)} className={`cursor-pointer`}>
                                {label}
                                {orden.columna === name && (orden.direccion === "asc" ? " ▲" : " ▼")}
                            </div>
                        ))}
                    </div>

                    <input type="search" placeholder="🔎 Buscar..."
                        onChange={e => { setBusqueda(e.target.value) }}
                        className="px-4 py-2 bg-zinc-100 dark:bg-zinc-700 outline-none border border-current/20  focus:border-current/40 rounded-md"
                    />
                </div>
            </div>


            <table style={{ minWidth: width + 'px' }} className="w-full table-auto mx-auto border border-slate-300">
                <thead>
                    <tr className="text-left h-12 text-slate-200 bg-slate-700 dark:text-slate-700 dark:bg-slate-200 ">
                        <th className="w-16"></th>
                        {columns.map(({ name, label }) => (
                            <th key={name} onClick={() => ordenar(name)} className={`${classTD} cursor-pointer`}>
                                {label}
                                {orden.columna === name && (orden.direccion === "asc" ? " ▲" : " ▼")}
                            </th>
                        ))}
                        {actions && <th className="w-40 pr-4 text-right">Acciones</th>}
                    </tr>

                </thead>
                <tbody>
                    {orderedData
                        .filter((item) => {
                            if (!busqueda.trim()) return true;
                            const texto = busqueda.toLowerCase();
                            return columns.some(({ name }) =>
                                String(item[name] ?? "").toLowerCase().includes(texto)
                            );
                        })
                        .map(
                            (row, i) => (
                                <tr
                                    key={row.id}
                                    onClick={() => prefix ? router.push(prefix + '/' + row.id) : {}}
                                    className={`h-12 odd:bg-slate-100 dark:odd:bg-slate-700 ${prefix ? "hover:cursor-pointer" : ""}`}
                                >

                                    <td className={`${classTD} text-slate-400 text-right pr-4`}>
                                        {i + 1}
                                    </td>

                                    {columns.map(({ name: colName }) => (
                                        <td key={row.id + colName + row[colName]} className={`${classTD}`}>
                                            {typeof row[colName] != 'boolean'
                                                ? row[colName]
                                                : row[colName] ? "✅" : "⬜"
                                            }
                                        </td>
                                    ))}
                                    {actions &&
                                        <td>
                                            <div className="flex justify-end gap-1 mx-2" onClick={e => e.stopPropagation()} >
                                                {actions.map((Action, index) => (
                                                    <Action
                                                        key={index}
                                                        data={row}
                                                    />
                                                ))}
                                            </div>
                                        </td>}
                                </tr>
                            )
                        )}
                </tbody>
            </table>
        </div >
    );
}



