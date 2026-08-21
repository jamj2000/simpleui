"use client";

import { useRouter } from "next/navigation";
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

    const router = useRouter()

    const [orden, setOrden] = useState({
        columna: sort,
        direccion: direction,
    });

    // useEffect(() => {
    //     setOrden({
    //         columna: sort,
    //         direccion: direction,
    //     })
    // }, [sort, direction])


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


                {/* Header */}
                <div className="my-2 flex justify-end xl:my-0">
                    <div className="w-fit flex gap-4 px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-md xl:w-full xl:rounded-none xl:grid xl:grid-cols-[2fr_3fr_1fr_1fr] xl:gap-4 shadow-md shadow-current/20">
                        {columns.map(({ name, label }) => (
                            <div key={name} onClick={() => ordenar(name)} className={`cursor-pointer`}>
                                {label}
                                {orden.columna === name && (orden.direccion === "asc" ? " ▲" : " ▼")}
                            </div>
                        ))}
                        {actions &&
                            <div className="hidden xl:flex justify-end">Acciones</div>
                        }
                    </div>
                </div>

                <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 items-stretch xl:grid-cols-1 xl:gap-0 w-full'>

                    {/* Card / Row */}
                    {orderedData.map((data) =>
                        <div
                            key={data.id}
                            onClick={() => prefix ? router.push(prefix + '/' + data.id) : {}}
                            className={(prefix ? "cursor-pointer" : "") + " " + "xl:odd:bg-slate-50 xl:even:bg-slate-100 xl:dark:odd:bg-slate-800 xl:dark:even:bg-slate-700 "}
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



const classBase = "place-self-stretch p-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 rounded-md shadow-md shadow-current/20"
const classXl = "xl:p-2 xl:grid xl:grid-cols-[2fr_3fr_1fr_1fr] xl:border-none xl:rounded-none xl:items-center xl:gap-4 xl:bg-inherit xl:dark:bg-inherit"

export const CardVacuna = ({ data, actions }) => (

    <div className={`${classBase} ${classXl}`}>

        <div className="font-semibold ">{data.nombre}</div>
        <div className="text-sm text-gray-500 dark:text-gray-300">{data.descripcion}</div>


        <div className="mt-2 xl:mt-0">{data.especie}</div>


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