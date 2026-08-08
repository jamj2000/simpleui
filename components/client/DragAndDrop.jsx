'use client'

import { useState } from 'react'



const initColumns = {
    todo: {
        titulo: 'To Do',
        items: [
            { id: '1', titulo: 'Diseñar base de datos', badge: 'Urgente', color: 'bg-red-100' },
            { id: '2', titulo: 'Crear componentes', badge: 'Urgente', color: 'bg-red-100' }
        ]
    },
    inProgress: {
        titulo: 'In Progress',
        items: [
            { id: '3', titulo: 'Configurar enrutador', badge: 'Normal', color: 'bg-amber-100' }
        ]
    },
    done: {
        titulo: 'Done',
        items: [
            { id: '4', titulo: 'Instalar dependencias', badge: 'Baja', color: 'bg-lime-100' }
        ]
    }
}



export function DragAndDrop({ columns = initColumns }) {

    const [columnas, setColumnas] = useState(columns)


    const handleDragStart = (e, id, origen) => {
        e.dataTransfer.setData('text/plain', id)
        e.dataTransfer.setData('origen', origen)
    }

    const handleDragOver = (e) => e.preventDefault()

    const handleDrop = (e, destino) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text/plain')
        const origen = e.dataTransfer.getData('origen')

        if (!id || origen === destino) return

        const elementoAMover = columnas[origen].items.find(item => item.id === id)

        setColumnas((prev) => ({
            ...prev,
            [origen]: {
                ...prev[origen],
                items: prev[origen].items.filter((item) => item.id !== id)
            },
            [destino]: {
                ...prev[destino],
                items: [...prev[destino].items, elementoAMover]
            }
        }))
    }

    return (
        <div className="flex gap-5 p-5 flex-wrap">

            {Object.entries(columnas).map(([id, columna]) => (
                <div
                    key={id}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, id)}
                    className="border-2 border-dashed border-gray-300 p-4 flex-1 min-h-75 bg-gray-50 dark:bg-zinc-800 rounded-lg"
                >
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{columna.titulo}</h3>

                    {columna.items.map((item) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item.id, id)}
                            className={`${item.color} p-3 my-2 border border-gray-200 dark:border-gray-700 rounded-md cursor-grab shadow-sm`}
                        >
                            <h4 className="font-medium text-sm text-gray-800">{item.titulo}</h4>
                            <span className="text-xs font-bold text-gray-800">{item.badge}</span>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}
