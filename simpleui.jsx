/*
Simple UI - Biblioteca de componentes
Copyright (c) 2026-Present - José Antonio Muñoz Jiménez - jamj2000 at gmail dot com
Licencia MIT

Repositorio: https://github.com/jamj2000/simpleui
Descarga:    curl -O https://raw.githubusercontent.com/jamj2000/simpleui/main/simpleui.jsx
App ejemplo: https://github.com/jamj2000/simpleui-app
*/


// Se usan en Alert y Badge (no se exportan)
const styles = {
    info: "bg-blue-100 text-blue-800 border-blue-300/70 dark:bg-blue-700/30 dark:text-blue-200",
    success: "bg-green-100 text-green-800 border-green-300/70 dark:bg-green-700/30 dark:text-green-200",
    warning: "bg-amber-100 text-amber-800 border-amber-300/70 dark:bg-amber-700/30 dark:text-amber-200",
    error: "bg-red-100 text-red-800 border-red-300/70 dark:bg-red-700/30 dark:text-red-200",
}


export const Alert = ({ variant = "info", children }) => {
    return (
        <div className={`p-4 rounded-xl border-l-4 ${styles[variant]} shadow-md`}>
            {children}
        </div>
    )
}


export const Badge = ({ variant = "info", children, className = "" }) => (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full border ${styles[variant]} ${className}`}>
        {children}
    </div>
)


// Usar dentro de componentes tipo 'use client'
export const Button = ({ onClick, children, className = "bg-indigo-100 dark:bg-indigo-500" }) => (
    < button
        type="button"
        onClick={onClick}
        className={`px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 cursor-pointer hover:opacity-80 shadow-md ${className}`}
    >
        {children}
    </button>
)



// Usar dentro de un formulario
export const Submit = ({ formAction, disabled = false, children, className = "bg-blue-200 dark:bg-blue-500" }) => (
    <button
        type="submit"
        disabled={disabled}
        formAction={formAction}
        className={`px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 cursor-pointer hover:opacity-80 shadow-md ${className} `}
    >
        {children}
    </button>
)



// variant: 'horizontal' | 'vertical'
export const Separator = ({ variant = 'horizontal' }) => <div className={`bg-slate-300 dark:bg-slate-700 rounded-full ${variant === 'horizontal' ? 'w-full h-px' : 'w-px self-stretch'}`} />


export const Skeleton = () => (
    <div className="space-y-2 border border-slate-300 p-2 w-fit">
        <div className="h-4 w-40 rounded bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
        <div className="h-4 w-80 rounded bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
        <div className="h-4 w-40 rounded bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
    </div>
)



export const Space = ({ height = 10 }) => <div style={{ height: `${height}px` }} />



export const Spinner = () => <div className={`size-20 border-t-4 border-b-4 border-blue-300 dark:border-blue-800 rounded-full animate-spin`} />



// Usar dentro de componente que tenga className='group relative'
export const Tooltip = ({ children }) => (
    <div className="absolute top-0 right-0 text-xs invisible group-hover:visible backdrop-blur-xs bg-amber-100/95 dark:bg-amber-900/95 p-4 border border-slate-300 dark:border-slate-600 shadow-lg rounded-md">
        {children}
    </div>
)


// Se abre al hacer hover en el title y se cierra al dejar de hacer hover en el title (title no es clickeable)
export const Popover = ({ title, children }) => (
    <div className="group relative w-fit">
        {title}
        <div className="z-10 absolute top-full left-0 invisible group-hover:visible rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl">
            {children}
        </div>
    </div>
)


// Se abre al hacer click en el title y se cierra al perder el focus (click fuera) (title es clickeable)
export const Dropdown = ({ title, children, className = "" }) => (
    <div className="group relative w-fit">
        <div tabIndex={0} role="button" className={`cursor-pointer ${className}`}>
            {title}
        </div>

        <div tabIndex={-1} className="z-10 absolute top-full left-0 mt-1 min-w-max hidden focus-within:block group-focus-within:block rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl">
            {children}
        </div>
    </div>
)


// Similar a Dropdown pero no pierde el foco al hacer click fuera (toggle)
export const Dropdown2 = ({ title, children, className = "" }) => (
    <details className="group relative w-fit">
        <summary
            className={`flex cursor-pointer list-none items-center gap-2 ${className}`}
        >
            <span className="inline-flex w-4 justify-center font-mono">
                <span className="transition-transform group-open:rotate-45">+</span>
            </span>
            <span>{title}</span>
        </summary>

        <div className="absolute top-full left-0 z-10 mt-1 min-w-max rounded-lg border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-zinc-800">
            {children}
        </div>
    </details>
);


export const Modal = ({ id, trigger, children }) => (
    <>
        <button type="button" command="show-modal" commandfor={id}>
            {trigger}
        </button>

        <dialog id={id} className="w-[clamp(500px,50%,1000px)] m-auto backdrop:backdrop-blur-xs backdrop:bg-black/20 rounded-lg bg-white p-4 shadow-xl">
            <button type="button" command="close" commandfor={id} className="absolute top-2 right-2">❌</button> {/* Un signo de cierre menos llamativo es ✕ */}

            {children}
        </dialog>
    </>
)



