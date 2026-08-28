"use client";

import { useState } from "react";


export function List2({
    prefix,
    data = [],
    columns = [],
    sort,
    direction = "asc",
    actions,
    card,
    children,
}) {
    const Card = card ?? CardEmpty

    const [orden, setOrden] = useState({
        columna: sort,
        direccion: direction,
    });

    const [busqueda, setBusqueda] = useState("")

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
        <div className="container mx-auto my-4">
            <div>
                <div className="w-full" >
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


                <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 items-stretch xl:grid-cols-1 xl:gap-0 w-full'>

                    {/* Card / Row */}
                    {orderedData
                        .filter((item) => {
                            if (!busqueda.trim()) return true;
                            const texto = busqueda.toLowerCase();
                            return columns.some(({ name }) =>
                                String(item[name] ?? "").toLowerCase().includes(texto)
                            );
                        })
                        .map((data) =>
                            <div
                                key={data.id}
                                className={(prefix ? "cursor-pointer" : "") + " " + "xl:odd:bg-slate-50 xl:even:bg-slate-100 xl:dark:odd:bg-slate-800 xl:dark:even:bg-slate-700 "}
                            >
                                <Card
                                    prefix={prefix}
                                    data={data}
                                    actions={actions}
                                />
                            </div>
                        )
                    }
                </div>

            </div>


        </div >
    );
}



const CardEmpty = () => (
    <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 flex flex-col h-full shadow-md shadow-gray-600">
        Coloca aquí el contenido del Card
    </div>
)

