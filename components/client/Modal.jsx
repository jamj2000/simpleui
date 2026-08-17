// Modal.jsx
'use client'
import { useRef } from 'react'

export const Modal = ({ children, trigger, className = "" }) => {
    const dialogRef = useRef(null)

    const openDialog = () => dialogRef.current?.showModal()
    const closeDialog = () => dialogRef.current?.close()

    // Cierra el modal solo si el objetivo (target) del clic fue directamente el tag <dialog> (es decir, el backdrop)
    const handleDialogClick = (e) => {
        if (e.target === dialogRef.current) {
            closeDialog()
        }
    }

    return (
        <>
            {/* Wrapper accesible para el trigger */}
            <div
                onClick={openDialog}
                className={`inline-block w-fit cursor-pointer ${className}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openDialog()}
            >
                {trigger}
            </div >

            <dialog
                ref={dialogRef}
                onClick={handleDialogClick}
                // className="w-[clamp(500px,50%,1000px)] m-auto p-0 backdrop:bg-black/50 overflow-hidden rounded-lg outline-none shadow-md shadow-neutral-400/50"
                className="
                    m-auto w-[clamp(500px,50%,1000px)]
                    overflow-hidden rounded-lg p-0
                    outline-none
                    shadow-md shadow-neutral-400/50

                    opacity-0 scale-95
                    transition-[opacity,transform,display,overlay]
                    duration-500
                    ease-out

                    open:opacity-100
                    open:scale-100

                    starting:open:opacity-0
                    starting:open:scale-95

                    backdrop:bg-black/0
                    open:backdrop:bg-black/50
                    backdrop:transition-[background-color,display,overlay]
                    backdrop:duration-500
                "

            >
                {/* Contenedor interno relativo para evitar que el scroll o los clics internos afecten al backdrop */}
                <div className="relative p-6 max-h-[85vh] overflow-y-auto">
                    {/* Botón de cierre accesible */}
                    <button
                        onClick={closeDialog}
                        type="button"
                        aria-label="Cerrar modal"
                        className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
                    >
                        ❌
                    </button>

                    {children}
                </div>
            </dialog>
        </>
    )
}



// 'use client'
// import { useRef } from 'react'
// // https://medium.com/@bomber.marek/how-to-use-dialog-in-react-easy-modals-tooltips-81e44d570c8a



// export const Modal = ({ children, trigger }) => {
//     const dialogRef = useRef(null)

//     const openDialog = () => dialogRef.current?.showModal()

//     const closeDialog = () => dialogRef.current?.close()

//     const handleClickOutside = (e) => {
//         if (dialogRef.current) {
//             const rect = dialogRef.current.getBoundingClientRect()
//             const isInDialog = (rect.top <= e.clientY
//                 && e.clientY <= rect.top + rect.height
//                 && rect.left <= e.clientX
//                 && e.clientX <= rect.left + rect.width)
//             if (!isInDialog) {
//                 dialogRef.current.close()
//             }
//         }
//     }


//     return (
//         <>
//             <div onClick={openDialog} className='inline-block w-fit'>
//                 {trigger}
//             </div>


//             <dialog
//                 ref={dialogRef}
//                 onMouseDown={handleClickOutside}
//                 className="w-[clamp(500px,50%,1000px)] m-auto backdrop:bg-black/50 backdrop:backdrop-blur-none  overflow-y-auto rounded-lg outline-none shadow-2xl"
//             >
//                 <div onClick={closeDialog} className="absolute top-4 right-4 cursor-pointer" >
//                     ❌
//                 </div>

//                 {children}
//             </dialog>


//         </>
//     )
// }

