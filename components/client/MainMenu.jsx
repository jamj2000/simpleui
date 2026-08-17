'use client';

import { useEffect, useRef, useState } from 'react';


const colorBase = "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
const menuClasses = `${colorBase} z-20 mt-2 md:mt-0 px-6 md:px-6 py-4 md:py-2 flex flex-col gap-1 absolute md:relative top-full md:top-0 w-max md:w-fit md:flex md:flex-row md:items-center md:justify-end rounded-lg md:border-none md:shadow-none shadow-lg`;


const positions = {
    "right": "right-0",
    "left": "left-0",
}


export function MainMenu({ position = "right", children }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        //   document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('mouseup', () => setIsOpen(false));

        return () => {
            document.removeEventListener('mouseup', () => setIsOpen(false));
        };
    }, [isOpen]);

    return (
        <div ref={menuRef} className="relative inline-block">
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className={`${colorBase} block p-2 text-2xl md:hidden rounded-full hover:outline hover:outline-slate-600`}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            {/* Menú */}
            <div
                className={`${isOpen ? 'flex' : 'hidden'} ${menuClasses} ${positions[position]}`}
            >
                {children}
            </div>
        </div>
    );
}

const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />    // ≡
    </svg>
)

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />       // ×
    </svg>
)

