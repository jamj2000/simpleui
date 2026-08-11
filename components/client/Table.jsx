"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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

    useEffect(() => {
        setOrden({
            columna: sort,
            direccion: direction,
        });
    }, [sort, direction]);

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

            <div style={{ width: width + 'px' }} className="mx-auto" >
                {children}
            </div>

            <table style={{ width: width + 'px' }} className="mx-auto border border-slate-300">
                <thead>
                    <tr className="text-left h-12 text-slate-200 bg-slate-700 dark:text-slate-700 dark:bg-slate-200 ">
                        <th></th>
                        {columns.map(({ name, label }) => (
                            <th key={name} onClick={() => ordenar(name)} className={`${classTD} cursor-pointer`}>
                                {label}
                                {orden.columna === name && (orden.direccion === "asc" ? " ▲" : " ▼")}
                            </th>
                        ))}
                        {actions && <th className="w-30">Acciones</th>}
                    </tr>

                </thead>
                <tbody>
                    {orderedData.map(
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
                                        {row[colName]}
                                    </td>
                                ))}
                                {actions &&
                                    <td>
                                        <div className="flex gap-1" onClick={e => e.stopPropagation()} >
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



