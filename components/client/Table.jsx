"use client";

import { useEffect, useState } from "react";
import Link from "next/link";



const classTD = "px-2"


export function Table({
    data = [],
    columns = [],
    sort = "nombre",
    direction = "asc",
    width = 300,
    actions,
    children,
    renderRow
}) {
    const [orden, setOrden] = useState({
        columna: sort,
        direccion: direction,
    });

    useEffect(() => {
        setOrden({
            columna: sort,
            direccion: direction,
        })
    }, [sort, direction])

    // Protección si la data aún no llega
    const originalData = data ?? [];

    // Ordenamiento seguro (React Compiler se encarga de memorizarlo)
    const orderedData = [...originalData].sort((a, b) => {
        const valorA = a[orden.columna] ?? "";
        const valorB = b[orden.columna] ?? "";

        let resultado = 0;
        if (typeof valorA === "string" && typeof valorB === "string") {
            resultado = valorA.localeCompare(valorB, undefined, { sensitivity: "base" });
        } else {
            resultado = valorA > valorB ? 1 : valorA < valorB ? -1 : 0;
        }

        return orden.direccion === "asc" ? resultado : -resultado;
    });

    function ordenar(columna) {
        setOrden(actual => ({
            columna,
            direccion:
                actual.columna === columna && actual.direccion === "asc"
                    ? "desc"
                    : "asc",
        }));
    }

    if (!data) return <p>Cargando datos...</p>;

    return (
        <div className="my-4 container mx-auto w-fit overflow-hidden overflow-x-auto shadow-lg">
            {children}
            <table style={{ width: width * 4 }} className="border border-slate-300">
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
                            <tr key={row.id} className="odd:bg-slate-100 dark:odd:bg-slate-700 h-12">

                                <td className={`${classTD} text-slate-400 text-right pr-4`}>{i + 1}</td>

                                {columns.map(({ name: colName }) => (
                                    <td key={row.id + colName + row[colName]} className={`${classTD}`}>
                                        {row[colName]}
                                    </td>
                                ))}
                                {actions &&
                                    <td>
                                        {actions.map((Action, index) => (
                                            <Action
                                                key={index}
                                                data={row}
                                            />
                                        ))}
                                    </td>}
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}



