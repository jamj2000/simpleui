'use client'
import { useRef } from 'react'
// https://medium.com/@bomber.marek/how-to-use-dialog-in-react-easy-modals-tooltips-81e44d570c8a



export const Modal = ({ children, trigger }) => {
    const dialogRef = useRef(null)

    const openDialog = () => dialogRef.current?.showModal()

    const closeDialog = () => dialogRef.current?.close()

    const handleClickOutside = (e) => {
        if (dialogRef.current) {
            const rect = dialogRef.current.getBoundingClientRect()
            const isInDialog = (rect.top <= e.clientY
                && e.clientY <= rect.top + rect.height
                && rect.left <= e.clientX
                && e.clientX <= rect.left + rect.width)
            if (!isInDialog) {
                dialogRef.current.close()
            }
        }
    }


    return (
        <>
            <div onClick={openDialog} className='inline-block w-fit'>
                {trigger}
            </div>


            <dialog
                ref={dialogRef}
                onMouseDown={handleClickOutside}
                className="w-[clamp(500px,50%,1000px)] m-auto backdrop:bg-black/50 backdrop:backdrop-blur-none  overflow-y-auto rounded-lg outline-none shadow-2xl"
            >
                <div onClick={closeDialog} className="absolute top-4 right-4 cursor-pointer" >
                    ❌
                </div>

                {children}
            </dialog>


        </>
    )
}

