"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export function List({
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

    const router = useRouter()

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
        <div className="container mx-auto my-4">
            <div>
                <div className="my-2 flex justify-end ">
                    {sort &&
                        <div className="w-fit flex gap-4 px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-md">
                            {columns.map(({ name, label }) => (
                                <div key={name} onClick={() => ordenar(name)} className={`cursor-pointer`}>
                                    {label}
                                    {orden.columna === name && (orden.direccion === "asc" ? " ▲" : " ▼")}
                                </div>
                            ))}
                        </div>
                    }
                </div>

                <div className="w-full" >
                    {children}
                </div>

                <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 items-stretch'>
                    {orderedData.map((data) =>
                        <div
                            key={data.id}
                            onClick={() => prefix ? router.push(prefix + '/' + data.id) : {}}
                            className={prefix ? "cursor-pointer" : ""}
                        >
                            <Card
                                onClick={() => prefix ? router.push(prefix + '/' + data.id) : {}}
                                data={data}
                                actions={actions}
                            />
                        </div>
                    )}
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


